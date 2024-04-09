"use client";
import React from "react";
import Image from "next/image";
import "./Navbar.css";
import Link from "next/link";
import logo from "@/images/logo.png";
import { useState, useRef, useEffect } from "react";
// import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    // setShowMenu(false);
    menuRef.current.addEventListener("click", handleMobileMenu);
    // menuRef.current.style.transition = "all 0.5s";
    // return () => {
    //   menuRef.current.removeEventListener("click", handleMobileMenu);
    // };
  });

  useEffect(() => {
    setShowMenu(false);
  }, []);

  const handleMobileMenu = (e) => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="navbar">
        <Link href="/">
          <div className="logo">
            <Image src={logo} width={50} height={50} alt="JeevYantra-logo" />
            <h2>JeevYantra</h2>
          </div>
        </Link>
        <ul className="nav-menu">
          <li className="menu-item">
            <Link href="/">Home</Link>
          </li>

          <li className="menu-item">
            <Link href="/community">Community </Link>
          </li>

          <li className="menu-item">
            <Link href="/projects">Projects</Link>
          </li>

          <li className="menu-item">
            <Link href="/events">Events </Link>
          </li>
        </ul>

        <div ref={menuRef} className="menu-mobile-btn">
          <i class="bx bx-menu"></i>
        </div>

        {/* Mobile-Menu */}
        {showMenu && (
          <div className="menu-mobile">
            <ul className="nav-menu-mobile">
              <li className="menu-item-mobile">
                <Link href="/">Home</Link>
              </li>

              <li className="menu-item-mobile">
                <Link href="/community">Community </Link>
              </li>

              <li className="menu-item-mobile">
                <Link href="/projects">Projects</Link>
              </li>

              <li className="menu-item-mobile">
                <Link href="/events">Events </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
