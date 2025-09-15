const submitButton = document.querySelector("#save-option");
const inputField = document.querySelector("#name-input");
let optionsGreeting = document.querySelector("#options-greeting");
let message = "Hello, ";

const getData = () => {
  chrome.storage.sync.set({ name: inputField.value }).then(() => {
    console.log("Value is set");
  });
  chrome.storage.sync.get(["name"]).then((result) => {
    optionsGreeting.textContent = "Options Page. " + message + result.name;
  });
};

// optionsGreeting.textContent = "Options Page. " + message + inputField.value;

submitButton.addEventListener("click", getData);
