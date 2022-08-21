
//---------------------------------Hacker rank project use of async await ---------------------------------------//

const loginLink = "https://www.hackerrank.com/auth/login"; //

let email = "akdhama98@gmail.com";
let password = "ankurdhama";
let puppeteer = require("puppeteer");
const codesObj = require('./code');

// console.log("Before");

(async function (){

try {
    let BrowserLaunch =  await puppeteer.launch({
        headless : false ,
        defaultViewport : null,
        args : [ "--start-maximized"],
    });


    let newtab = await BrowserLaunch.newPage();
    
     await newtab.goto("https://www.hackerrank.com/auth/login")

     await newtab.type("input[id ='input-1" , email , {delay : 70})

     await newtab.type("input[id = input-2]" , password  , {delay :70 })

     await  newtab.click('button[data-analytics="LoginPassword"]' ,  {delay : 50,})

     await WaitAndClick('.topic-card a[data-attr1="algorithms"]', newtab)

     await WaitAndClick('input[value="warmup"]', newtab )

     let SolveChallenge = await newtab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', {delay : 50})
     console.log("Total Question---> " +  SolveChallenge.length );

      await QuestionSolver( newtab ,SolveChallenge[0], codesObj.answers[0])
     
    
} catch (error) { }

})();


function WaitAndClick(selector , Cpage){
    return new Promise(function(resolve, reject ){
        let waitForModalPromise = Cpage.waitForSelector(selector)
        waitForModalPromise.then(function(){
    let clickAlgoPromise = Cpage.click(selector , {delay : 100});
    return clickAlgoPromise;
        }).then(function(){
            resolve()
        }).catch(function(){
            reject()
        })
    })
    }

function QuestionSolver(  page ,Question , Answwer ){
    return new Promise (function(resolve , reject){
   let questionisClicked = Question.click()
   questionisClicked.then(function(){
    let textEditorOpen = WaitAndClick('.monaco-editor.no-user-select.vs', page)
    return textEditorOpen ;
   }).then(function(){
    return WaitAndClick('.checkbox-input' , page)
   }).then(function(){
    return page.waitForSelector('textarea.custominput' , page );
   }).then(function(){
    return page.type('textarea.custominput' ,Answwer , {delay : 5});
   }).then(function(){
    let ctrlIsPressed = page.keyboard.down('Control')
    return ctrlIsPressed 
   }).then(function(){
    let AIsPressed = page.keyboard.press('A' , {delay : 100})
    return AIsPressed 
   }).then(function(){
  let XIsPressed = page.keyboard.press('X' , {delay : 100})
    return XIsPressed 
   }).then(function(){
    let ctrlIsUnpressed = page.keyboard.up('Control')
    return ctrlIsUnpressed 
   }).then(function(){
    let MainTextEditor = WaitAndClick('.monaco-editor.no-user-select.vs', page)
    return MainTextEditor 
   }).then(function(){
    let ctrlIsPressed = page.keyboard.down('Control')
    return ctrlIsPressed 
   }).then(function(){
    let AIsPressed = page.keyboard.press('A' , {delay : 100})
    return AIsPressed 

   }).then(function(){
    let VIsPressed = page.keyboard.press('V' , {delay : 100})
    return VIsPressed 

   }).then(function(){
    let ctrlIsUnpressed = page.keyboard.up('Control')
    return ctrlIsUnpressed 
   }).then(function(){
    return page.click('.ui-btn.ui-btn-normal.ui-btn-secondary.pull-right.msR.hr-monaco-compile.hr-monaco__run-code.ui-btn-styled' , {delay : 50})

   }).then(function(){
    resolve()
   }).catch(function(err){
    reject()
   })

    })
}





// let PromiseLaunch = puppeteer.launch({
//     headless : false ,
//     defaultViewport : null,
//     rgs : [ '--stsrt-fullscreen', '--start-maximized']
// })

//  PromiseLaunch.then(function(BrowserIntense){
//     return BrowserIntense 

// }).then(function(RecentTab){

//      let HackerRankSite = RecentTab.goto("https://www.hackerrank.com/auth/login")
//      return HackerRankSite ;

// })

// console.log("After")

// //---------------------------------------------------------------------------------------------------


// const puppeteer = require("puppeteer")

// console.log("Before")


 
// let email = "akdhama98@gmail.com";
// let password = "ankurdhama";
// let page ;

// let BrowserWillbelaunchPromise = puppeteer.launch({
//     headless : false , 
//     defaultViewport : null,
//     rgs : [ '--stsrt-fullscreen', '--start-maximized']
// })

