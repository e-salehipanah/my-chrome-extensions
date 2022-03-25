// chrome.runtime.onInstalled.addListener(function () {
//     chrome.declarativeContent.onPageChanged.removeRules(
//       ["googleRule"],
//       function () {
//         chrome.declarativeContent.onPageChanged.addRules([
//           {
//             id: "googleRule",
//             conditions: [
//               new chrome.declarativeContent.PageStateMatcher({
//                 pageUrl: { urlContains: "google.co.uk" },
//               }),
//             ],
//             actions: [new chrome.declarativeContent.ShowPageAction()],
//           },
//         ]);
//       }
//     );
//   });
  
function check(tab_id, data, tab) {
    if (tab.url.indexOf("example.com") > -1) {
      chrome.pageAction.show(tab_id);
    }
  }
  chrome.tabs.onUpdated.addListener(check);
  
/*
 ! note : 
    Google recently changed how page actions work,
  and the documentation hasn't really caught up. Previously,
   page actions appeared in the address bar,
  and only appeared on tabs where you had called show.
*/
