//Get Element By Class Name
// var items= document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent='Hello'
// items[2].style.backgroundColor='green'
// for(var i=0;i<items.length;i++)
//     items[i].style.fontWeight='bold'

//Get Element By Tag Name
// var li= document.getElementsByTagName('li')
// console.log(li)
// console.log(li[1])
// li[1].textContent='Hello'
// li[2].style.backgroundColor='green'
// for(var i=0;i<li.length;i++)
//     li[i].style.fontWeight='bold'
// li[4].style.backgroundColor='yellow'
// li[4].style.fontWeight='bold'

//querySelector

var secondItem=document.querySelector('.list-group-item:nth-child(2)')
secondItem.style.backgroundColor='blue'
var thirdItem=document.querySelector('.list-group-item:nth-child(3)')
thirdItem.style.visibility='hidden'

//querySelectorAll

var titles=document.querySelectorAll('.title')
console.log(titles)
titles[1].style.color='green'

var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++)
odd[i].style.backgroundColor='green'

// querySelector - querySelector() method can only be use to access a single element

// querySelectorAll - querySelectorAll() method can be used to access all element