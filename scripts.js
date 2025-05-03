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

  
});