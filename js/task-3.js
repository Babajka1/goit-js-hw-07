const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const cleanValue = input.value.trim();
  output.textContent = cleanValue || "Anonymous";
});
