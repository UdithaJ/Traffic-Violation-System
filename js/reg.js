


function checkdata() {
  var checkBox = document.getElementById("check");
  var button = document.getElementById("btn");
  if (checkBox.checked == true){
    button.style.display = "block";
  } else {
     button.style.display = "none";
  }
}