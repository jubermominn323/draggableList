// ul element
const draggable_list = document.getElementById("draggable-list");

// button
const check = document.getElementById("check");

// list of richest people

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amacio Ortega",
  "Larrgy Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page",
];

const listItems = [];

let dragStartIndex;

function createList(){
    [...richestPeople]
    .map((person) => ({ value: person, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .forEach((person, index) => {
      // Create the list element
        console.log(person)
        const listItem = document.createElement("li");
       
	    listItem.setAttribute("data-index", index);
        // listItem.classList.add('right')
        listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
            <p class="person-name">${person.value}</p>
            <i class="fas fa-grip-lines"></i>
            </div>
            `;
      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    })
    addEventListeners();
}

createList()

function addEventListeners(){
    const draggables = document.querySelectorAll('.draggable')
    const dragListItems = document.querySelectorAll('.draggable-list li')
    
    draggables.forEach(draggable =>{
        draggable.addEventListener('dragstart', dragStart)
    })
    dragListItems.forEach(item =>{
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drag', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    })
}

function dragStart(){
    console.log('Event : start');
}

function dragOver(){
    console.log('Event : over');
}

function dragDrop(){
    console.log('Event : drop');
}

function dragEnter(){
    console.log('Event : Enter');
}

function dragLeave(){
    console.log('Event : Leave');
}