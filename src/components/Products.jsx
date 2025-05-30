import { useState,useEffect } from "react";
import { fetchCraftProducts } from "../api";
import { Link } from "react-router-dom";
import { useAuth } from "../authContext";
const Products = () => {
  const [craftproducts,setCraftproducts] = useState([]);
  const {isAuthenticated} = useAuth();
  useEffect(()=>{
    fetchCraftedProducts()
  },[])
  const fetchCraftedProducts = async ()=>{
    try {
      const carftRes = await fetchCraftProducts();
      if(carftRes.data.success){
        setCraftproducts(carftRes.data.results);
        return;
      }
    } catch (error) {
      console.log(error);      
    }
  }
  const addTocart = async (id)=>{
      
  }
  return (
    <>
      <div className="product-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
              </p>
              <p>
                <a href="shop.html" className="btn">
                  Explore
                </a>
              </p>
            </div>
            {craftproducts.map((items)=>(
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <Link className="product-item" to="#">
                      <img
                        src={"http://localhost:8000/" + items.image}
                        className="img-fluid product-thumbnail"
                      />
                      <h3 className="product-title">{items.name}</h3>
                      <strong className="product-price">${items.price}</strong>
                      {isAuthenticated &&
                      <span className="icon-cross" onClick={()=>addTocart(items.id)}>
                        <img src="images/cross.svg" className="img-fluid"/>
                      </span>
                      }
                      
                    </Link>
                  </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
