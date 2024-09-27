import Product from "./Product";

const Products = () => {
  const products = [
    {
      title: "Bugatti",
      description:
        "The first one in the list is Rolls-Royce. The car brand offers impeccable craftsmanship. It is seen as a real epitome of luxury. Every car is actually custom-built based on just the right specifications of the owner.",
      first: true,
      second: false,
    },
    {
      title: "Rolls-Royce",
      description:
        "The brand has been making luxury cars since 1904, and some of its most expensive models include the Boat Tail, Sweptail, and La Rose Noire Droptail.",
      first: true,
      second: true,
    },
    {
      title: "Lamborghini",
      description:
        "The Lamborghini Veneno is a roadster with a cosmic curve design inspired by aeronautics.",
      first: true,
      second: false,
    },
    {
      title: "Ferarri",
      description:
        "This brand's cars are made with aerospace-grade materials and are designed to push the boundaries of speed and performance.",
      first: true,
      second: true,
    },
    {
      title: "Tesla",
      description:
        "Autopilot vehicles are the future, and Tesla makes it possible. It comes with great driver assistance features, making car driving a hassle-free experience. The impressive range is a testament to luxury driving.",
      first: true,
      second: false,
    },
    {
      title: "BMW",
      description:
        "This car brand is popular for its sporty feel. Unlike other sporty feel car, this one also adds a touch of luxury to the experience. The brand puts a great emphasis on innovation and driving dynamics. ",
      first: true,
      second: false,
    },
  ];
  return (
    <div className="flex flex-col gap-10 mt-5">
      {products.map((pitem, index)=>{
        return <Product key={index} pitem={pitem}/>
      })}
    </div>
  );
};
export default Products;
