chrome.topSites.get(function(sites){
    console.log(sites);
})

chrome.bookmarks.getRecent(10,function(bookmarks){
    console.log(bookmarks);
})

console.log(chrome.history);
chrome.history.search({text:''},function(results){
    console.log(results);
})