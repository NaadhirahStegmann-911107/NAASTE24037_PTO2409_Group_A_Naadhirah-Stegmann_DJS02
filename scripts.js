const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const body = document.getElementById("mainBody");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Log input values to verify what was entered
  console.log(`Input values: dividend = ${dividend}, divider = ${divider}`)

  //Reset result display
  result.innerText = " ";
  
  //Scenario: Validation when values are missing
  if (!dividend.trim() || !divider.trim()) {
    result.innerText = "Division cannot be performed. Both input values are required. Please try again.";
    return;
  }
  
  //Scenario: Providing anything that is not a number would crash the programme
  if (isNaN(dividend) || isNaN(divider)) {
    console.error(new Error("Non-numeric input provided."));
    body.innerHTML = "<h1>Somthing critical went wrong. Please reload the page.</h1>";
    return;
  }

  //Converts inputs(strings) to numbers
  const dividendNum = Number(dividend);
  const dividerNum = Number(divider);

  //Log converted numbers to verify cenversion
  console.log(`Converted numbers: dividendNum = ${dividendNum}, dividerNum = ${dividerNum}`)
  
  //Scenario: An invalid division (division by zero)
  if (dividerNum === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error(new Error("Division by zero attempted"));
    return;
  }

  //Scenario: Dividing numbers (whole number or decimal result)
  const quotient = Math.floor(dividendNum / dividerNum);

  //Log quotient to verify calculation
  console.log(`Calculated quotient: ${quotient}`);

  result.innerText = quotient;
});