const Stripe=({val})=>{
    return (
        <div className="flex h-12 w-[20%] gap-10 border-b-[1.5px] border-r-[1.5px] border-t-[1.5px]  justify-evenly mt-16" >
            <img className="" src={val.url} alt="" />
            <h3 className="font-semibold mt-[5%] mr-[15%]">{val.number}</h3>
        </div>
    )
}
export default Stripe;