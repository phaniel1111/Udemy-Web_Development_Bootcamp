import { hello } from "../../declarations/hello";

window.addEventListener("load", update())

document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true)

  if(document.getElementById("input-amount").value.length != 0)
  {await hello.topUp(inputAmount);}
  if(document.getElementById("withdrawal-amount").value.length != 0)
  {await hello.withdraw(outputAmount);}

  await hello.compound();

  update();

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled");

})

async function update(){
  const currentAmount = await hello.checkBalance();
  document.getElementById("value").innerHTML = Math.round(currentAmount * 100) / 100;
}