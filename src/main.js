'use strict';

var render = function(list) {
  var nameList = list.map(function(element) {
      //h4
      let h4 = document.createElement('h4');
      h4.className = 'list-group-item-heading';
      h4.innerHTML = element.name;
      //p
      let p = document.createElement('p');
      p.className = 'list-group-item-text'
      p.innerHTML = element.description;
      //*span
      let span = document.createElement('span');
      span.className = 'label label-info'
      span.innerHTML = `Date: ${element.date}`;
      //a - main node
      let node = document.createElement('a');
      node.className = 'list-group-item';
      node.href = element.href;

      node.appendChild(h4);
      node.appendChild(p);
      node.appendChild(span);
      return node;
    });
    return nameList;
};

window.onload = function() {
  let container = document.createElement('div');
  render(list).forEach(function(element) {
    container.appendChild(element);
  });

  let listGgroup = document.querySelector('.list-group');
  listGgroup.replaceChild(container, listGgroup.childNodes[0]);
};