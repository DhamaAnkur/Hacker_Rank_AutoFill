
const puppeteer = require("puppeteer")

console.log("Before")

let BrowserWillbelaunchPromise = puppeteer.launch({
    headless : false , 
    defaultViewport : null,
    rgs : [ '--stsrt-fullscreen', '--start-maximized']
})

BrowserWillbelaunchPromise.then(function(browserIntense){
    let newtabPromise = browserIntense.newPage ()
return newtabPromise ;

}).then(function(newTab){
    console.log("New Tab Opened")
    let PageWillBeOpenedPromise = newTab.goto("https://www.pepcoding.com/")
     return PageWillBeOpenedPromise

}).then(function(){
    console.log("Website Opened ")

})
 
console.log("After")
