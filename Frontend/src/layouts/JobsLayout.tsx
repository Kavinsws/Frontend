import SideBarContainer from "@/containers/SideBarContainer";
import { Outlet } from "react-router-dom";



const JobsLayout = ()=>{
    return(
        <div className="flex h-screen">
            <SideBarContainer/>
            <main className="flex-1">
                <Outlet/>
            </main>
        </div>
    )
}

export default JobsLayout;