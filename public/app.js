'use strict';

var search = document.querySelector('input[type="search"]');

/*search.onchange = function() {
    const queryString = this.value.toLowerCase();
    let searchQuery = list.filter(function(element){
        return element.name.toLowerCase().includes(queryString);
    });
    let container = document.createElement('div');

    render(searchQuery).forEach(function(element) {
        container.appendChild(element);
    });

    let listGgroup = document.querySelector('.list-group');
    listGgroup.replaceChild(container, listGgroup.childNodes[0]);
};*/

search.onkeyup = function () {
    var queryString = this.value.toLowerCase();
    var searchQuery = list.filter(function (element) {
        return element.name.toLowerCase().includes(queryString);
    });
    var container = document.createElement('div');

    render(searchQuery).forEach(function (element) {
        container.appendChild(element);
    });

    var listGgroup = document.querySelector('.list-group');
    listGgroup.replaceChild(container, listGgroup.childNodes[0]);
};