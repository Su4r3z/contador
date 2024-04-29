let count = 0;

const numberElement = document.getElementById("number");
const buttons = document.querySelectorAll(".btn");

if (numberElement) {
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      const buttonClasses = e.currentTarget.classList;

      if (buttonClasses.contains("aumentar")) {
        count++;
      } else if (buttonClasses.contains("reduzir")) {
        count--;
      } else {
        count = 0;
      }
      numberElement.style.color =
        count > 0 ? "green" : count < 0 ? "red" : "#222";
      numberElement.textContent = count;
    });
  });
} else {
  console.error("Element with ID 'number' not found!"); // Handle missing element
}
