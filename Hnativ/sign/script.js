function validateForm() {
    const form = document.forms.form;
let email = form.email.value;
    let password = form.password.value;
    let phone = form.phone.value;

    // регулярки для форми
    const emailReg = /[a-zA-Z0-9]+\@[a-zA-Z]{0,7}\.[a-zA-Z]{0,5}/.test(email);
    const passReg = /(^[A-Z]{1})+([a-zA-Z0-9]{5,})/.test(password);
    const phoneReg = /\++[0-9]{12}/.test(phone);

    // умови для виведення ынформації з форми
    const result = emailReg && passReg && phoneReg;
    const fieldIsEmptyOrMoreFields = form === '' || password === '' || phone === '';

    // якщо всі поля форми не заповнені
    if (fieldIsEmptyOrMoreFields) {
        alert('Заповніть всі поля форми!');
    }

    // Якщо форма добре провалідована
    if (result) {
        alert('В консолі отримали дані про користувача!');

        console.log('email: ', email);
        console.log('password: ', password);
        console.log('phone: ', phone);

        form.reset();

        $(".check-agreement").attr("disabled", true);
    }

    // Якщо поля форми не є пустими і форма не пройшла умови регулярок
    if (!result && !fieldIsEmptyOrMoreFields) {
        emailReg ? null : alert('Емейл введено в некоректному форматі!');
        passReg ? null : alert('Пароль введено не правильно!');
        phoneReg ? null : alert('Телефон введено в некоректному форматі!');
    }


}
