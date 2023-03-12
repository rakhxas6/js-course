// excercise 3
// elem.innerHtml is used to populate a with hTML
// website with a div tag
// every reload ma different jokes huna paryo
// min jokes = 10

// let jokes = [
//   "What do you call a boomerang that won't come back?<br> A stick.",

//   "What does a cloud wear under his raincoat? <br>Thunder-wear.",

//   "Two pickles fell out of a jar onto the floor? <br> What did one say to the other Dill with it.",

//   "What time is it when the clock strikes 13?<br> Time to get a new clock.",

//   "How does a cucumber become a pickle?<br>It goes through a jarring experience.",

//   "What did one toilet say to the other ? <br>You look a bit flushed.",

//   "What do you think of that new diner on the moon Food was good?<br> but there really wasn't much atmosphere.",

//   "Why did the dinosaur cross the road? <br>Because the chicken wasn't born yet.",

//   'Why can\'t Elsa from Frozen have a balloon?<br> Because she will "let it go, let it go."',

//   "What musical instrument is found in the bathroom ?<br> A tuba toothpaste.",

//   "Why don't scientists trust atoms? <br>Because they make up everything.",

//   "I told my wife she was drawing her eyebrows too high? <br>She looked surprised.",

//   "Why did the tomato turn red? <br>Because it saw the salad dressing!",

//   "What do you call a lazy kangaroo? <br>A pouch potato!",

//   "Why did the chicken cross the playground?<br> To get to the other slide.",
// ];

// randomJoke.innerHTML = "<h1>This is some HTML content!</h1>";

// let divJoke = document.getElementById("joke");
// randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
// divJoke.innerHTML = randomJoke;

// for(let key in jokes){
//     console.log(jokes[key])
// }

// function

// innerhtml outerhtml and other properties
// events
// let spans = document.getElementsByTagName("span")[0]
// console.log(spans)
// spans.style.color = "red"
// spans.innerHTML = "<h1>Hi, I AM A MODIFIED SPAN </h1>"
// console.dir(spans) // as a object dekhauxa

// inner html and outer html
// innnerhtml LE CONTENT MATRA CHANGE GARXA
// let span1 = document.getElementById("first")
// span1.innerHTML = "<b> HI</b>"

// first.outerHTML = "<div> hey this is outer-html </div>"
// full element lai change garna milxa
// console.log(document.body.firstChild.data)
// console.log(document.body.textContent)

// first.hidden = false

// attributes, method and techniques

// to get the class
// let first = document.getElementById("first");
//  let a = first.getAttribute("class")
// console.log(a)

// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))
// first.setAttribute ("hidden", "true")
// first.setAttribute ("class", "true sachin")
// first.removeAttribute("class")
// console.log(first.attributes)

// data- attributes //custom attribute set garne tarika

// console.log(first.dataset)
// console.log(first.dataset.game)
// console.log(first.dataset.player)

// html insertion method

// let a = document.getElementsByTagName("div")[0];
//  a.innerHTML += "<h1>Hello World</h1>"

// using createElement
let div = document.createElement("div");
div.innerHTML = "<h1>Hey Sexy Boy</h1>";

//  a.append(div)
//  a.prepend(div) // inner div ko bahira janxa

//  a.before(div) // div bhanda bahira rakhxa
//  a.after(div)
// a.replaceWith(div);


// insert adjacent HTML/ text/element //use single quotes

// let first = document.getElementById("first")
// first.insertAdjacentHTML ('afterend', '<div id="test"> afterend</div>')
// afterend ,beforend , afterbegin ,beforebegin
// first.insertAdjacentHTML('afterbegin','<div id="test">afterbegin </div>')
// first.insertAdjacentHTML('beforebegin','<div id="test">beforebegin</div>')
// first.insertAdjacentHTML('beforeend','<div id="test"> beforeend</div>')
// first.remove()


// changing html classes using js className and classList

let first = document.getElementById("first")
// first.className = "text-black red blue-shirt"

// to remove specific class of an element

// first.classList.remove("red")

// first.classList.add("red")

// we can use toggle to add when it is not and remove when it is there

// first.classList.toggle("red") // red thiyo so remove hunxa


// to check we use elem.classList.contains("class")

// console.log(first.classList.contains("red")) // false output



// setTimeout and settime interval

// alert("Hello I am Alert")

//  let a = setTimeout (function(){
//     alert("Hello I am  Inside of setTimeout")
// },5000)
// let b = prompt("Do you want to run the setTimeout?")
// if("n"== b){
//     clearTimeout(a) // hatauna lai settimeout
// }
// console.log(a) // timerId


// const sum =(a,b,c) => {
//     console.log("Hey, I am Running " + (a + b + c))
 //    a+ b
// }
// setTimeout(sum,1000,1,2,7)


//setInterval same ho tara continuous loop ma chalxa
// setInterval(function(){
//     alert("hey i am setInterval")
// },3000)
// let c = prompt("Do you want to run the setInterval?")
// if( "n" == c){
//     clearInterval(c) // hatauna lai setInterval
// }


// const sum =  (p,q) => {
//     console.log("hey i am setInterval " + (p+q) )
//  p+q
// }
// setInterval(sum,1000,2,4)
// clearInterval(2)  // timer id 2 raixa 
  
// BROWSER EVENTS AND HANDLING

// dom eventseg

