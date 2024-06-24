
import TasksBody from "./TasksBody/TasksBody";





export default function TaskContainer (){
    
    
    return(
        <div className="w-full h-full col-start-2 col-end-3 px-4">
            <div className="w-full">
                <div className="flex gap-x-4 bg-red-500 items-center">
                <div className="w-[46px] h-[46px] bg-blue-light rounded-full flex items-center justify-center">
                    <img className="h-[30px] w-[30px]" src="/images/task.svg" alt="Task title" />
                </div>
                <p className="text-xl text-black-bold">Tareas</p>
                <div>
                    <img className="h-[32px] w-[32px]" src="/images/pencil-title.svg" alt="Lapiz simple" />
                </div>
                </div>

            </div>
            <div className="w-full bg-green-500">  
                <div className="flex pt-2 gap-x-4 w-full h-full">
                    <input className="w-3/4 border-2 border-black" placeholder="Escribir tarea..." type="text" />
                    <button className="bg-white-light w-[32px] h-[32px] rounded-full">
                        <img className="h-[26px] w-[26px]" src="/images/arrow.svg" alt="" />
                    </button>
                </div>
            </div>
            <TasksBody/>
        </div>
    )
}