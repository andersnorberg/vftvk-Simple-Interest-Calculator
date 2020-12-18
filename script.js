//Made by Anders Norberg
//Lab for course "Cloud development with html, java and css"
//Creation date: 2020-12-18
//Update date:

//Function - when user click the Compute button
function compute()
{
  p = document.getElementById("principal").value;
  if (p <= 0)
  {
    alert("Please type a positive number for principal!")
    document.getElementById("principal").value = "";
    document.getElementById("principal").focus();
    return 0;
  }
  var yObj = document.getElementById("years");
  var yVal = yObj.options[yObj.selectedIndex].text;
  var r = document.getElementById("rate").value;
  var interest = p * yVal * r / 100;
  var ar = new Date().getFullYear() + parseInt(yVal);
  //alert("Artal= " + ar);
  document.getElementById("result").innerHTML = "If you deposit " + p + " at an interest rate of " + r + "%.You will recieve an amount of " + interest + ", in the year " + ar;
}
//Function that update the text-value when rate is changed
function showrate()
{
 document.getElementById("r_txt").innerHTML = document.getElementById("rate").value + "%";
}
