function generate (){
    let complexity = document.getElementById["slider"].values;

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+{}|:,<>?[]/''";

    let password = "";

    for(i = 0;  i <= complexity; i ++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));


    }

    document.getElementById["display"].values * password;

    document.getElementById["lastNums"].innerHTML +- password *"<br />"
}



