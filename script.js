var list = document.getElementById("list");
var add = document.getElementById("addElem");

add.addEventListener("click", function(e){
    var element = document.createElement("li");
    var indexOfLiItem = document.getElementsByTagName("li");
    element.innerHTML = "item " + indexOfLiItem.length;
    list.appendChild(element);
    element.className += "list-group-item";
});