import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/authSlice";

const Navbar = () => {
  const token = localStorage.getItem("user");
  const dispath = useDispatch();
  const navigation = useNavigate();
  const item = useSelector((state)=>state.cart)
  const handleLogout = () => {
    dispath(logout());
    navigation("/");
    window.location.reload();
  };

  return (
    <div className=" bg-light w-100 d-flex text-center text-center justify-content-between py-3 px-5 fs-5">
      <Link to="/" className="w-25 d-flex justify-content-start">
        <img
          height={"50px"}
          src="https://cdn.shopify.com/s/files/1/0567/2537/3083/files/VERTICAL_LOGO_47a9d297-1b4d-4322-a41f-e0a2955940e1_350x.png?v=1651790583"
          alt=""
        />
      </Link>
      <div
        className="d-flex text-center justify-content-evenly fs-6 mt-3"
        style={{ width: "500px" }}
      >
        <div className="dropdown">
          <Link to="#" className="dropdown-link nav-link">
            Shop
          </Link>
          <div className="dropdown-menu" style={{ right: "-850px" }}>
            <div className="main1">
              <div className="m1">
                <h5>Mens Tops</h5>
                <Link to="/" className="nav-link">
                  Rugby Shirts
                </Link>
                <Link to="/" className="nav-link">
                  Jackets
                </Link>
                <Link to="/" className="nav-link">
                  Vest
                </Link>
                <Link to="/" className="nav-link">
                  T-shirt & Polos
                </Link>
                <Link to="/" className="nav-link">
                  Long Sleeves
                </Link>
                <Link to="/" className="nav-link">
                  Base Layers
                </Link>
                <Link to="/" className="nav-link">
                  Hoodies & Sweatshirts
                </Link>
                <Link to="/" className="nav-link">
                  Shop All
                </Link>
              </div>
              <div className="m1">
                <h5>Mens Bottom</h5>
                <Link to="/" className="nav-link">
                  Shorts
                </Link>
                <Link to="/" className="nav-link">
                  Trackpants & Joggers
                </Link>
                <Link to="/" className="nav-link">
                  Base Layers
                </Link>
                <Link to="/" className="nav-link">
                  Shop All
                </Link>
              </div>
              <div className="m1">
                <h5>Womens</h5>
                <Link to="/" className="nav-link">
                  Hoodies & Sweatshirts
                </Link>
                <Link to="/" className="nav-link">
                  Shorts
                </Link>
                <Link to="/" className="nav-link">
                  Leggings
                </Link>
                <Link to="/" className="nav-link">
                  TrackPants
                </Link>
                <Link to="/" className="nav-link">
                  Shop All
                </Link>
              </div>
              <div className="m1">
                <h5>Equipment & Accessories</h5>
                <Link to="/" className="nav-link">
                  Balls
                </Link>
                <Link to="/" className="nav-link">
                  Socks
                </Link>
                <Link to="/" className="nav-link">
                  Water Bottles
                </Link>
                <Link to="/" className="nav-link">
                  Bags
                </Link>
                <Link to="/" className="nav-link">
                  Rugby Training
                </Link>
                <Link to="/" className="nav-link">
                  Shop All
                </Link>
              </div>
              <img
                src="https://cdn.shopify.com/s/files/1/0567/2537/3083/files/JMP_Exeter_Chiefs_v_Bath_Rugby_RS_045_1_2_ed350437-713c-4482-a70a-283d8b6ffdee_300x.jpg?v=1675341365"
                alt=""
                width={200}
                height={150}
              />
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="#" className="dropdown-link nav-link">
            Official Merchandise
          </Link>
          <div className="dropdown-menu" style={{ right: "-650px" }}>
            <div className="main1">
              <div className="m1">
                <h5>Official Kits</h5>
                <Link to="/" className="nav-link">
                  Leicester Tigers
                </Link>
                <Link to="/" className="nav-link">
                  Exeter Chiefs
                </Link>
                <Link to="/" className="nav-link">
                  PR7s
                </Link>
                <Link to="/" className="nav-link">
                  Shop All
                </Link>
              </div>
              <div className="m1">
                <img
                  src="https://cdn.shopify.com/s/files/1/0567/2537/3083/files/EXETER_CHIEFS_LOGO_copy_180x.png?v=1674737978"
                  alt=""
                  height={"150px"}
                  width={"150px"}
                />
              </div>
              <div className="m1">
                <img
                  src="https://cdn.shopify.com/s/files/1/0567/2537/3083/files/LEICESTER_TIGERS_LOGO_340d1ec1-136d-475f-aea9-cbe591367f97_180x.png?v=1674663077"
                  alt=""
                  height={"150px"}
                  width={"150px"}
                />
              </div>
              <div className="m1">
                <img
                  src="https://cdn.shopify.com/s/files/1/0567/2537/3083/files/PR7s_LOGO_180x.png?v=1674738220"
                  alt=""
                  height={"150px"}
                  width={"150px"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/" className="dropdown-link nav-link">
            Teamwear
          </Link>
          <div className="dropdown-menu " style={{ right: "-300px" }}>
            <div className="main1">
              <div className="m1">
                <img
                  src="https://cdn.shopify.com/s/files/1/0567/2537/3083/files/TEAMWEAR_-_KIT_DESIGNER_300x.png?v=1657817829"
                  alt=""
                />
                <h6
                  className="mt-4"
                  style={{ textAlign: "center", fontWeight: "0.5rem" }}
                >
                  Kit Designer
                </h6>
              </div>
              <div className="m1">
                <img
                  src="https://cdn.shopify.com/s/files/1/0567/2537/3083/files/TEAMWEAR---ABOUT_300x.jpg?v=1674824640"
                  alt=""
                />
                <h6
                  className="mt-4"
                  style={{ textAlign: "center", fontWeight: "0.5rem" }}
                >
                  Teamwear Brochures
                </h6>
              </div>
              <div className="m1">
                <img
                  src="https://cdn.shopify.com/s/files/1/0567/2537/3083/files/TEAMWEAR_-_CLUBSHOPS_300x.png?v=1657817829"
                  alt=""
                />
                <p
                  className="mt-4"
                  style={{ textAlign: "center", fontWeight: "0.5rem" }}
                >
                  Club Shops
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/" className="dropdown-link nav-link">
            Discover
          </Link>
          <div
            className="dropdown-menu"
            style={{ right: "-350px", width: "1000px", height: "500px" }}
          >
            <div className="main1">
              <div className="m1">
                <h5>More</h5>
                <Link to="/" className="nav-link">
                  About US
                </Link>
                <Link to="/" className="nav-link">
                  The SAMURAI Edit
                </Link>
                <Link to="/" className="nav-link">
                  Teamwear
                </Link>
                <Link to="/" className="nav-link">
                  Customer Service
                </Link>
              </div>
              <div className="m1">
                <h5>Partnerships</h5>
                <Link to="/" className="nav-link">
                  Exeter Chiefs
                </Link>
                <Link to="/" className="nav-link">
                  Leicester Tigers
                </Link>
                <Link to="/" className="nav-link">
                  Hong Kong Football Club
                </Link>
                <Link to="/" className="nav-link">
                  Premier Rugby Sevens (PR7s)
                </Link>
                <Link to="/" className="nav-link">
                  Dubai 7s
                </Link>
                <Link to="/" className="nav-link">
                  All Partnerships
                </Link>
              </div>
              <div className="m1">
                <img
                  src="https://cdn.shopify.com/s/files/1/0567/2537/3083/files/SQUARE_02_1_300x.jpg?v=1675958016"
                  alt=""
                  width={"350px"}
                  height={"350px"}
                />
                <p
                  style={{
                    fontSize: "0.8rem",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  Leicester Tigers Partnership Extension
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link to="/" className="nav-link">
          Outlet
        </Link>
      </div>
      <div className="text-center d-flex justify-content-evenly w-25 my-3 px-5">
        <Link to={token ? "/account" : "/account/login"} className="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <Link to="/cart" className="nav-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-bag"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg><span>{item.length}</span></Link>
        {token && (
          <button
            type="button"
            class="btn btn-light"
            style={{ width: "100px" }}
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
