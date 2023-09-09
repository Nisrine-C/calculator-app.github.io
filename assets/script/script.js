let a = "";
let b = "";
let operand = "";
let screen = document.getElementById("screen")
function toggle(e) {
  let main = document.getElementsByTagName("body")[0]
  main.className = ""
  main.className = e.getAttribute("id")
}
window.onload = function () {
  document.getElementById("theme-1").checked = true
}
function keypad(e) {
  if (b) {
    if (e.value == "+" || e.value == "-" || e.value == "x" || e.value == "/") {
      operand = e.value;
      a = parseFloat(screen.innerHTML)
      b = "";
      screen.innerHTML = ""
    } else {
      screen.innerHTML = ""
      a = ""; b = ""; screen.innerHTML = ""
    }
  }
  if (!a && (e.value == "+" || e.value == "-" || e.value == "x" || e.value == "/")) {
    a = parseFloat(screen.innerHTML);
    screen.innerHTML = "";
    operand = e.value;
  }
  else if (!b && (e.value == "+" || e.value == "-" || e.value == "x" || e.value == "/")) {
    b = parseFloat(screen.innerHTML);
    screen.innerHTML = "";
    operand = e.value;
  } else if (a && operand && e.value == "=") {
    b = parseFloat(screen.innerHTML);
    if (operand == "+") { 
      screen.innerHTML = (a + b);
    }
    if (operand == "-") { 
      screen.innerHTML = (a - b);
    }
    if (operand == "x") { 
      screen.innerHTML = (a * b);
    }
    if (operand == "/") {
      if (b == 0) {
        screen.innerHTML = ""
      } else {
        screen.innerHTML = (a / b);
      }
    }
  }else if (e.value == "="){
    a = ""; b = "";operand=""
  } else {
    screen.innerHTML += e.value
  }
  if (e.value == "RESET") {
    a = ""; b = ""; screen.innerHTML = ""
  }
  if (e.value == "DEL") {
    screen.innerHTML = ""
  }
}