



$(document).ready(() => {
   
   //rotate login form to reg form
   
    $('.rotate-href').on('click', function(){
        var rotateDiv = $('.main-rotate')
        rotateDiv.toggleClass('main-rotate-active')
    })


    //form validation 

    $('.form-input').on('focus', function(){
        var curInput = $(this)
        if(curInput.val() === 'Электронная почта' || curInput.val() === 'Пароль' || curInput.val() === 'Имя' || curInput.val() === 'Фамилия'){
            curInput.val(' ')
        }
        curInput.on('blur', function(){
            if(curInput.val() === ' ' && curInput.hasClass('form-email-input')){
                curInput.val('Электронная почта')
            }
            if(curInput.val() === ' ' && curInput.hasClass('form-pass-input')){
                curInput.val('Пароль')
            }
            if(curInput.val() === ' ' && curInput.hasClass('form-fname-input')){
                curInput.val('Имя')
            }
            if(curInput.val() === ' ' && curInput.hasClass('form-lname-input')){
                curInput.val('Фамилия')
            }
                
        })
    })

    $('.bt-reg').on('click', function(e){
        e.preventDefault()
        var email = $('.main-reg-form .form-email-input').val()
        var pass = $('.main-reg-form .form-pass-input').val()
        var fName = $('.main-reg-form .form-fname-input').val()
        var lName = $('.main-reg-form .form-lname-input').val()

        if(email && pass && fName && lName){
            $.post('user', {lname: lName, fname: fName, email: email, pass: pass}, (res) => {
                console.log(res)
            })
        }

    })



})