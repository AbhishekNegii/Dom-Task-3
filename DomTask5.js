// //Get Element By Class Name
// // var items= document.getElementsByClassName('list-group-item')
// // console.log(items)
// // console.log(items[1])
// // items[1].textContent='Hello'
// // items[2].style.backgroundColor='green'
// // for(var i=0;i<items.length;i++)
// //     items[i].style.fontWeight='bold'

// //Get Element By Tag Name
// // var li= document.getElementsByTagName('li')
// // console.log(li)
// // console.log(li[1])
// // li[1].textContent='Hello'
// // li[2].style.backgroundColor='green'
// // for(var i=0;i<li.length;i++)
// //     li[i].style.fontWeight='bold'
// // li[4].style.backgroundColor='yellow'
// // li[4].style.fontWeight='bold'

// //querySelector

// var secondItem=document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.backgroundColor='blue'
// var thirdItem=document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.visibility='hidden'

// //querySelectorAll

// var titles=document.querySelectorAll('.title')
// console.log(titles)
// titles[1].style.color='green'

// var odd=document.querySelectorAll('li:nth-child(odd)')
// for(var i=0;i<odd.length;i++)
// odd[i].style.backgroundColor='green'

// // querySelector - querySelector() method can only be use to access a single element

// // querySelectorAll - querySelectorAll() method can be used to access all element

//Traversing the DOM

var itemList = document.querySelector('#items')
//parentNode property
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor='#f4f4f4'
console.log(itemList.parentNode.parentNode)

//parentElement
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor='#f4f4f4'
console.log(itemList.parentElement.parentElement)

//childNodes
 console.log(itemList.childNodes)
 console.log(itemList.children)
 console.log(itemList.children[1])
 itemList.children[1].style.backgroundColor='green'

 //firstChild
  console.log(itemList.firstChild)

  //firstElementChild
  console.log(itemList.firstElementChild)
  itemList.firstElementChild.textContent='Abhishek'

//lastElementChild
console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent='Negi'
itemList.lastElementChild.style.color='Blue'

//nextSibling
console.log(itemList.nextSibling)

//nextElementSibling
console.log(itemList.nextElementSibling)

//previousSibling
console.log(itemList.previousSibling)

//previousElementSibling
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.backgroundColor='yellow'

//createElement
var newDiv=document.createElement('div')
newDiv.className='Hello'
newDiv.id='Hello1'

//setAttribute
newDiv.setAttribute('title' ,'Hello Div')
console.log(newDiv)

//create Text Node
var newDivText=document.createTextNode('Hello World')

//appendChild

newDiv.appendChild(newDivText)

console.log(newDiv)

var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')
container.insertBefore(newDiv, h1)

var parentNode=document.getElementById('items')
var newli=document.createElement('li')
parentNode.innerHTML='<li>Hello World</li>' + parentNode.innerHTML


