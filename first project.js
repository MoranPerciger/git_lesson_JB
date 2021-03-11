let tasks=[];
if (localStorage!=""){
    tasks=JSON.parse(localStorage.getItem("tasks") ||( "[]"));
}

function load_tasks() {
    const json= localStorage.getItem ("tasks");
    const tasks= JSON.parse(json);

    const new_date= new Date ();
    const current_date_time=new_date.toISOString();
    
    for (let obj=0; obj<tasks.length; obj++){
        let task_date= tasks[obj].Due_date;
        let task_time= tasks[obj].final_time;
        let task_date_and_time=  task_date + task_time;

        

        if(current_date_time<=task_date_and_time){
         let note=document.createElement ("div");
          note.className="note";
          note.innerHTML = "<button onclick=\"removeNote(this,"+obj+");\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x-circle\" viewBox=\"0 0 16 16\">\
            <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\
            <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\
            </svg></button>"

        //   note.innerHTML= tasks[obj].task;
          let task_body=document.createElement ("textarea");
          task_body.className= "task"; 
          task_body.innerHTML= tasks[obj].Task;
     
          let date_and_time=document.createElement("div");
          date_and_time.className="date_and_time"; 
          date_and_time.innerHTML=task_date + "<br/>" + task_time;
     
         
          document.getElementById("notes_container").appendChild(note);
          note.appendChild(task_body);
          note.appendChild(date_and_time);
         
         
        }
    }
}



function save_task() {
  
const taskBox= document.getElementById("new_task");
const dateBox=document.getElementById ("due_date");
const timeBox=document.getElementById ("time");

const task= taskBox.value;
const date= dateBox.value;
const time= timeBox.value;

const current_task={
    Task: task,
    Due_date: date,
    final_time: time
}

tasks.push(current_task);

const json= JSON.stringify (tasks);
localStorage.setItem ("tasks", json); 


}



function removeNote(html_obj,location_in_array){
     html_obj.parentElement.remove();
    
     tasks=JSON.parse(localStorage.getItem("tasks"));

    for (let obj=0; obj<tasks.length; obj++){
        if (obj==location_in_array){
            alert (obj);
            tasks.splice(location_in_array,1);
            location.reload();
         }
       }  
       
     const json= JSON.stringify (tasks);
     localStorage.setItem ("tasks", json);   
}

