import { SIDEBAR_DESCRIPTION, SIDEBAR_TITLE } from "@/constants/constants";
import { CiGrid42 } from "react-icons/ci";
import { MdOutlineVerified } from "react-icons/md";

type SideBarItem ={
  id: string;
  label: string;
  icon: React.ElementType
}

interface SideBarProps {
  items: SideBarItem[];
  activeId: string;
  onItemClick: (id: string) => void;
}

const SideBarComponent = ({ items, activeId, onItemClick }: SideBarProps) => {
  return (
    <aside className="w-72 h-screen bg-white border-gray-300">
      <div className="px-6 py-4 border border-gray-300 flex flex-row gap-2 items-center">
        <div className="bg-gray-200 p-2 rounded-lg">
          <CiGrid42 className="size-6 stroke-1" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center text-left gap-2 font-semibold">
            <h2>{SIDEBAR_TITLE}</h2>
            <MdOutlineVerified/>
          </div>
          <span className="text-sm">{SIDEBAR_DESCRIPTION}</span>
        </div>
      </div>
      <ul className="space-y-2 p-4">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.id}>
              <button
                onClick={() => onItemClick(item.id)}
                className={`w-full flex flex-row items-center gap-2 rounded-lg text-left px-4 py-2 ${
                  activeId === item.id
                    ? "bg-gray-950 text-white"
                    : "hover:bg-gray-300 hover:text-black"
                }`}
              >
                <Icon />
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBarComponent;
