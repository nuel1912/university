var navLinks = document.getElementById("navLinks");
var bars = document.getElementById("bars");

bars.onclick = function () {
    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        bars.src = "img/close.png";
    }
    else {
        bars.src = "img/bars.png";
    }
}







// var navLinks = document.getElementById("navLinks");

//     function show() {
//         navLinks.style.right = "0";
//     }
//     function hide() {
//         navLinks.style.right = "-40%";
//     }

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var next3 = document.getElementById("next3");
var submit = document.getElementById("submit");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");
var back3 = document.getElementById("back3");

var progress1 = document.getElementById("progress1");
var progress2 = document.getElementById("progress2");
var progress3 = document.getElementById("progress3");
var progress4 = document.getElementById("progress4");

    next1.onclick = function() {
        form1.style.left = "-200%";
        form2.style.left = "50%";
        progress2.style.width = "180px";
    }
    back1.onclick = function() {
        form1.style.left = "50%";
        form2.style.left = "200%";
        progress2.style.width = "90px";
    }
    next2.onclick = function() {
        form2.style.left = "-200%";
        form3.style.left = "50%";
        progress3.style.width = "270px";
    }
    back2.onclick = function() {
        form2.style.left = "50%";
        form3.style.left = "200%";
        progress3.style.width = "180px";
    }
    next3.onclick = function() {
        form3.style.left = "-200%";
        form4.style.left = "50%";
        progress4.style.width = "360px";
    }
    back3.onclick = function() {
        form3.style.left = "50%";
        form4.style.left = "200%";
        progress4.style.width = "270px";
    }
    // next4.onclick = function() {
    //     form4.style.left = "25%";
    //     form5.style.left = "50%";
    // }




    // var first1 = document.getElementById("first1");
    // var last1 = document.getElementById("last1");
    // var email1 = document.getElementById("email1");
    // var no1 = document.getElementById("no1");
    // var date = document.getElementById("date");
    // var age = document.getElementById("age");
    // var gender = document.getElementById("gender");
    // var add = document.getElementById("add");
    // var city = document.getElementById("city");
    // var state = document.getElementById("state");
    // var country = document.getElementById("country");
    // var pob = document.getElementById("pob");
    // var full = document.getElementById("full");
    // var email2 = document.getElementById("email2");
    // var no2 = document.getElementById("no2");
    // var state2 = document.getElementById("state2");
    // var occ = document.getElementById("occ");
    // var add2 = document.getElementById("add2");

    // function validate() {
    //     if (first1.value == "") {
    //         window.alert("Please your first name...");
    //         first1.focus();
    //         return false;
    //     }
    //     else if (last1.value == "") {
    //         window.alert("Please your last name...");
    //         last1.focus();
    //         return false;
    //     }
    //     else if (email1.value == "") {
    //         window.alert("Please your email...");
    //         email1.focus();
    //         return false;
    //     }
    //     else if (no1.value == "") {
    //         window.alert("Please your phone number...");
    //         no1.focus();
    //         return false;
    //     }
    //     else if (date.value == "") {
    //         window.alert("Please your date of birth...");
    //         date.focus();
    //         return false;
    //     }
    //     else if (age.value == "") {
    //         window.alert("Please your age...");
    //         age.focus();
    //         return false;
    //     }
    //     else {
    //         form1.style.left = "-200%";
    //         form2.style.left = "50%";
    //         progress2.style.width = "225px";
    //         return true;
    //     }
    // }

    // function validate2() {
    //     if (gender.value == "") {
    //         window.alert("Please your gender...");
    //         gender.focus();
    //         return false;
    //     }
    //     else if (add.value == "") {
    //         window.alert("Please your address...");
    //         add.focus();
    //         return false;
    //     }
    //     else if (city.value == "") {
    //         window.alert("Please your city...");
    //         city.focus();
    //         return false;
    //     }
    //     else if (state.value == "") {
    //         window.alert("Please your state...");
    //         state.focus();
    //         return false;
    //     }
    //     else if (country.value == "") {
    //         window.alert("Please your country...");
    //         country.focus();
    //         return false;
    //     }
    //     else if (pob.value == "") {
    //         window.alert("Please your place of birth...");
    //         pob.focus();
    //         return false;
    //     }
    //     else {
    //         form2.style.left = "-200%";
    //         form3.style.left = "50%";
    //         progress3.style.width = "327.5px";
    //         return true;
    //     }
    // }





    function showPreview(event) {
        if (event.target.files.length > 0) {
            var src = URL.createObjectURL(event.target.files[0]);
            var preview = document.getElementById("dummy");
            preview.src = src;
            preview.style.display = "block";
        }
    }