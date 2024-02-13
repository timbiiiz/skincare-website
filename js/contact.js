function buttonClick() {
  msg.mailText = "内容の回答は" + mailText.value + "へお送りいたします。";
}

let mailText = document.getElementById("mailText");
mailText.value = "";
let msg = document.getElementById("msg");

let send = document.getElementById("send");
send.addEventListener("click", buttonClick);