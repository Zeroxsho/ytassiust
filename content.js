// Function to extract YouTube share links from the YouTube page
function extractYouTubeShareLinks() {
  var links = [];
  var anchorElements = document.getElementsByTagName("a");

  for (var i = 0; i < anchorElements.length; i++) {
    var href = anchorElements[i].href;

    // Check if the link is a YouTube share link
    if (href.includes("youtu.be")) {
      links.push(href);
    }
  }

  return links;
}

// Function to save links to a text file
function saveToTextFile(links) {
  var text = links.join("\n");
  var blob = new Blob([text], { type: "text/plain" });
  var anchor = document.createElement("a");
  anchor.download = "youtube_share_links.txt";
  anchor.href = URL.createObjectURL(blob);
  anchor.target = "_blank";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

// Function to handle the browser action (button click)
function handleBrowserAction() {
  var youtubeShareLinks = extractYouTubeShareLinks();
  saveToTextFile(youtubeShareLinks);
}

// Add a listener for the browser action (button click)
chrome.browserAction.onClicked.addListener(handleBrowserAction);
