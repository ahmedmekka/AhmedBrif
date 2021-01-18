function store() {
    var text1 = document.getElementById("text1");
    var textpassword = document.getElementById('textpassword');
    var textrepassword = document.getElementById('textrepassword');
    if (textpassword.value != textrepassword.value) {



        alert("deffirent Passwords ")
    } else {
        localStorage.setItem("username", text1.value);
        localStorage.setItem("password", textrepassword.value);
        window.location.href = "brif2.html"
    }


}

function logn() {

    var text2 = document.getElementById("text2").value;
    var textpassword2 = document.getElementById("textpassword2").value;
    if (text2 == localStorage.getItem("username") && localStorage.getItem("password")) {
        window.location.href = "livecoding.html"
    } else {
        alert("password or username is incorrect")
    }

}