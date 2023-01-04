// function sum(x,y){
//     if(arguments.length!==2){
//         throw("aruments should be 2");
//     }
//     else if(typeof x !=="number" && typeof y !== "number"){
//         throw("type of arguments should be numbers");
//     }

// //    console.log(arguments);
//     return x+y;

// }
// var res = sum(5,6);
// var func = function(){
//     console.log("hello");
// }
// func();
// // var x = new Function({

// // })
// // throw("error")
// // console.log(res);

// function test(){
//     x = "hello";
//     console.log(x);
// }

// //test();
// console.log(x);

///hoisting
// var x; var test;

// console.log(x);
// let x = 10;
// console.log(test);
// var test = function(){
//     console.log("hello");
// }
// test();
// var html = document.children[0];

// var body = html.children[1];
// console.log(body.childNodes);
// var p = body.children[1];
// var h1 = p.previousElementSibling;
// console.log(h1);

// var body = document.getElementsByTagName("body")[0];
// var h1 = document.getElementsByClassName("hamada")[0];
// console.log(h1);
// var p = document.getElementById("mypara");
// console.log(p);

var h1 = document.querySelector(".hamada");
var h2 = document.querySelectorAll(".hamada");
// console.log(h1);
// console.log(h2);

// h1.setAttribute("class","menna");

// var img = document.getElementsByTagName("img")[0];
// img.setAttribute("src","aaa");

// console.log(img.getAttribute("src"));
// var p = document.getElementById("mypara");
// p.style.backgroundColor = "red";
// p.style.border = "1px solid blue";
// p.style.width = "200px";
///create element


function test(e){
    console.log(e);
    var div = document.createElement("div");
    div.innerHTML = "<span>hello</span>";
    console.log(div);
    
    //append
    document.getElementsByClassName("hamada")[0].append(div);
    document.body.append(div.cloneNode(true));

}
// h1.addEventListener("click",test);
// test(55)

// window.setTimeout(function(){
//     alert("hello");
// },2000);
// var x;
// var c = setInterval(function(){
//      x = 5;
//      console.log("hello");
//     },2000)
//     console.log(x);

// function stopInter(){
//     clearInterval(c);
// }
function reset(){
    let inp = document.getElementsByTagName("input")[0];

    let inp2 = document.getElementsByTagName("input")[1];

    let inp3 = document.getElementsByTagName("input")[2];

    inp.value=""
    inp2.value=""
    inp3.value=""

}
function validtion(){
    var inp = document.getElementsByTagName("input")[0];

    var inp2 = document.getElementsByTagName("input")[1];

    var inp3 = document.getElementsByTagName("input")[2];

    var span = document.querySelectorAll("span")[0];
    
    var span2 = document.querySelectorAll("span")[1];
    
    var span3 = document.querySelectorAll("span")[2];
   // console.log(inp.value);
   if(inp.value === ""){
    span.style.display = "inline";
    span.textContent = "*"
    inp.value = "";
}
else{
    span.textContent = ""

}
if(isFinite(inp.value)){
    span.style.display = "inline";
    span.textContent = "Enter you name";
    inp.value = "";
}
else{   span.textContent = ""}
 if(inp2.value === ""){
    span2.style.display = "inline";
    span2.textContent = "*";
    inp2.value = "";
}
else{span2.textContent = "";}
 if(inp3.value === ""){
    span3.style.display = "inline";
    span3.textContent = "*";
    inp3.value = "";
}
else{
    span3.textContent = "";
} if(isFinite(inp.value)){
    span.style.display = "inline";
    span.textContent = "you must enter string"
    inp.value = "";

}

else if(isNaN(inp2.value)){
    span2.style.display = "inline";
    span2.textContent = "you must enter your age"
    inp2.value = "";

}

else if(!ValidateEmail(inp3.value)){
    span3.style.display = "inline";
    span3.textContent = "you must enter your email"
    inp3.value = "";

}
   else{
       var tbody = document.querySelector("tbody");
       var ageinp= document.getElementsByTagName("input")[1];
       var emailinp= document.getElementsByTagName("input")[2];
       
       var tr = document.createElement("tr");
       tr.innerHTML =  `<td> ${inp.value}</td><td> ${ageinp.value}</td><td> ${emailinp.value}</td>`
       tbody.append(tr);
       tbody.parentElement.style.display = "table";
       ageinp.value = "";
    //    var div = document.getElementById("mydiv");
      
    //    div.textContent = "hello " + inp.value;
    // span.style.display = "none";
    inp.value = "";
    emailinp.value="";
       //console.log("ok");
   }

}

function ValidateEmail(email) {
	var emailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (String(email).toLowerCase().match(emailformat)) {
    	alert("Nice Email!")
      	return true;
    }
    else{
    alert("That's not an email?!")
    return false;
}};