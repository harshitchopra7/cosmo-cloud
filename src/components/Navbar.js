import React, { useState } from "react";

// routing
import { useNavigate } from "react-router-dom";

// internal deps
import Button from "../common/Button";

// assets
import logoMain from "../assets/logoMain.png";

import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";

const items = ["Home", "Pricing", "About", "Contact us"];

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
    window.onscroll = function () {};
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
        <div className="flex justify-center" style={{ flex: "0.88" }}>
          {items.map((val) => (
            <p
              className="mr-8 hover:bg-[#3A3564] p-2 pl-4 pr-4 rounded-full cursor-pointer font-semibold text-[16px]"
              onClick={() => handleNavbarRedirection(val)}
            >
              {val}
            </p>
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
              <img src={logoMain} alt="" />
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

          {/* <div className="flex items-center justify-between p-2 pl-4 pr-4">
            <div className="font-semibold cursor-pointer">
              <img src={logoMain} alt="" />
            </div>
            <div>
              <div
                className="px-3 py-2 cursor-pointer"
                onClick={handleClickTabs}
              >
                <img src={menu} alt="logo" />
              </div>
              <div>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={openTabs}
                  onClose={handleCloseTabs}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  style={{
                    marginTop: "45px",
                  }}
                >
                  <div
                    className="flex justify-center largeMobile:flex-col"
                    style={{ flex: "0.88" }}
                  >
                    {items.map((val) => (
                      <MenuItem
                        style={{
                          padding: "-10px 0",
                          margin: "-8px 0",
                          width: "150px",
                          background: "#532AD3",
                        }}
                        onClick={() => handleNavbarRedirection(val)}
                      >
                        <div className="flex justify-start">
                          <p className="mr-8 hover:bg-[#3A3564] p-2 pl-4 pr-4 ml-2 text-[#F4F4F4] cursor-pointer font-semibold text-sm">
                            {val}
                          </p>
                        </div>
                      </MenuItem>
                    ))}
                  </div>
                </Menu>
              </div>
            </div>
          </div> */}
        </>
      </div>
    </>
  );
}

export default Navbar;
