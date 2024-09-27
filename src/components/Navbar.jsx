import Button from "./Button"

const Navbar=()=>{
    return (
        <div className="max-w-screen-xl mx-auto py-6  bg-zinc-900 flex gap-20 justify-between border-b-[1px] border-zinc-700">
           <div className="flex items-center mt-4">
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                <div className="flex gap-10 items-center ml-20">
                    {["Home", "Work", "Culture", "", "News"].map((item, index)=>{
                    return (
                        item.length===0?<span className="w-[1.5px] h-5 bg-zinc-200"></span>:(<a href="" className="flex items-center gap-1">{index=='1' && <span style={{boxShadow: "0 0 0.45em #00FF19"}} className="inline-block w-2 h-2 bg-sky-400 rounded-full"></span>}{item}</a>)
                    )
                    })}
                </div>
           </div>
            <Button/>
        </div>
    )
}
export default Navbar