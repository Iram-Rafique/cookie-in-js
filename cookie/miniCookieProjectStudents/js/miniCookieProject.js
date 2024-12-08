function validate(){
    var check = document.getElementById("mail").value;

    var regExpression = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9])+.(.[a-z])+.(.[a-z]+)(.[a-z]+)?$/;

    if(regExpression.test(check)){
        var username = document.getElementById("username").value;


        setCookie(username);

        window.location.href = "miniCookieProjectMeun.html"
       
    }
    else{
        document.getElementById("status").innerHTML = "Your email address is invalid"
    }
}
function setCookie(username){
    var now = new Date();

    var expiration = new Date(now.getTime() +(24*60*60*1000))
    
    var expires = "expires=" + expiration.toUTCString();

    
    document.cookie ="username=" + encodeURIComponent (username) + "; " + expires;
}

function getCookie(){

    var name = "username=";
    var decodedCookie = decodeURIComponent(document.cookie);
    
    var cookieArray = decodedCookie.split("; ")

    for (let i = 0; i< cookieArray.length; i++){
        var cookie = cookieArray[i];
        while(cookie.charAt(0) == ' '){
            cookie = cookie.substring(1);

        }
        if (cookie.indexOf(name) == 0){
            return cookie.substring(name.length, cookie.length)
        }


    }

    return " ";

}