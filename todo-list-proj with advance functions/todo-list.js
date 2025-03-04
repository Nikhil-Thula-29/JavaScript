const todolist=[];

//adv by foreach check normal proj for for method

function rendertodo(){
    let todolistHTML='';
    todolist.forEach(function({inname,indate},index){
        const html=
            `<div> ${inname}</div>
            <div>${indate}</div>
            <button class="delete-button" onClick="
            todolist.splice(${index},1);
            rendertodo();
            ">Delete</button>`;    //this is called generating html
        todolistHTML=todolistHTML+html;
    });
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