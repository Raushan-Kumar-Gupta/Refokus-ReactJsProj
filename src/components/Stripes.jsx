import Stripe from "./Stripe"

const Stripes=()=>{
    const imgnum=[
        {url:"https://i.pinimg.com/736x/68/80/cb/6880cb7188a0a623596c431a651ab33d.jpg" , number:12},
        {url:"https://static.vecteezy.com/system/resources/previews/020/502/469/non_2x/ferrari-logo-brand-car-symbol-with-name-white-design-italian-automobile-illustration-with-black-background-free-vector.jpg" , number:2},
        {url:"https://image.made-in-china.com/202f0j00AMSouTrqZCbQ/Famous-Brand-Custom-New-Style-3D-Car-Dealership-Logo-Signs.webp" , number:23},
        {url:"https://wallpapers.com/images/hd/car-logo-960-x-820-wallpaper-ovsck3tg1a290h3e.jpg" , number:14},
        {url:"https://images.topgear.com.ph/topgear/images/2021/02/26/peugeot-logo-1-1614302291.jpg" , number:25},
        {url:"https://static.vecteezy.com/system/resources/previews/020/500/351/original/mercedes-brand-logo-car-symbol-with-name-white-design-german-automobile-illustration-with-black-background-free-vector.jpg" , number:6},
    ]
    return (
        <div className="flex">
            {imgnum.map((item, index)=>{
                return <Stripe key={index} val={item}/>
            })}
        </div>
    )
}
export default Stripes;