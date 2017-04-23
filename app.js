//create constructor function
function ShoppingList() {
    //change to an object?
    this.items = {};
};
//create state object to hold shopping list
var myList = new ShoppingList();

var addItem = function(shoppingList, item) {
    shoppingList.items[item]= 'incomplete';
}

var deleteItem = function(shoppingList, item) {
    delete shoppingList.items[item];
}

function createHTML(item){
    var itemHtml = "<li><span class = 'shopping-item'>" + item + "</span>" + "<div class ='shopping-item-controls'>" +
            '<button class = "shopping-item-toggle">' + '<span class="button-label">' + 'check</span>' +
            '</button>' + '<button class = "shopping-item-delete">' + '<span class = "shopping-item-delete">' +
            '<span class = "button-label">delete</span></button>' + '</div></li>';
            return itemHtml;
}

var createListItem = function(item, element) {
    var itemHtml = createHTML(item);
    element.append(itemHtml);
}


$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    var $listItem = $('#shopping-list-entry').val();
    addItem(myList, $listItem);
    createListItem($listItem, $('.shopping-list'));
});


$('.shopping-list').on("click", ".shopping-item-toggle", function(event) {
    event.preventDefault();
    $(this).closest('li').toggleClass("shopping-item__checked");
});

$('.shopping-list').on("click",".shopping-item-delete",function(event){
    event.preventDefault();
    var $listItem = $('#shopping-list-entry').val();
    deleteItem(myList,$listItem);
    $(this).closest('li').remove();
});
