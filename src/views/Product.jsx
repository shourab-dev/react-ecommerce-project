import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiData } from "../helpers/getApiData";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import Loader from "../components/utils/Loader";
import ProductSlider from "../components/utils/ProductSlider";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    getApiData(`products/${id}`).then((res) => {
      
      setProduct(res);
      setLoading(false);
    });

    window.scroll({
      top:0,
      behavior: 'smooth'
    })

  }, [id]);



  return (
    <>
      {loading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <ProductPage>
          <div className="container ">
            <div className="row justify-content-between">
              <div className="productImage col-lg-4">
                <img loading="lazy" src={product.image} alt="" />
              </div>
              <div className="col-lg-7 productDetail">
                <div className="heading mb-3">
                  <h1>{product.title}</h1>
                  <p>
                    <Link to="/">Home</Link> / <span>{product.category}</span>
                  </p>
                </div>
                <p>
                  {product.description} {product?.rating?.rate}
                </p>
                <h4>
                  <strong>$ {product.price}</strong>
                </h4>
                <div className="rating d-flex align-items-center">
                  {product?.rating?.rate ? (
                    <ReactStars
                      activeColor="#ff9b00"
                      value={product?.rating?.rate}
                      isHalf={true}
                      size={24}
                      edit={false}
                    />
                  ) : (
                    ""
                  )}{" "}
                  <span className="mx-2">({product?.rating?.count})</span>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-5">
            <div className="container">
              <ProductSlider category={product.category} />
            </div>
          </section>
        </ProductPage>
      )}
    </>
  );
};

const ProductPage = styled.section`
  padding: 100px 0;

  .productImage img {
    max-width: 100%;
  }
  .productDetail h1 {
    font-size: 30px;
    color: var(--secondaryColor);
  }
  .productDetail p a {
    color: #777;
  }
  .productDetail p span {
    color: var(--primaryColor);
  }
`;

const LoaderWrapper = styled.section`
  height: 80vh;
  display: grid;
  place-items: center;
`;

export default Product;
