interface SideBarItem {
  id: string;
  label: string;
}

interface SideBarProps {
  items: SideBarItem[];
  activeId: string;
  onItemClick: (id: string) => void;
}

const SideBarComponent = ({ items, activeId, onItemClick }: SideBarProps) => {
  return (
    <aside className="w-64 h-screen bg-gray-100 ">
        <ul className="space-y-1 p-4">
            {items.map((item)=>(<li key={item.id}>
                <button className={`w-full rounded-lg `}></button>
            </li>))}
        </ul>
    </aside>
  );
};

export default SideBarComponent;
