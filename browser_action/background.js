function handleBackground(){
    chrome.tabs.create({
        index : 0,
        url : 'http://google.co.uk'
    },function(tab){
        console.log(tab);
    })
}