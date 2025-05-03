const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

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
    ReportBody.innerHTML = "<h1>Somthing critical went wrong. Please reload the page.</h1>";
    return;
  }

  //Converts inputs(strings) to numbers
  const dividendNum = Number(dividend);
  const dividerNum = Number(divider);
   

});