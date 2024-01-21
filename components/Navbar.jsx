"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({ added, handleDelete, amount }) => {
  const [active, setActive] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  console.log(amount);
  const handleBasket = () => {
    setActive((prevActive) => !prevActive);
  };
  const handleClose = () => {
    setIsClosed((prev) => !prev);
  };
  return (
    <nav className="navbar">
      <div className="left__nav">
        <div className="menu">
          <Image
            src={"/icon-menu.svg"}
            alt="Menu"
            height={20}
            width={20}
            onClick={handleClose}
          ></Image>
        </div>
        <div className="logo">
          <Image src={"/logo.svg"} fill alt="Logo Icon" />
        </div>
        <div className={`links ${!isClosed ? "activeLinks" : ""}`}>
          <Image
            src={"/icon-close.svg"}
            width={20}
            height={20}
            alt="Close Icon"
            className="close__btn"
            onClick={handleClose}
          ></Image>
          <Link href={"/"} className="link">
            Collections
          </Link>
          <Link href={"/"} className="link">
            Men
          </Link>
          <Link href={"/"} className="link">
            Women
          </Link>
          <Link href={"/"} className="link">
            About
          </Link>
          <Link href={"/"} className="link">
            Contact
          </Link>
        </div>
      </div>
      <div className="right__nav">
        <div className={`basket ${active ? "active" : ""}`}>
          <h3 className="basket__heading">Cart</h3>
          {added ? (
            <div className="basket__items">
              <div className="basket__item">
                <div className="item__image">
                  <Image
                    src={"/image-product-1-thumbnail.jpg"}
                    height={55}
                    width={55}
                    alt="Sneakers"
                  ></Image>
                </div>
                <div className="item__desc">
                  <h3 className="item__title">Fall Limited Edition Sneakers</h3>
                  <div className="item__price">
                    <span>$125.0</span>x <span>{amount}</span>
                    <span>${125.0 * amount}</span>
                  </div>
                </div>
                <div className="delete">
                  <Image
                    src={"/icon-delete.svg"}
                    height={10}
                    width={10}
                    alt="Delete Btn"
                    onClick={handleDelete}
                  ></Image>
                </div>
              </div>
              <button type="button" className="basket__btn">
                Checkout
              </button>
            </div>
          ) : (
            <span className="empty">Basket is empty</span>
          )}
        </div>
        <div className="cart-icon__container">
          <div className={`cart__dot ${amount == 0 ? "unactive" : ""}`}>
            {amount}
          </div>
          <Image
            src={"/icon-cart.svg"}
            height={20}
            width={20}
            alt="Cart Icon"
            className="cart__icon"
            onClick={handleBasket}
          />
        </div>
        <Image
          src={"/image-avatar.png"}
          height={50}
          width={50}
          alt="Profile Picture"
          className="profile__picture"
        />
      </div>
    </nav>
  );
};

export default Navbar;
