"use script";






document.querySelector(".add").addEventListener("click", function(){
    let input = document.querySelector(".input-text");
    let text = input.value;
    let li = document.createElement("li");
    li.className = "list-group=item";
    li.innerText = text;
    ul.append(li);
    input.value = "";
})









let ul = document.querySelector("ul");
let listItems = document.querySelectorAll('#my-list li');

if(document.querySelector(".remove").addEventListener("click", function(){
    
}))

Array.from(listItems).forEach(listItem => {
  if (toRemove.includes(listItem.textContent.toLowerCase())) {
    listItem.parentNode.removeChild(listItem);
  }
});