const inp_name = document.getElementById('inp_name');
const inp_email = document.getElementById('inp_email');
const inp_tel = document.getElementById('inp_tel');
const inp_msg = document.getElementById('inp_msg');
const btn = document.getElementById('btn')

btn.addEventListener('click',function () {
    if (inp_name,inp_email,inp_tel,inp_msg.value.trim() != "") {
        alert('message sent')
    } else {
        alert('enter the information')
    }
    return inp_name,inp_email,inp_tel,inp_msg.value = "";
});

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
  