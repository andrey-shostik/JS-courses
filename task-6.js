/* Задание №6. Реализуйте класс BaseValidator, который будет иметь один публичный метод в прототипе validate. Также нужно реализовать 
классы EmailValidator, DomainValidator, DateValidator, PhoneValidator, которые будут наследоваться от BaseValidator и 
определять метод validate каждый по-своему. Дополнительное задание: в классах(не в прототипах) EmailValidator, DomainValidator, 
DateValidator, PhoneValidator реализовать кэширование. Непосредственно в классе(не в прототипе) BaseValidator реализовать метод 
getCachedValue, который будет брать закэшированное значение из нужного класса и возвращать его вместо вычеслений.
const emailValidator = new EmailValidator();
const domainValidator = new DomainValidator();
const dateValidator = new DateValidator();
const phoneValidator = new PhoneValidator();

console.log(emailValidator.validate('phphtml@mail.ru'));
console.log(domainValidator.validate('phphtml.net'));
console.log(dateValidator.validate('12.05.2020'));
console.log(phoneValidator.validate('+375 (29) 817-68-92')); //тут можете формат своей страны */