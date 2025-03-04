const todolist=[];

function rendertodo(){
    let todolistHTML='';
    for(let i=0;i<todolist.length;i++){
        const todo=todolist[i];
        const name=todo.inname; //rem this inname check
        const duedate=todo.indate;  //rem this indate prop name
        const html=
            `<div> ${name}</div>
            <div>${duedate}</div>
            <button class="delete-button" onClick="
            todolist.splice(${i},1);
            rendertodo();
            ">Delete</button>`;    //this is called generating html
        todolistHTML=todolistHTML+html;
    }
    console.log(todolistHTML);
    document.querySelector('.js-todo-list').innerHTML=todolistHTML;
}

function addTodo(){
    const nameinput=document.querySelector('.js-name-input')
    const name=nameinput.value.trim();
    const dateinput=document.querySelector('.js-date-input')
    const date=dateinput.value;

    if(name==='' || date===''){
        alert("Please enter both task name and due date!");
        return;
    }

    todolist.push({inname:name,indate:date});
    console.log(todolist);
    nameinput.value='';     //to remove value
    dateinput.value='';

    rendertodo();
}