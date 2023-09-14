
// Todo-List Final Version
// contant Todo-List name and date in Object
const todoList3 =[{
  name:'',
  dueDate:'',
}];

// function for Destructure name and Date

function renderToDoLIst1(){

let todoList3HTML = '';

for(let i = 1;i<todoList3.length;i++){
   const todoObject1 = todoList3[i];
  //  const name = todoObject1.name;
  //  const dueDate = todoObject1.dueDate;
  // Add Delete button
   const{name,dueDate} = todoObject1;
   const html = `
   <div>${name} </div>
   <div>${dueDate}</div>
  <button onclick="
   todoList3.splice(${i},1);
   renderToDoLIst1();
  " class="delete-todo-button"> Delete </button>  `;
   todoList3HTML +=html;
}

document.querySelector('.js-todo-list1').innerHTML = todoList3HTML;
}
// function for add name and Date
function addTodo3(){
  const inputElemet = document.querySelector('.js-name-input3');
  const name = inputElemet.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  console.log(name);
  // use here sorthand shorcut
  todoList3.push({
                name,
                dueDate});
  inputElemet.value = '';

  renderToDoLIst1();
}