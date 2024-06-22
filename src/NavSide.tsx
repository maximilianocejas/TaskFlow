
import TaskTitle from "./components/TaskTitle"




export default function NavSide(){

    
    return(
        <nav className="bg-white-secondary h-full w-full col-start-1 col-end-2">
            <div>
                <div>
                    <div className="flex gap-x-2">
                        <div className="bg-red-500 w-[26px] h-[26px] rounded-full flex justify-center items-center">
                            <p className="text-sm text-white text-bold">MC</p>
                        </div>
                        <p>Maximiliano Cejas</p>
                    </div>
                    <div className="flex gap-x-2">
                        <img src="/images/house.svg" alt="House" />
                        <p>Inicio</p>
                    </div>
                    <div className="flex gap-x-2">
                        <img src="/images/config.svg" alt="House" />
                        <p>Configuración</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p>Mis tareas</p>
                    </div>
                    <div>
                        <button>
                            <img className="w-[26px] h-[26px]" src="/images/add-icon.svg" alt="Add task section" />
                        </button>
                    </div>
                </div>
                <div>
                    <TaskTitle/>
                </div>
            </div>
            
        </nav>
    )
}