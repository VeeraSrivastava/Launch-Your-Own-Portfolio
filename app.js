document.querySelectorAll(".li").forEach(element => {
    element.addEventListener("click",()=>{
        document.getElementById("selected").id=""
        element.id="selected"
        document.getElementsByClassName("activePanel")[0].classList.remove("activePanel")
        document.getElementById(element.innerText).classList.add("activePanel")
    })
});
document.getElementsByClassName("developer")[0].addEventListener("click",()=>{
    document.getElementById("selected").id=""
    document.getElementsByClassName("developer")[0].id="selected"
    document.getElementsByClassName("activePanel")[0].classList.remove("activePanel")
    document.getElementById("developer").classList.add("activePanel")
})
function next(){
        if(document.getElementById("ABOUT").dataset.type==="one"){

        document.getElementById("abtimg").src="./img/Image_2.png"
        document.getElementById("ABOUT").dataset.type==="two"
    }
    else{}
}
function prev(){
    if(document.getElementById("ABOUT").dataset.type==="one"){
       
        document.getElementById("abtimg").src="./img/Image_1.png"
        document.getElementById("ABOUT").dataset.type==="one"

    }
    else{}
}
let navPosititon=document.getElementsByTagName("nav")[0].dataset.open
document.getElementById("mobNav").addEventListener("click",()=>{
console.log("dsasdassad")
if    ( navPosititon=="false"){

    document.getElementById("mobNav").classList.add("rotate")
    document.getElementsByTagName("nav")[0].style.display="block"
   navPosititon="true"
}else if ( navPosititon=="true"){
        document.getElementById("mobNav").classList.remove("rotate")
        document.getElementsByTagName("nav")[0].style.display="none"
        navPosititon="false"
       
}
})
// document.getElementById("instant_redir").addEventListener("click",()=>{
//     window.location.href="https://blog.bijaynair.com"
// })

function myFunction(x) {
    if (x.matches) { // If media query matches
      console.log(document.getElementById("vy").src)
      document.getElementById("vy").src="./img/Name_Card.svg"
      document.getElementsByClassName("theyrd")[0].src="./img/xc.png"
      document.getElementsByClassName("theyrd1")[0].src="./img/ppo.png"

    } else {
    }

  }
  
  var x = window.matchMedia("(max-width: 1004px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes 


  function myFunction(y) {
    if (y.matches) { // If media query matches
      console.log(document.getElementById("vy").src)
      document.getElementById("vy").src="./img/Name_Card.svg"
    } else {
    }

  }
  
  var y = window.matchMedia("(max-width: 1004px)")
  myFunction(y) // Call listener function at run time
  y.addListener(myFunction) // Attach listener function on state changes 


  
// const pressArray=[
//     ["tedx","https://www.ted.com/tedx/events/52729"] 
//     ,["thedevfastttpodcasttt","https://open.spotify.com/episode/3mqIje12aKVMvSEYhmj0RA"], ["IH",'https://www.indiaherald.com/History/Read/994556826/Indian-Navy-Day-Lieutenant-Commander-Bijay-Nair']
//     ,["DNA","https://www.dnaindia.com/hindi/india/video-video-exclusive-interview-ltcdr-bijay-nair-navy-day-2022-4063736"]
//     ,["LOKMAT","http://epaper.lokmat.com/articlepage.php?articleid=LOK_MULK_20221128_12_1"]
//     ,["facebook","https://www.facebook.com/NMCBI/videos/presenting-the-winner-of-the-best-humor-entertainment-author-2021-ltcdr-bijay-na/774806443671451/"] ,["sharingstories","https://sharingstories.in/interviews/in-conversation-with-ltcdr-bijay-nair/"]
    
//      ,["youtubea","https://www.youtube.com/watch?v=XlWxJ-RA-Tk"] ,["crossword","https://www.crossword.in/health-fitness/they-inspire-lt-cdr-bijay-nair/p-1341200-41162122334-cat.html"] ,["fitindia","https://fitindia.gov.in/fit-india-ambassador?page=9"]
// ]

// pressArray.forEach(element => {
//     document.getElementById(element[0]).addEventListener("click",()=>{
//         window.open(element[1])
//     })
// });

document.getElementById("collas").addEventListener("click",()=>{
    window.open('https://devfasttt.com')
})

document.getElementsByTagName("footer")[0].addEventListener("click",()=>{
    window.open('https://devfasttt.com')
    document.getElementsByTagName("footer")[0].style.cursor="pointer"  
})

var newDiv = document.createElement('div');
newDiv.classList.add("bummer")
newDiv.innerHTML = 'This site was built by <a href="https://devfasttt.com">Devfasttt.com,</a> making websites, apps, games & more, like never before! Get your website now!<a href="https://devfasttt.com"> <button>Start Now</button></a>';
var body = document.getElementsByTagName('body')[0];
var firstChild = body.firstChild;
body.insertBefore(newDiv, firstChild);
