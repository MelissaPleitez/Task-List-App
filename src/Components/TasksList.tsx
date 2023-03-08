
import TaskIdInterface from '../Interfaces/TaskIdInterface';
import useTasks from '../Store/useTasks';
import Swal from 'sweetalert2';
import listLogo  from '../assets/sticky-note.svg';
import { AiFillDelete} from "react-icons/ai";
import Checkbox from '@mui/material/Checkbox';

const TasksList=(props:TaskIdInterface)=>{

const {removeTasks, isCompletedTask, tasks}=useTasks()



const handleRemove=(id: string)=>{
    isCompletedTask(id)
}

const handleCompleted=(id: string)=>{
    removeTasks(id)
}




  return (
    <>
    <div className='container'>
      <section>
        <figure>
        <img src={listLogo}  alt="todo logo" />
          </figure>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <p>{props.owner}</p>
          <p>⏰ Finish Date:</p>
          <p>{props.taskDate}</p>
         <div>
      { props.isCompleted ?  <button className="bottons"  onClick={()=>{

if(props.isCompleted){
    
  Swal.fire({
    icon: 'success',
    title: 'The Task has been removed',
    showConfirmButton: false,
    timer: 1500
    
  })}   

  handleCompleted(props.id);

}}>Remove <AiFillDelete/></button>: null }
</div>

<div>
  
{ !props.isCompleted ? <Checkbox  onClick={()=>{

if(!props.isCompleted){
   
 Swal.fire(
   'Task Completed!',
   'success'
 )
  } 
handleRemove(props.id);


}} />: null
}
      </div>

        </section>

        
        
    </div>

    </>
  )
}

export default TasksList;