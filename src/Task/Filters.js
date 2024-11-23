import { useEffect, useState } from "react";

const Filters =(props)=>{
// console.log(props,"<><><><<><><>");
const {title,setTitle,description,setDescription,priority, setPriority,
    date,setDate,status,setStatus,id,setId,final_data,setFinal_data,edit_data_id,setEdit_data_id,
    delete_data_id,setDelete_data_id,updated_data, setUpdated_data,all_task,setAll_task,
    deleted_filter_data,setDeleted_filter_data,filter,setFilter,running_task,setRunning_task,
    completed_task,setCompleted_task} = props.form_data;

// console.log(title,"<----------");

const Running = ()=>{
    setFilter("running_task");
    setUpdated_data(running_task);
}
const All = ()=>{
    
    setFilter("all");
    console.log(all_task,"FILTER - all_task");
    setUpdated_data(all_task);
    
}
const Deleted = ()=>{
    
    setFilter("deleted");
    setUpdated_data(deleted_filter_data);

}
const Completed = ()=>{
    setFilter("completed");
    setUpdated_data(completed_task);
}
const Latest =()=>{
    setFilter("latest");
    setUpdated_data(updated_data.sort((a, b) => new Date(b.date) - new Date(a.date)));
}
const Oldest = ()=>{
    setFilter("oldest");
    setUpdated_data(updated_data.sort((a, b) => new Date(a.date) - new Date(b.date)));
}


// console.log(filter,"filter");

// useEffect(()=>{
//     const All_data =  updated_data.filter((key)=>{

//         if(filter=="all"){
            
//            return key.status === "all";
//         }
//         if(filter=="deleted"){
//             console.log("hi");
//             setUpdated_data(deleted_filter_data);
//             return key.status === "deleted";
//          }

//     });
//     setUpdated_data(All_data);
//     // console.log(updated_data,"updated_data");
// },[filter]);




// console.log(deleted_filter_data,"deleted_filter_data");
    return (
        <>
            <div className="task_output_filters">
                        <div className="task_output_filter_inside">
                            <div style={{backgroundColor:"rgb(0 128 128)",padding:"0.3rem",color:"#fff"}}>
                                <label>Filter By - </label>
                            </div>
                            <div>
                                
                                <button className={filter==="running_task"?"active_filter":""} onClick={Running}>Running Task</button>
                            </div>
                            
                            {/* <div>
                                
                                <button>Priority</button>
                            </div> */}
                            {/* <div>
                                
                                <button>Due Date</button>
                            </div> */}
                            <div>
                                
                                <button onClick={Completed}>Completed</button>
                            </div>
                            <div>
                                
                                <button className={filter==="deleted"?"active_filter":""} onClick={Deleted}>Deleted</button>
                            </div>
                            {/* <div>
                                
                                <button className={filter==="all"?"active_filter":""} onClick={All}>All</button>
                            </div> */}
                            <div>
                                <button className={filter==="latest"?"active_filter":""} onClick={Latest}>Latest</button>
                            </div>
                            <div>
                                <button className={filter==="oldest"?"active_filter":""} onClick={Oldest}>Oldest</button>
                            </div>

                        </div>

                    </div>  
                      
        </>
    )
}

export default Filters;