var form=document.getElementById('addForm')
var itemList=document.getElementById('items')
var filter=document.getElementById('filter')
form.addEventListener('submit', addItem)

itemList.addEventListener('click',removeItem)
filter.addEventListener('keyup',filterItem)
function addItem(e)
{
    e.preventDefault()


var newItem=document.getElementById('item').value


var li=document.createElement('li')

li.className = 'list-group-item'


//Description Box
var newItemD = document.getElementById('description').value;
    var nli = document.createElement('li');
    nli.className='desc';
    nli.appendChild(document.createTextNode(newItemD));
    var p = document.createElement('p');
    p.className='desc';
    p.appendChild(document.createTextNode(newItemD));
   li.appendChild(document.createTextNode(newItem));
    li.appendChild(nli);
 


// Edit Button

var editBtn= document.createElement('button')
editBtn.className='btn btn-primary btn-sm float-right edit'
editBtn.appendChild(document.createTextNode('edit'))


//Delete Button
var deleteBtn=document.createElement('button')
deleteBtn.className='btn btn-danger btn-sm float-right delete'
deleteBtn.appendChild(document.createTextNode('X'))

li.appendChild(deleteBtn)
li.appendChild(editBtn)
itemList.appendChild(li)
}

// Deletion of Item
function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you Sure'))
        {
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}

// Filter function

function filterItem(e)
{
   // e.preventDefault()
var text=e.target.value.toLowerCase()
console.log(text)
var items=itemList.getElementsByTagName('li')
Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent
    console.log(itemName)
    if(itemName.toLowerCase().indexOf(text)!=-1)
    {
        item.style.display='block'
    }
    else{
        item.style.display='none'
    }
})
}