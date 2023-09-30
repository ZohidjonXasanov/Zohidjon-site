var input_1 = document.getElementById("input_1");
var input_2 = document.getElementById("input_2");
var p = document.getElementById("p");

(function () {
        var txt;
        if (confirm("Register your email!")) {
            txt = "ok"
        } else {
            txt = "You cannot enter without an email!";
        }
        alert(txt)
})();

function btn() {
    if (input_1.value == "xzohidjon8348@gmail.com" | input_2.value == "Mullajonov") {
        window.location.replace(`./index/index.html`);
    }
    else {
        p.innerHTML = "Ma'lumot noto'g'ri"
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };
  
  document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);
  