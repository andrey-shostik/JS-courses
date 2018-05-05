function Validator(str) {
    this.myStr = str;

    this.isEmail = (str) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str) || false
    }

    this.isDomain = (str) => {
        return /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(str) || false
    }

    this.isDate = (str) => {  //Валидировать дату через регулярное выражение, наверно, не самое правильное решение. Сильно длинно и нечитаемо... Но вариант через кучу if, пожалуй, не лучше... но если надо перепишу
        return /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/.test(str) || false
    }

    this.isPhone = (str) => {
        return /\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/.test(str) || false
    }
}

const validator = new Validator();

console.log('email: ' + validator.isEmail('phphtmlm.ai@l.ru'));
console.log('domain: ' + validator.isDomain('phphtm.lnet'));
console.log('date: ' + validator.isDate('12.05.2020'));
console.log('phone: ' + validator.isPhone('(375) 291-68-92'));