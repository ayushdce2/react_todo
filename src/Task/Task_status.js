const Task_status = (props)=>{

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
        completed_data_id, setCompleted_data_id
      } = props.form_data;


    return(
        <>
            <div className="task_status_warp">
                <div className="task_status_inside">
                    <div className="total_task">
                        <p>Total Task</p>
                        <div className="total_task_number">
                            <p>{all_task.length}</p>
                        </div>

                    </div>
                    <div className="task_completed">
                        <p>Task Completed</p>
                        <div className="task_completed_number">
                            <p>{completed_task.length}</p>
                        </div>

                    </div>
                    <div className="task_deleted">
                        <p>Task Deleted</p>
                        <div className="task_deleted_number">
                            <p>{deleted_filter_data.length}</p>
                        </div>

                    </div>
                    <div className="task_pending">
                        <p>Task Pending</p>
                        <div className="task_pending_number">
                            <p>{running_task.length}</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Task_status;