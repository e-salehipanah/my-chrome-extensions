(function () {
  "use strict";
  console.log("hello world!");

  var h1 = document.getElementsByClassName("h1")[0];
  chrome.runtime.sendMessage(
    {
      firstHeading: h1.textContent,
    },
    function (response) {
      console.log(response.status);
    }
  );

  var messagePort = chrome.runtime.connect({
    name: "heading",
  });

  var h2s = Array.slice.call(document.getElementsBYTagName("h2"));
  h2s.forEach(function (h2){
      messagePort.postMessage({h2:h2.textContent})
  })

  messagePort.onMessage.addListener(function (message){
      console.log(message.status);
  })
})();
