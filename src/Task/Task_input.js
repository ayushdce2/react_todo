import { useState,useEffect } from "react";
import Task_output from "./Task_output";

const Task_input = (props)=>{
    

    const {title,setTitle,description,setDescription,priority, setPriority,date,setDate,status,setStatus,
        id,setId,final_data,setFinal_data,all_task,setAll_task,updated_data, setUpdated_data,
        filter,setFilter,running_task,setRunning_task} = props.form_data;
// console.log(title,"INPUT");
// console.log(id,"line 9");
    const form_data_change = (event)=>{
        const{name,value}= event.target;
        // console.log(name,"----------",value,"-------");
        
        if(name === "title"){
            setTitle(value);
        }else if(name === "description"){
            setDescription(value);
        }else if(name === "priority"){
            setPriority(value);
        }else if(name === "date"){
            setDate(value);
        }

    }
    

// console.log(title,"line 28");
    const todo_add = ()=>{
      
        setStatus("running");
        setFilter("running_task");
        // console.log({
        //         title,
        //         description,
        //         priority,
        //         date,
        //         status,
        //         id

        //     });

            // setStatus("active");
        setId(id+1);
        // console.log(props.form_data,"props.form_data");
            // <Task_output form_data_add={props.form_data}/>
        
            // setFinal_data(props.form_data);
            // console.log(props.form_data.title,"INPUT");
            setRunning_task([
                ...running_task,
                { id: id,
                    title: title,
                    description: description,
                    priority: priority,
                    date: date,
                    status: status
                 }
              ]);
              setAll_task([
                ...all_task,
                { id: id,
                    title: title,
                    description: description,
                    priority: priority,
                    date: date,
                    status: status
                 }
              ]);
            // console.log(all_task,"all_task")
            //   setUpdated_data(all_task);
            // console.log(updated_data,"updated_data");
            
    }
useEffect(()=>{
  
    setUpdated_data(running_task);
    setRunning_task(running_task);
    setAll_task(all_task);
},[running_task])
    // console.log(final_data,"array");
    return(
        <>
            <div className="task_input_wrap">
                <div className="task_input_inside">
                    <div className="task_input_content">
                        <div className="task_input_title">
                            <input type="text" placeholder="Title" name="title" onChange={form_data_change}/> 
                        </div>
                        <div className="task_input_description">
                        <textarea placeholder="Description" name="description" onChange={form_data_change}>
                            </textarea> 

                        </div>
                        <div className="task_input_priority">
                            <select name="priority" onChange={form_data_change}>
                                <option value="None">Select Priority</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        <div className="task_input_date">
                            <input type="date" name="date" onChange={form_data_change}/>
                        </div>

                    </div>
                    <div className="task_input_submit_button" >
                        <button onClick={todo_add}>Add</button>
                        
                    </div>

                </div>

                </div>
        </>
    )
}

export default Task_input;