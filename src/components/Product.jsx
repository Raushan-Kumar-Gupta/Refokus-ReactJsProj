import Button from "./Button";

const Product=({pitem})=>{
    return (
        <div className="w-full ">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between  mt-24 px-20 min-h-[200px]">
                <h1 className="font-medium text-3xl text-[3vw]">{pitem.title}</h1>
                <div className="flex flex-col w-1/3 gap-4">
                    <p className="">{pitem.description}</p>
                   <div className="flex gap-4">
                    {(pitem.first && <Button btnName={"Click to Start"}/>)}
                   { (pitem.second && <Button btnName={"Check Now"}/>)}
                   </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Product;