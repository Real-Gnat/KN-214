$('.agreement').on('change', function () {
    if ($(this).is(':checked')) {
        $(".check-agreement").removeAttr("disabled")
    } else {
        $(".check-agreement").attr("disabled", true);
    }
})

    function validateForm() {
    const form = document.forms.form;
    let email = form.email.value;
    let password = form.password.value;
    let phone = form.phone.value;

  
    const emailReg = /[a-zA-Z0-9]+\@[a-zA-Z]{0,7}\.[a-zA-Z]{0,5}/.test(email);
    const passReg = /(^[A-Z]{1})+([a-zA-Z0-9]{7,})/.test(password);
    const phoneReg = /\++[0-9]{12}/.test(phone);

 
    const result = emailReg && passReg && phoneReg;
    const fieldIsEmptyOrMoreFields = form === '' || password === '' || phone === '';

   
    if (fieldIsEmptyOrMoreFields) {
        alert('Заповніть поля');
    }

   
    if (result) {
        alert('Поля заповнені успішно');

        console.log('email: ', email);
        console.log('password: ', password);
        console.log('phone: ', phone);

        form.reset();

        $(".check-agreement").attr("disabled", true);
    }

   
    if (!result && !fieldIsEmptyOrMoreFields) {
        emailReg ? null : alert('невірний email');
        passReg ? null : alert('Невірний пароль');
        phoneReg ? null : alert('невірний номер телефону');
    }


}


var block = document.getElementById('kostjum')
block.addEventListener('click', () => {alert('Ви вибрали костюм')});

var block = document.getElementById('Vzutya')
block.addEventListener('mouseover', () => {alert('Ви вибрали взуття')});

var block = document.getElementById('aksesyaru')
block.addEventListener('mouseout', () => {alert('Ви вибрали аксесуари')});



let darkTheme = true;
$('#themeBtn').click(() => {
    if (darkTheme) {
        $('.theme').css({
            'background-color': ' #191f25'
        });


        $('header').css({
            'background-color': ' #191f25'
        })


        $('p, label, button').css({
            'color': '#fff'
        })
        $('pre, a').css({
            'color': '#fff'
        })
        $('h2, a').css({
            'color': 'rgb(255, 255, 255)'
        })
        
        $('#themeBtn').css({
            'background-color': 'red',
            'border': '10px solid purple',
            'color': 'pink'
        });

        $('#themeBtn').text('Change Mode');

        $('.nav-info').css({
            'flex-direction': 'row-reverse'
        });

        
        darkTheme = false;
        
        $(`#themeBtn`).insertBefore("#header-menu");
    } else {
        
        $('.theme').css({
            'background-color': ' #f6f6f6'
        });
        $('pre, p, h2, label, button').css({
            'color': '#000'
        })
        $('pre, a').css({
            'color': '#484848'
        })
        $('h2, a').css({
            'color': '#f0f'
        })
      
        $('#themeBtn').css({
            'background-color': 'greenyellow',
            'border': '10px solid green',
            'color': 'blue'
        });
      
        $(`#themeBtn`).insertAfter('#header-menu');
        

        const lis = document.querySelectorAll('.about-li');
        console.log(lis);

        darkTheme = true;
    }
});

