import { useForm } from "react-hook-form";
import useTasks from "../Store/useTasks";
import TasksInterface from "../Interfaces/TasksInterface";
import { Restore } from "@material-ui/icons";


const TaskForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TasksInterface>();

  const { addTasks } = useTasks();

  const onSubmit = (list: TasksInterface) => {
    console.log(list);
    addTasks(list);
    reset();
  };

  return (
    
    <div className="form-container">

    <form  onSubmit={handleSubmit(onSubmit)} >
        <div>
        <label htmlFor="title">Tittle</label>
       <input type="text" id="title" {...register("title", { required: true })} />
       {errors?.title ? (
            <span>This field is required </span>
          ) : null}
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" cols={30} rows={5} {...register("description", { required: true })}></textarea>
            {errors?.description ? (
            <span>This field is required </span>
          ) : null}
        </div>
        <div>
            <label htmlFor="owner">Task's Owner</label>
            <input type="text" id="owner" {...register("owner", { required: true })}/>
            {errors?.owner ? (
            <span>This field is required </span>
          ) : null}
        </div>
        <div>
            <label htmlFor="date">Task's Date</label>
            <input type="date" id="taskDate" {...register("taskDate", { required: true })} />
            {errors?.taskDate ? (
            <span>This field is required </span>
          ) : null}
        </div>
        <div>
            <button className="bottons" type="submit">Add Task</button>
        </div>
    </form>

    </div>
  );
};

export default TaskForm;
