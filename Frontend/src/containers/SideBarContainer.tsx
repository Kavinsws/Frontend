import SideBarComponent from "@/components/SideBarComponent";
import { useNavigate } from "react-router-dom";

const SideBarContainer = ()=>{
    const navigate = useNavigate();
    
    const SideBarItems = [
        {id:"jobs",label:"Jobs",path:"/jobs"},
        {id:"screening",label:"Screening",path:"/screening"}
    ]

    const handleClick = ()=>{
        
    }

    return(
        <SideBarComponent/>
    )
}

export default SideBarContainer;