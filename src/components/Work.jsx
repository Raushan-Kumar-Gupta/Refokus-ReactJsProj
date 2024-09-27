const Work = () => {
  const imgdata = [
    { url: "https://images.unsplash.com/photo-1526550517342-e086b387edda?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "50%", left: "50%" , isActive:false},
    { url: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg", top: "45%", left: "49%"  , isActive:false},
    { url: "https://images.unsplash.com/photo-1526297293668-36b3f33a373b?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "65%", left: "57%"  , isActive:false},
    { url: "https://images.unsplash.com/photo-1702670527697-e243f503f33a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "57%", left: "50%"  , isActive:false},
    { url: "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg", top: "65%", left: "40%"  , isActive:false },
    { url: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg", top: "75%", left: "45%" , isActive:false },
    { url: "https://images.pexels.com/photos/28554685/pexels-photo-28554685/free-photo-of-front-view-of-sleek-white-sports-car-in-urban-setting.jpeg", top: "40%", left: "60%"   , isActive:false},
  ];
  return (
    <div className="w-full mt-5">
      <div className="max-w-screen-xl mx-auto text-center relative">
        <h1 className="text-[30vw] font-medium leading-none select-none tracking-tight">
          work
        </h1>
        <div className="w-full h-full absolute top-0">
            {imgdata.map((item, index)=>(item.isActive && <img className="w-60 absolute -translate-x-[50%] -translate-y-[50%] rounded-lg" src={item.url} style={{top: item.top , left: item.left}} alt="" />))}
        </div>
      </div>
    </div>
  );
};
export default Work;
