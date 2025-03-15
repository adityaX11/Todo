// let div=document.querySelector("div");
// div.addEventListener("click",function(event){
//     event.stopPropagation();  // this function use for stop bubbling.
//     console.log("it is parent div,Clicked.")
// })
// let ul=document.querySelector("ul");
// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("2 parent , clicked");
// });
// let lis= document.querySelectorAll("li");
// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("child, li was clicked");
//     });
// }

//--------------------------------------------------------------

//TODO Application.
let btn = document.querySelector("button");
let inp=document.querySelector("input");
let ul = document.querySelector("ul");
 btn.addEventListener("click",function(event){
    // event.preventDefault();
    // // console.log("clicked")
    // console.log(inp.value);

    let item= document.createElement("li");
    item.innerText=inp.value;

    let dltbtn=document.createElement("button");
    dltbtn.innerText=" X ";
    dltbtn.classList.add("delete");

    item.appendChild(dltbtn);
    ul.appendChild(item);
    inp.value=""; // auto Refresh in input box.
 });


// let dltbtns=document.querySelectorAll(".delete");
// for(let dltbtn of dltbtns){
//     dltbtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         // console.log(par)
//         par.remove();
//     });
// }

// why above this block not work.
// Problem: When you add new tasks dynamically, the new .
// delete buttons are not included in querySelectorAll(".delete") because it doesn't update after new elements are added.
// Result: Newly added delete buttons don't have an event listener, so they don't work.

//so here solution (event delegation).
//  Event delegation is the best way to handle dynamically added elements. Instead of adding listeners to every button manually,
//  attach the event listener to a parent element and let it handle clicks from its children.

ul.addEventListener('click',function(event){
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
    }
});