let content = document.getElementById("content");
const currentTime = new Date().toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: "true",
});

if (content) {
    content.textContent += " " + currentTime;
}

chrome.action.setBadgeText({ text: "TIME" });

