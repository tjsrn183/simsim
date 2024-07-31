import { BodyHeader } from "./components/BodyHeader"
import { List } from "./components/List"
import { TodoInput } from "./components/TodoInput"

export const RealBody=()=>{
    return(

<main className="p-4 flex justify-center w-screen flex-col">

<BodyHeader/>

 <div className=" flex justify-center"><TodoInput/></div>
 <div className=" flex justify-center ">
 <div className=" w-3/5 pt-5">
 <List/>
 </div>
 </div>
 
    
  </main>

    )
    
}