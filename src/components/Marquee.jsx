import React from "react";
const Marquee=({imgurl})=>{
    return(
        <div className="flex w-full py-5 gap-16 bg-slate-100">
            {imgurl.map(url=>
                 <img className="border" src={url} alt="" />
            )}
        </div>
    )
}
export default Marquee;