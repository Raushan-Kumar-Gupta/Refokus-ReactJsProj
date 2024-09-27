import { BsArrowReturnRight } from "react-icons/bs";

const Button=({btnName="Click to Start"})=>{
    return (
      <button className="rounded-full bg-zinc-100 text-black px-4 py-1 flex items-center gap-2 w-[150px] h-[36px]">{btnName}<BsArrowReturnRight /></button>
    )
}
export default Button;