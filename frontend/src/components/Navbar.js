import {Menubar} from "primereact/menubar";
 
export default function Navbar(){
  const items=[
    {label:"Home",icon:"pi pi-home"},
    {label:"Products",icon:"pi pi-box"}
  ];
  return (
    <Menubar model={items}/>
  )
}