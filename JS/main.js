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
}());