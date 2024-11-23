import './App.css';
import Task_status from "./Task/Task_status";
import Task_input from "./Task/Task_input";
import Task_output from "./Task/Task_output";
import Task_edit from "./Task/Task_edit";

import { useState } from "react";

function App() {

  const [blur_app,setBlur_app]= useState(false);
    
    const[title,setTitle]=useState("title");
    const[description,setDescription]=useState("desc");
    const[priority, setPriority]=useState("priority");
    const[date,setDate]=useState("date");
    const[status,setStatus]=useState("all");
    const[id,setId]=useState(0);
    const[final_data,setFinal_data] = useState([]);
    const[edit_data_id,setEdit_data_id] = useState("");
    const[restore_data_id,setRestore_data_id] = useState("");
    const[delete_data_id,setDelete_data_id] = useState("");
    const[updated_data, setUpdated_data] = useState([]);
    const[completed_data_id, setCompleted_data_id] = useState([]);

    // Filter Starts
    const[filter,setFilter]=useState("running_Task");
    const[running_task,setRunning_task] = useState([]);
    const[all_task,setAll_task] = useState([]);
    const[deleted_filter_data,setDeleted_filter_data] = useState([]);
    const[completed_task,setCompleted_task] = useState([]);


    const form_data = {title,setTitle,description,setDescription,
      priority, setPriority,date,setDate,status,setStatus,id,setId,final_data,setFinal_data,edit_data_id,setEdit_data_id,
      updated_data, setUpdated_data,delete_data_id,setDelete_data_id,all_task,setAll_task,
      deleted_filter_data,setDeleted_filter_data,filter,setFilter,running_task,setRunning_task,
      completed_task,setCompleted_task,completed_data_id, setCompleted_data_id,restore_data_id,setRestore_data_id
    };
// console.log(final_data,"final_data APP");

  return(
    <>
      <div className={`task_complete_wrap ${blur_app==true?"task_complete_wrap_blur":""}`}>

      <Task_status form_data={form_data}/>
      
      <Task_input blur_app={blur_app} setBlur_app={setBlur_app} form_data={form_data}/>
      
      <Task_output blur_app={blur_app} setBlur_app={setBlur_app} form_data={form_data} />
      
      </div>
      
      <Task_edit blur_app={blur_app} setBlur_app={setBlur_app} form_data={form_data}/>
    </>
  );
}

export default App;
