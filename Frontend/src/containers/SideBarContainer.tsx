import SideBarComponent from "@/components/SideBarComponent";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSuitcase } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";

const SideBarContainer = ()=>{
    const navigate = useNavigate();
    const location = useLocation();
    
    const SideBarItems = [
        {id:"jobs",label:"Jobs",path:"/",icon:FaSuitcase},
        {id:"screening",label:"Screening",path:"/screening",icon:GrDocumentText}
    ]

    const activeItem = SideBarItems.find((item)=> location.pathname.startsWith(item.path))?.id??"/";

    const handleClick = (id:string)=>{
        const item = SideBarItems.find((i)=>i.id === id)

        if(!item) return

        navigate(item.path)
    }

    return(
        <SideBarComponent items={SideBarItems} activeId={activeItem} onItemClick={handleClick}/>
    )
}

export default SideBarContainer;