import { useEffect, useState } from "react";
import Filters from "./Filters";

const TaskOutput = (props) => {
  const { blur_app, setBlur_app } = props;

  const {
    title,
    setTitle,
    description,
    setDescription,
    priority,
    setPriority,
    date,
    setDate,
    status,
    setStatus,
    id,
    setId,
    final_data,
    setFinal_data,
    edit_data_id,
    setEdit_data_id,
    delete_data_id,
    setDelete_data_id,
    updated_data,
    setUpdated_data,
    all_task,setAll_task,
    deleted_filter_data,
    setDeleted_filter_data,
    filter,setFilter,running_task,setRunning_task,
    completed_task,setCompleted_task,
    completed_data_id, setCompleted_data_id,restore_data_id,setRestore_data_id
  } = props.form_data;

  const editCall = (event) => {
    if (blur_app === true) {
      setBlur_app(false);
    } else {
      setBlur_app(true);
    }
    setEdit_data_id(event.target.getAttribute("name"));
  };

  const deleteCall = (event) => {
    setDelete_data_id(event.target.getAttribute("name"));
  };
  const completeCall = (event) => {
    // setDelete_data_id(event.target.getAttribute("name"));
    console.log(event.target.checked,"checked");
    if(event.target.checked == true){
    
      setCompleted_data_id(event.target.getAttribute("name"));
  
    }
  };
  const restoreCall = (event) => {
    setRestore_data_id(event.target.getAttribute("name"));
    
  }

  useEffect(() => {
    const filterDeletedData = updated_data.find((key) => key.id === parseInt(delete_data_id));
    // console.log(filterDeletedData, "filterDeletedData");
    if (filterDeletedData) {
      setDeleted_filter_data((prevDeleted_filter_data) => [...prevDeleted_filter_data, filterDeletedData]);
    }
    // console.log(deleted_filter_data, "deleted_filter_data");
    const filteredData = updated_data.filter((key) => key.id !== parseInt(delete_data_id));
    setRunning_task(filteredData);
    setUpdated_data(filteredData);
    // setAll_task(updated_data);
    
  }, [delete_data_id]);

  useEffect(() => {
    console.log(completed_data_id,"completed_data_id NEWSEST");

    const filterCompletedData = updated_data.find((key) => key.id === parseInt(completed_data_id));
    // console.log(filterDeletedData, "filterDeletedData");
    if (filterCompletedData) {
      setCompleted_task((prevCompleted_task) => [...prevCompleted_task, filterCompletedData]);
    }
    // console.log(deleted_filter_data, "deleted_filter_data");
    const filteredData_1 = updated_data.filter((key) => key.id !== parseInt(completed_data_id));
    setRunning_task(filteredData_1);
    setUpdated_data(filteredData_1);
    // setAll_task(updated_data);
    
  }, [completed_data_id]);

  useEffect(()=>{
   console.log(filter,"- - reached to useeffecet");
   if(filter == "completed"){
    console.log(running_task,"<--running----updated-->");
    const filterRestoredData = completed_task.find((key) => key.id === parseInt(restore_data_id));
    // console.log(filterDeletedData, "filterDeletedData");
    if (filterRestoredData) {
      setRunning_task((prevRunning_task) => [...prevRunning_task, filterRestoredData]);
    }
    // console.log(deleted_filter_data, "deleted_filter_data");
    const filteredData_2 = completed_task.filter((key) => key.id !== parseInt(restore_data_id));
    setCompleted_task(filteredData_2);
    // setUpdated_data(filteredData_2);
    setFilter("running_task");
    console.log(filter,"- - reached to useeffecet");
    
   }
   if(filter == "deleted"){
    console.log(running_task,"<--running----updated-->");
    const filterRestoredData = deleted_filter_data.find((key) => key.id === parseInt(restore_data_id));
    // console.log(filterDeletedData, "filterDeletedData");
    if (filterRestoredData) {
      setRunning_task((prevRunning_task) => [...prevRunning_task, filterRestoredData]);
    }
    // console.log(deleted_filter_data, "deleted_filter_data");
    const filteredData_2 = deleted_filter_data.filter((key) => key.id !== parseInt(restore_data_id));
    setDeleted_filter_data(filteredData_2);
    // setUpdated_data(filteredData_2);
    setFilter("running_task");
    console.log(filter,"- - reached to useeffecet");
    
   }
    

  },[restore_data_id]);

// console.log(running_task,"<---------------running_task");
// console.log(all_task,"<-------------------all_task");
// console.log(deleted_filter_data, "<-------------------deleted_filter_data");
// console.log(completed_task, "<-------------------Completed_task");
// console.log(updated_data, "<-------------------updated_data");

  return (
    <>
      <div className="task_output_wrap" current_filter={filter}>
        <div className="task_output_inside">
          <Filters form_data={props.form_data} />
          <div style={{ height: "88%", overflow: "auto", paddingRight: "0.5rem" }}>
            {updated_data.map((key) => {
              return (
                <>
                  <div className="task_output_unit" id={key.id}>
                    <div className="task_output_unit_header">
                      <span className="task_output_priority_status">{key.priority}</span>
                      <span className="task_output_due_date">{key.date}</span>
                    </div>

                    <div className="task_output_unit_inside">
                   
                      <div className="task_output_left">
                        <div className="task_output_left_actions">
                          <div className="task_output_left_status">
                          {
                            (filter =="running_task" || filter =="latest" || filter =="oldest")? <input type="checkbox" onClick={completeCall} name={key.id}/> :""
                          }
                          </div>
                        </div>
                      </div>
                    
                      

                      <div className="task_output_center">
                        <div className="task_output_center_inside">
                          <div className="task_output_center_title">
                            <p>{key.title}</p>
                          </div>
                          <div className="task_output_center_description">
                            <p>{key.description}</p>
                          </div>
                        </div>
                      </div>
                    
                      <div className="task_output_right">
                        <div className="task_operations_wrap">
                        {(filter =="running_task" || filter =="latest" || filter =="oldest")? <>
                          <span className="task_operations_edit" onClick={editCall} name={key.id}>
                            EDIT
                          </span>
                          
                            
                            <span className="task_operations_delete" onClick={deleteCall} name={key.id}>
                             DELETE
                          </span>
                            
                          </>:
                          <>
                            <span className="task_operations_edit" onClick={restoreCall} name={key.id}>
                            RESTORE
                          </span>
                          
                          </>
                          }
                        </div>
                      </div>
                 
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskOutput;