"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(0);
  const [added, setAdded] = useState(false);
  const [imageSrc, setImageSrc] = useState("/image-product-1.jpg");

  const plus = () => {
    setAmount((prev) => prev + 1);
  };

  const minus = () => {
    if (amount > 0) {
      setAmount((prev) => prev - 1);
    }
  };

  const handleCart = () => {
    if (amount == 0) {
      setAdded(false);
    } else if (amount > 0) {
      setAdded(true);
    }
  };

  const handleDelete = () => {
    setAdded(false);
    setAmount(0);
  };

  const changeImage = (src) => {
    setImageSrc(src);
  };

  return (
    <>
      <Navbar added={added} handleDelete={handleDelete} amount={amount} />

      <div className="container">
        <div className="product">
          <div className="product__image">
            <Image
              src={`${imageSrc}`}
              fill
              alt="Sneakers"
              id="Image"
              sizes="20vh 20vw"
            ></Image>
          </div>
          <div className="product__thumbnail">
            <div className="thumbnail">
              <Image
                src={"/image-product-1-thumbnail.jpg"}
                fill
                alt="Sneakers"
                onClick={() => changeImage("/image-product-1.jpg")}
              ></Image>
            </div>
            <div className="thumbnail">
              <Image
                src={"/image-product-2-thumbnail.jpg"}
                fill
                alt="Sneakers"
                onClick={() => changeImage("/image-product-2.jpg")}
              ></Image>
            </div>
            <div className="thumbnail">
              <Image
                src={"/image-product-3-thumbnail.jpg"}
                fill
                alt="Sneakers"
                onClick={() => changeImage("/image-product-3.jpg")}
              ></Image>
            </div>
            <div className="thumbnail">
              <Image
                src={"/image-product-4-thumbnail.jpg"}
                fill
                alt="Sneakers"
                onClick={() => changeImage("/image-product-4.jpg")}
              ></Image>
            </div>
          </div>
        </div>
        <div className="content">
          <h3 className="product__heading">SNEAKERS COMPANY</h3>
          <h1 className="product__title">Fall Limited Edition Sneakers</h1>
          <p className="product__desc">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="price">
            <span className="product__price">$125.0</span>
            <span className="discount">50%</span>
            <br />
            <span className="product__total">$250.0</span>
          </div>

          <div className="buttons">
            <div className="counter">
              <Image
                src={"/icon-minus.svg"}
                width={10}
                height={10}
                alt="minus sign"
                onClick={minus}
              ></Image>
              <input type="text" readOnly value={amount} />
              <Image
                src={"/icon-plus.svg"}
                width={10}
                height={10}
                alt="plus sign"
                onClick={plus}
              ></Image>
            </div>
            <button type="button" onClick={handleCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
