var form=document.getElementById('addForm')
var itemList=document.getElementById('items')

edit.addEventListener('edit', editBtn)

function editItem(e)
{
var newItem=document.getElementById('item').value
var li=document.createElement('li')
li.className = 'list-group-item'
li.appendChild(document.createTextNode(newItem))
var editBtn= document.createElement('button')
editBtn.className='btn btn-primary btn-sm float-right edit'
editBtn.appendChild(document.createTextNode('edit'))
li.appendChild(editBtn)
itemList.appendChild(li)
}