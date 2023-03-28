let code = document.getElementById("code");
let html = document.getElementById("html");



var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("myTextarea"), {
  mode: "javascript",
  theme: "material-darker",
  lineWrapping:true,
  lineNumbers: true,
  //matchBrackets: true,
  fontSize: "30px" // Set the font size to 16px
});



function send() {
  console.log(myCodeMirror.getValue());
  fetch("/test?code=" + encodeURIComponent(myCodeMirror.getValue()))
    .then((res) => {
      return res.text();
    })
    .then((code) => {
      console.log(html);
      html.innerHTML = code;
    })
    .catch((err) => {
      console.log(err);
    });
}
