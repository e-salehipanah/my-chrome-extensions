chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(
    ["googleRule"],
    function () {
      chrome.declarativeContent.onPageChanged.addRule([
        {
          id: "googleRule",
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { urlContains: "google.co.uk" },
            }),
          ],
          actions: [[new chrome.declarativeContent.ShowPageAction()]],
        },
      ]);
    }
  );
});
