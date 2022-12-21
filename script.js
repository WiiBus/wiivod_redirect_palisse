window.addEventListener("load", function(){
var form = document.querySelector("form");
form.querySelector("input[type=search]").value=""

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var search = form.querySelector("input[type=search]");
  window.open("https://www.google.com/search?q="+ search.value)
});
})