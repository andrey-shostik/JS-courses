// OOP-ES5
// ES5 classes
function BasicUser(firstName, lastName, email) {
    // this = {}
 
    var firstName = firstName;
    var lastName = lastName;
 
    this._email = email;
 
    this.getFullName = function() {
        return `${firstName} ${lastName}`;
    };
 
    // return this
}
BasicUser.prototype.getEmail = function() {
    return this._email;
};
 
function User() {
    const user1 = {};
 
    BasicUser.apply(user1, arguments);
    const basicGetFullName = this.getFullName;
 
    this.getFullName = function() {
        user1.getFullName();
        return '';
    };
 
    // return { ...this, ...user1 }
    return Object.assign({}, this, user1);
}
 
User.prototype = Object.create(BasicUser.prototype);
User.prototype.constructor = User;
 
const user = new User('user', 'lastName', 'test@gmail.com');
 
user.__proto__.getEmail();
user.getFullName();
 
 
 
// OOP-ES6
class BasicUser {
    constructor(email) {
        this._email = email;
    }
 
    email = '123';
 
    getEmail() {
        return this.email;
    }
}
 
class User extends BasicUser {
    constructor(email) {
        super(email);
    }
 
    getEmail() {
        return super.getEmail() + '123';
    }
}
 
const user = new User('test@gmail');
console.log(user.getEmail());
