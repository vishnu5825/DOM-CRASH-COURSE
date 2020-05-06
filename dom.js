//EXAMINE THE DOCUMENT OBJECT //
//console.dir(document);

//console.log(document.domain)
//console.log(document.URL)
//console.log(document.title)
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//GETELEMENTBYID //

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText ='Goodbye';
//console.log(headerTitle.innerText);

//headerTitle.innerHTML = '<h3>Hello</h3>';

//headerTitle.style.borderBottom ='solid 3px #000';

//GETELEMENTSBYCLASSNAME //

//var items =document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent ='Hello 2';
//items[1].style.fontWeight ='bold';
//items[1].style.backgroundColor ='red';


//Gives error
//items.style.backgroundColor = '#f4f4f4';

//for(var i=0; i< items.length; i++){
  //  items[i].style.backgroundColor ='#f4f4f4';
//}

//GETELEMENTBYNAME//

//var li =document.getElementsByClassName('li');
//console.log(li);
//console.log(items[1]);
//li[1].textContent ='Hello 2';
//li[1].style.fontWeight ='bold';
//li[1].style.backgroundColor ='red';


//Gives error
//items.style.backgroundColor = '#f4f4f4';

//for(var i=0; i< items.length; i++){
  //  li[i].style.backgroundColor ='#f4f4f4';
//}

//QUERYSELECTOR //

//var header = document.querySelector('#main-header');
//header.getElementsByClassName.borderBottom = 'solid 4px #ccc';

//var input = document.querySelector('input');
//input.value ='Hello World';

//var submit = document.querySelector('input[type="submit"]');
//submit.value="SEND";

//var item = document.querySelector('.list-group-item');
//item.style.color ='red';

//var lastItem =document.querySelector
//('.list-group-item:last-child');
//lastItem.style.color = 'blue';


//var secondItem =document.querySelector
//('.list-group-item:nth-child(2)');
//secondItem.style.color = 'coral';

//QUERYSELECTORALL //
//var titles = document.querySelectorAll('.title');

//console.log(titles);
//titles[0].textContent ='Hello';

//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');

//for(var i =0; i < odd.length; i++){
//    odd[i].style.backgroundColor = '#f4f4f4';
  //  even[i].style.backgroundColor = '#ccc';
//}

//TRAVERSARY THE DOM //

//var itemList = document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild

//console.log(itemList.firstChild);
//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent ='Hello 1';

//LastChild

//console.log(itemList.lastChild);
//firstElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent ='Hello 4';

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);

//previousElementsibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'red';

//createElement

//create a div
//var newDiv = document.createElement('div');
//Add class

//newDiv.className ='hello';

//Add id
//newDiv.id ='hello1'

//Add attr

//newDiv.setAttribute('title', 'Hello Div');

//create text node

//var newDivText = document.createTextNode('Hello World');
//Add text to div

//newDiv.appendChild(newDivText);

//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header h1');


//console.log(newDiv);

//newDiv.style.fontSize = '30px';

//container.insertBefore(newDiv,h1);
//EVENTS
//var button = document.getElementById('button').addEventListener('click',buttonClick);
  


//function buttonClick(e){
  //console.log('Button Clicked');
  //document.getElementById('header-title').textContent = 'changed';
  //document.querySelector('main').style.backgroundColor = '#f4f4f4';
//console.log(e);

//console.log(e.target);
//console.log(e.target.id);
//console.log(e.target.className);
//console.log(e.target.classList);
//var output = document.getElementById('output');
//output.innerHTML= '<h3>'+e.target.id+'</h3>';


//console.log(e.type);
//console.log(e.clientX);
//console.log(e.clientY);

//console.log(e.offsetX);
//console.log(e.offsetY);

   //console.log(e.altKey);
   
   //console.log(e.ctrlKey);
   
  // console.log(e.shiftKey);
//}

// var button = document.getElementById('button');
// var box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
  
//button.addEventListener('mousedown', runEvent);

//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent);


//box.addEventListener('mouseleave', runEvent);


//box.addEventListener('mouseout', runEvent);


//box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');


// var form = document.querySelector('form');

// var select = document.querySelector('select');
//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);

//itemInput.addEventListener('focus', runEvent);
//itemInput.addEventListener('blur', runEvent);

//itemInput.addEventListener('cut', runEvent);
//itemInput.addEventListener('paste', runEvent);
//itemInput.addEventListener('input', runEvent);

//select.addEventListener('change', runEvent);
//select.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);


// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);
// function runEvent(e){
//   e.preventDefault();
//   console.log('EVENT TYPE: '+e.type);
  

  //console.log(e.target.value);
  //document.getElementById('output').innerHTML = '<h3>'
    //+e.target.value+'</h3>';
  //output.innerHTML ='<h3>mouseX: '+e.offsetX+' </h3><h3>mouseY: '+e.offsetY+'</h3>';
//document.body.style.backgroundColor ="rgb("+e.offsetX+","+e.offsetY+", 40)";
//}




//final video

var form =document.getElementById('addForm');
var itemList =document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit Event

form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click',removeItem);

//Filter event

filter.addEventListener('keyup', filterItems);

// Add item

function addItem(e){
  e.preventDefault();



//Get input value

 var newItem =document.getElementById('item').value;


 // create new li element

 var li = document.createElement('li');

 //Add class
 li.className = 'list-group-item';

 //Add text node with input value
 li.appendChild(document.createTextNode(newItem));

itemList.appendChild(li);

//Create del button element
var deleteBtn = document.createElement('button');
//Add classes to del button
 deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

 //Append text Node
 deleteBtn.appendChild(document.createTextNode('X'));

 //Append button to li
li.appendChild(deleteBtn);
 //Append li to List

 itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
  if(confirm('Are you sure...?')){
  var li =e.target.parentElement;
  itemList.removeChild(li);
}
  }
}

//Filter Items

function filterItems(e){
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  //Get lis
  var items = itemList.getElementsByTagName('li');
  //convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display ='block';
    }else{
      item.style.display ='none';
    }
    
  });
  
}

