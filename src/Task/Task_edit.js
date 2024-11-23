import { useEffect, useState } from "react";
import Task_input from "./Task_input";
import Filters from "./Filters";

const Task_edit = (props) => {
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
    updated_data,
    setUpdated_data,
    all_task,setAll_task,
    running_task,setRunning_task,filter,setFilter,completed_task,setCompleted_task
  } = props.form_data;

  const [selected_data, setSelected_data] = useState({});

  const todo_cancel = () => {
    setBlur_app(false);
  };

  useEffect(() => {
    if (edit_data_id) {
      const filteredData = running_task.find((key) => key.id === parseInt(edit_data_id));
      if (filteredData) {
        setSelected_data(filteredData);
      }
    }
  }, [edit_data_id, updated_data]);

  const todo_modify = () => {
    setBlur_app(false);
    // const updatedArray=(filter=="running_task")?[...running_task] : [...completed_task];


    const updatedArray = [...running_task];
    const index = updatedArray.findIndex((item) => item.id === parseInt(edit_data_id));
    if (index !== -1) {
      updatedArray[index] = { ...updatedArray[index], ...selected_data };
      setRunning_task(updatedArray);
      setUpdated_data(running_task);
      console.log(running_task,"<----running task");
    }
  };

  const form_data_change = (event) => {
    const { name, value } = event.target;
    setSelected_data({ ...selected_data, [name]: value });
  };

  return blur_app === false ? ("") : (
    <>
      <div className="task_edit_warp" id="task_edit_warp">
        <div className="task_edit_inside">
          <span className="close_button" onClick={() => setBlur_app(false)}>
            X
          </span>

          <div className="task_input_wrap">
            <div className="task_input_inside">
              <div className="task_input_content">
                <div className="task_input_title">
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={selected_data.title || ""}
                    onChange={form_data_change}
                  />
                </div>
                <div className="task_input_description">
                  <textarea
                    placeholder="Description"
                    name="description"
                    value={selected_data.description || ""}
                    onChange={form_data_change}
                  />
                </div>
                <div className="task_input_priority">
                  <select
                    name="priority"
                    onChange={form_data_change}
                    value={selected_data.priority || ""}
                  >
                    <option value="None">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className="task_input_date">
                  <input
                    type="date"
                    name="date"
                    onChange={form_data_change}
                    value={selected_data.date || ""}
                  />
                </div>
              </div>
              <div className="task_input_submit_button">
                <button onClick={todo_modify}>Modify</button>
                <button onClick={todo_cancel}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task_edit;