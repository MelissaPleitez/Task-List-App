import { create} from "zustand";
import { persist, devtools } from "zustand/middleware";
import TasksInterface from '../Interfaces/TasksInterface';
import TaskStateInterface from '../Interfaces/TaskStateInterface';
import TaskIdInterface from '../Interfaces/TaskIdInterface';
import OpenState from '../Store/OpenState';



const useTasks = create<TaskStateInterface>()(
    persist(
        devtools((set) => ({
          tasks: [],
    
          addTasks:({title, description, owner,taskDate}: TasksInterface)=>{
              set((state)=>({
               tasks:[
                  ...state.tasks,
                  {
                      id:crypto.randomUUID(),
                      title,
                      description,
                      owner,
                      taskDate,
                      isCompleted: false,
      
               }as TaskIdInterface,
              
              ]
              }))
          },
      
      
          removeTasks: (id)=>{
           set((state)=>({
              tasks: state.tasks.filter((task)=>task.id !== id),
           }));
          },
      
      
          isCompletedTask:(id)=>{
            set((state)=>({
              tasks: state.tasks.map((task)=> task.id === id ? ({...task, isCompleted: true} as TaskIdInterface): task)
         }))
          },




        })),
        { name: "Task-list" }
      )
)



export default useTasks;