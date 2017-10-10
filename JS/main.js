/**
 * Created by Антон on 07.10.2017.
 */
(function () {
    var buttonHide =  document.querySelector('.hide-admin-login'),
        buttonShow = document.querySelector('.show-admin-login'),
        form = document.querySelector('.login-admin');

    function hideAdmin() {
        form.className = "login-form-wrapper login-admin hidden";
    }

    function showAdmin() {
        form.className = "login-form-wrapper login-admin visible";
    }



    buttonHide.addEventListener("click", hideAdmin);
    buttonShow.addEventListener("click", showAdmin);

    var imgHead = [
        'img/slide1.png',
        'img/slide2.png',
        'img/slide3.png'
    ], i=1;
    function csaHead(){

        if(i > (imgHead.length-1)){
            $('.slider').animate({'opacity':'0'},1000,function(){
                i=1;
                $('.slider').css({'background':'url('+imgHead[0]+')',
                    'background-repeat': 'no-repeat',
                    'background-size': 'contain',
                    'background-position': 'right -50px'
                });
            });
            $('.slider').animate({'opacity':'1'},1000);
        }else{
            $('.slider').animate({'opacity':'0'},1000,function(){
                $('.slider').css({'background':'url('+imgHead[i]+')',
                    'background-repeat': 'no-repeat',
                    'background-size': 'contain',
                    'background-position': 'right -50px'
                });
                i++;
            });
            $('.slider').animate({'opacity':'1'},1000);

        }

    }
    var intervalCsaHead = setInterval(csaHead,4000);


}());