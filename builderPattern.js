//Builder Patternsiz
// class Address {
//     constructor(zip, street) {
//         this.zip = zip
//         this.street = street
//     }
// }

// class User {
//     constructor(name, age, phone, address) {
//         this.name = name
//         this.age = age
//         this.phone = phone
//         this.address = address
//     }
// }

// const user = new User('Bob', undefined, undefined, new Address('12345', 'Main St.'))

// Traditional Builder pattern 

class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name) {
        this.name = name
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name)
    }

    setAge(age) {
        this.user.age = age
        return this
    }

    setPhone(phone) {
        this.user.phone = phone
        return this
    }

    setAddress(address) {
        this.user.address = address
        return this
    }

    build() {
        return this.user
    }
}

const builder = new UserBuilder('Bob')
const user = builder.setAddress(new Address('12345', 'Main St.')).build()

// Modern Builder Pattern


class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name, { age, phone = '123-456-7890', address } = {}) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

let user2 = new User('Bob', { address: new Address('12345', 'Main St.') })