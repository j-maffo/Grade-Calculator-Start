// CS10 Grade Calculator
// Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
// Event Function
function btnClicked() {
  // Input
  let module1 = +document.getElementById("css1-in").value;
  let module2 = +document.getElementById("sp1-in").value;
  let module3 = +document.getElementById("sp2-in").value;
  let module4 = +document.getElementById("css2-in").value;
  let module5 = +document.getElementById("pa-in").value;
  // Process
  let average = (module1 + module2 + module3 + module4 + module5) / 5;
  // Output
  document.getElementById("results").innerHTML = average;
}
