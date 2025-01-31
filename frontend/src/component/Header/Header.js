import React, { useState } from "react";
import Navigation from "./Navigation";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { IoPersonSharp } from "react-icons/io5";

import decode from "jwt-decode";
import { BsBag } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

import jwtDecode from "jwt-decode";

const Header = ({ setSearch }) => {
  const [clickUser, setClickUser] = useState(false);
  const handleClickUser = () => {
    setClickUser(!clickUser);
  };
  const categoriesarr = [
    {
      name: "Cars",
      // image: <IoCarSportOutline />,
    },
    {
      name: "Electronics",
      // image: <RiComputerLine />,
    },
    {
      name: "Jobs",
      // image: <MdOutlineWorkOutline />,
    },
    {
      name: "Real Estates",
      // image: <FaHome />,
    },
    {
      name: "Fashoins",
      // image: <GiClothes />,
    },
    {
      name: "Job Seeker",
      // image: <IoSearchOutline />,
    },
  ];
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });

  // const [search, setSearch] = useState("");

  const token = state.token;

  const lastName = token && decode(token).lastName;
  const firstName = token && decode(token).firstName;
  const firstName2 = token && decode(token).given_name;
  const lastName2 = token && decode(token).family_name;
  const role = token && decode(token).role;

  return (
    <div className="main-header">
      <div className="header1">
        <div className="logo1">
          <header>
            <h1>
              <span>Open Sooq</span>
            </h1>
          </header>
        </div>
        <div className="container">
          <div className="box">
            <div className="search-bar">
              <form
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="text"
                  placeholder="Search here ..."
                  className="searchTerm"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />

                <button type="button" className="searchButton">
                  <BsSearch />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* <div class="container">
  <div class="box">
    <div class="search-bar">
      <form>
        <input type="text" placeholder="Search">
        <button><i class="fas fa-search"></i></button>
      </form>
    </div>
  </div>
</div> */}

        {token ? (
          <div className="dropdown-user">
            <span
              className="user-button"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2%",
                // width: "16%",
                fontSize: "1.1rem",
              }}
              onMouseEnter={handleClickUser}
              // onMouseLeave={handleClickUser}
            >
              {/* <img
              src="https://www.pngrepo.com/png/384670/512/account-avatar-profile-user.png"
              style={{ width: "10%", height: "10%" }}
            />{" "} */}
              <IoPersonSharp />
              <p>{firstName ? firstName : firstName2}</p>{" "}
              <p>{lastName ? lastName : lastName2}</p>
              <IoMdArrowDropdown />
            </span>
            {clickUser ? (
              <div
                className="dropdown-menu1-user "
                // onMouseEnter={handleClickUser}
                onMouseLeave={handleClickUser}
              >
                <span className="user-list">
                  <Link to="/profile" className="link-user">
                    Show your profile
                  </Link>
                </span>
                {role == 1 ? (
                  <span className="user-list">
                    <Link to="/panel" className="link-user">
                      Show admin panel
                    </Link>
                  </span>
                ) : null}
                {state.isLoggedIn ? (
                  <span className="user-list">
                    <Link
                      to="#"
                      className="link-user"
                      to="/login"
                      onClick={() => {
                        localStorage.clear();
                        role = null;
                      }}
                    >
                      Logout
                    </Link>
                  </span>
                ) : (
                  <span className="user-list">
                    <Link to="#" className="link-user">
                      Login
                    </Link>
                  </span>
                )}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      <Navigation />
    </div>
  );
};

export default Header;
