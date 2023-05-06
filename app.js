var input_1 = document.getElementById("input_1");
var input_2 = document.getElementById("input_2");
var p = document.getElementById("p");
var button_map = document.getElementById("button_map");
var button_map_2 = document.getElementById("button_map_2");

function myFunction() {
    var txt;
    if (confirm("Emailingizni ro'yxatdan o'tkazing!")) {
        txt = "yaxshi!";
    } else {
        txt = "Emailsiz kira olmaysiz!";
    }
    alert(txt)
}

myFunction()

function btn() {
    if (input_1.value == "xzohidjon8348@gmail.com") {
        button_map_2.style.display = "none"
        button_map.innerHTML = `<a class="button btn text-light" href="./index/index.html" onclick="btn()" role="button">Login</a>`
    }
    if (input_2.value == "Mullajonov") {
        button_map_2.style.display = "none"
        button_map.innerHTML = `<a class="button btn text-light" href="./index/index.html" onclick="btn()" role="button">Login</a>`
    }
    else {
        button_map_2.style.display = "none"
        p.innerHTML += "Ma'lumot noto'g'ri"
    }
}