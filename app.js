//create constructor function
function ShoppingList() {
    //change to an object? 
    this.items = []
};
//create state object to hold shopping list
var myList = new ShoppingList();

var addItem = function(shoppingList, item) {
    shoppingList.items.push(item);
}

var deleteItem = function(shoppingList, item) {
    var index = shoppingList.items.indexOf(item);
    console.log(index);
    shoppingList.items.splice(index, 1);
}

var renderList = function(shoppingList, element) {
    var itemsHtml = shoppingList.items.map(function(item) {
        return "<li><span class = 'shopping-item'>" + item + "</span>" + "<div class ='shopping-item-controls'>" +
            '<button class = "shopping-item-toggle">' + '<span class="button-label">' + 'check</span>' +
            '</button>' + '<button class = "shopping-item-delete">' + '<span class = "shopping-item-delete">' +
            '<span class = "button-label">delete</span></button>' + '</div></li>';
    });
    element.html(itemsHtml);
}
//use append
//use an object with properties checked?


$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(myList, $('#shopping-list-entry').val());
    renderList(myList, $('.shopping-list'));
});


$('.shopping-list').on("click", "li", "shopping-item-toggle", function(event) {
    event.preventDefault();
    $(this).toggleClass("shopping-item__checked");
});





// addItem(myList,'cat food');
// addItem(myList,'dog food');
// addItem(myList,'bunny food');
// deleteItem(myList, 'cat food');
// console.log(myList);