// BrowserWillbelaunchPromise.then(function(browserIntense){
//     let newtabPromise = browserIntense.newPage ()
// return newtabPromise ;

// }).then(function(newTab){
//     console.log("New Tab Opened")
//     page = newTab ;
//     let PageWillBeOpenedPromise = newTab.goto("https://www.hackerrank.com/auth/login")
//      return PageWillBeOpenedPromise

// }).then(function(){

// let typeEmailPromise = page.type("input[id ='input-1" , email , {delay : 70})
//  return typeEmailPromise
// }).then(function(){
//     let TypePasswordAutomation = page.type("input[id = input-2]" , password  , {delay :70 })
//     return TypePasswordAutomation 
// }).then(function(){
//    let LoginPromise =  page.click('button[data-analytics="LoginPassword"]' ,  {delay : 50,})
//    return LoginPromise;
// }).then(function(){
// let clickAlgo = WaitAndClick('.topic-card a[data-attr1="algorithms"]', page)
//  }).then(function(){
//     console.log("Algo Will Be Clicked");
//  }).then(function(){
//     let getToWarmUp = WaitAndClick('input[value="warmup"]', page )
//     return getToWarmUp ;
// }).then(function(){
//     let waitFor3Seconds = page.waitFor(3000)
//     return waitFor3Seconds ;
// }).then(function(){
//     let SolveChallenge = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', {delay : 50})
//     return SolveChallenge ;
// }).then(function(QuestionArr){
//  console.log("Number of Question --->  " , QuestionArr.length)
//  let QuestionWillBeSolved = QuestionSolver( page ,QuestionArr[0], codesObj.answers[0])
//  return QuestionWillBeSolved ;
//  });


 //-----------------------------------------------------------------------------------------------------[]
// function WaitAndClick(selector , Cpage){
// return new Promise(function(resolve, reject ){
//     let waitForModalPromise = Cpage.waitForSelector(selector)
//     waitForModalPromise.then(function(){
// let clickAlgoPromise = Cpage.click(selector , {delay : 100});
// return clickAlgoPromise;
//     }).then(function(){
//         resolve()
//     }).catch(function(){
//         reject()
//     })
// })
// }

// function QuestionSolver(  page ,Question , Answwer ){
//     return new Promise (function(resolve , reject){
//    let questionisClicked = Question.click()
//    questionisClicked.then(function(){
//     let textEditorOpen = WaitAndClick('.monaco-editor.no-user-select.vs', page)
//     return textEditorOpen ;
//    }).then(function(){
//     return WaitAndClick('.checkbox-input' , page)
//    }).then(function(){
//     return page.waitForSelector('textarea.custominput' , page );
//    }).then(function(){
//     return page.type('textarea.custominput' ,Answwer , {delay : 5});
//    }).then(function(){
//     let ctrlIsPressed = page.keyboard.down('Control')
//     return ctrlIsPressed 
//    }).then(function(){
//     let AIsPressed = page.keyboard.press('A' , {delay : 100})
//     return AIsPressed 
//    }).then(function(){
//   let XIsPressed = page.keyboard.press('X' , {delay : 100})
//     return XIsPressed 
//    }).then(function(){
//     let ctrlIsUnpressed = page.keyboard.up('Control')
//     return ctrlIsUnpressed 
//    }).then(function(){
//     let MainTextEditor = WaitAndClick('.monaco-editor.no-user-select.vs', page)
//     return MainTextEditor 
//    }).then(function(){
//     let ctrlIsPressed = page.keyboard.down('Control')
//     return ctrlIsPressed 
//    }).then(function(){
//     let AIsPressed = page.keyboard.press('A' , {delay : 100})
//     return AIsPressed 

//    }).then(function(){
//     let VIsPressed = page.keyboard.press('V' , {delay : 100})
//     return VIsPressed 

//    }).then(function(){
//     let ctrlIsUnpressed = page.keyboard.up('Control')
//     return ctrlIsUnpressed 
//    }).then(function(){
//     return page.click('.ui-btn.ui-btn-normal.ui-btn-secondary.pull-right.msR.hr-monaco-compile.hr-monaco__run-code.ui-btn-styled' , {delay : 50})

//    }).then(function(){
//     resolve()
//    }).catch(function(err){
//     reject()
//    })

//     })
// }
// //---------------------------------------------------------------------------------------------
// //---------------------code.js is a part of this project --------------------------------------
// //---------------------------------------------------------------------------------------------









