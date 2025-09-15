let content = document.getElementById("content");
const currentTime = new Date().toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: "true",
});
let name2 = document.querySelector("#name");

if (content) {
  content.textContent += " " + currentTime;
}

chrome.action.setBadgeText({ text: "TIME" });
chrome.storage.sync.get(["name"]).then((result) => {
  name2.textContent += result.name;
});
