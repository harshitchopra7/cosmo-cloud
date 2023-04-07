import React, { useState } from "react";

// routing
import { useNavigate } from "react-router-dom";

// internal deps
import Button from "../common/Button";

// assets
import logoMain from "../assets/brandResources/FullLogoDark.svg";

import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";

import styled from 'styled-components'

const items = ["Home", "Pricing", "About", "Contact us"];

const NavigationItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #E0E0E0;
  cursor: pointer;
  padding: 8px 16px;
  transition: 0.2s ease-in;

  &:hover {
    background: #3A3564;
    border-radius: 21px;
    font-weight: 600;
    transition: 0.2s ease-in;
  }

  &::after {
    display: block;
    content: '${({content}) => content}';
    font-weight: 600;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`

function Navbar() {
  const navigate = useNavigate();

  const [showNavbarinMobileScreen, setShowNavbarinMobileScreen] =
    useState(false);

  const handleNavbarRedirection = (page) => {
    switch (page) {
      case "Home":
        navigate("/");
        return;
      case "About":
        navigate("/about-us");
        return;
      case "Pricing":
        navigate("/pricing");
        return;
      case "Contact us":
        navigate("/contact-us");
        return;
      default:
        return;
    }
  };

  function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () { };
  }

  const closeMenu = () => {
    setShowNavbarinMobileScreen(false);
    enableScroll();
  };

  const onMobileJoinWaitlistClick = () => {
    navigate("/");
    closeMenu();
  };

  return (
    <>
      <div className="mobile:hidden flex items-center justify-between pt-4 pb-4 pl-[2%] pr-[2%]">
        <div className="font-semibold cursor-pointer">
          <img
            className="h-[30px]"
            onClick={() => navigate("/")}
            src={logoMain}
            alt=""
          />
        </div>
        <div className="flex justify-center" style={{ gap: "8px" }}>
          {items.map((val) => (
            <NavigationItem
              onClick={() => handleNavbarRedirection(val)}
              content={val}
            >
              {val}
            </NavigationItem>
          ))}
        </div>
        <div>
          <Button text="Join the waitlist" onClick={() => navigate("/")} />
        </div>
      </div>

      <div className="hidden mobile:block">
        <>
          <div className="flex items-center justify-between p-4">
            <div className="font-semibold cursor-pointer">
              <img className="h-[28px]" src={logoMain} alt="" />
            </div>
            <MdOutlineMenu
              size={25}
              onClick={() => {
                setShowNavbarinMobileScreen(true);
                disableScroll();
              }}
            />
          </div>

          {showNavbarinMobileScreen && (
            <div className="fixed overflow-hidden top-0 left-0 right-0 h-[100vh] bg-[#161426] p-4">
              <div className="flex justify-between">
                <img
                  className="h-[28px]"
                  onClick={() => {
                    navigate("/");
                    closeMenu();
                  }}
                  src={logoMain}
                  alt=""
                />
                <MdOutlineClose size={25} onClick={closeMenu} />
              </div>

              <div className="mt-12 mb-12 ml-4">
                {items.map((val) => (
                  <p
                    className="mt-8"
                    onClick={() => {
                      handleNavbarRedirection(val);
                      closeMenu();
                    }}
                  >
                    {val}
                  </p>
                ))}
              </div>

              <Button
                text="Join the waitlist"
                onClick={onMobileJoinWaitlistClick}
              />
            </div>
          )}
        </>
      </div>
    </>
  );
}

export default Navbar;
