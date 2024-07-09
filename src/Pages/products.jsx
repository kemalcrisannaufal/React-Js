import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Shoes",
    price: "Rp 100.000",
    image: "/images/shoes.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut, eaque laudantium rem nam doloremque deserunt amet doloribus deleniti placeat!",
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 500.000",
    image: "/images/shoes.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut, eaque laudantium rem nam doloremque deserunt amet doloribus deleniti placeat!",
  },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
  const handleLogout = () =>{
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "/login";
  }
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-800 text-white px-10 items-center py-5">
        {email}
        <Button classname="ml-3 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
