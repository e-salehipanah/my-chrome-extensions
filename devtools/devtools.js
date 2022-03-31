chrome.devtools.panels.create("Example panel", null, "panel/panel.html", null);

// chrome.devtools.panels.elements.createSidebarPane('My sidebar pane');
chrome.devtools.panels.sources.createSidebarPane(
  "My sidebar pane",
  function (pane) {
    pane.setPage("pane/pane.html");
    pane.setHeight("200px");
    pane.onShown.addListener(function () {
      pane.setExpression('('+getAllDives.toString()+')()')
    });
  }
);

function getAllDives() {
    let divs = Array.prototype.slice.call(document.getElementsByTagName('div'));
    divs.__proto__ = null;
    return divs;
}
