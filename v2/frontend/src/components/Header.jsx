import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Tell webpack this JS file uses this image

function Header({ isLoggedIn }) {
  const logout = () => {
    // const url =
    //   process.env.APP_ENV === "prod" ? process.env.APP_URL : "" + "/v1/logout";
    // fetch(url, {
    //   method: "GET"
    // })
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(response => {
    //     //console.log("Response:", JSON.stringify(response));
    //     window.location.href =
    //       process.env.APP_ENV === "prod" ? process.env.APP_URL : "/";
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  return (
    <header className="sticky row">
      <div className="col-sm-6 logo">The One API</div>
      <div style={{ textAlign: "right" }} class="col-sm-6">
        <label for="drawer-control" class="drawer-toggle persistent" />
      </div>

      <input type="checkbox" id="drawer-control" class="drawer persistent" />
      <div width="100%" id="drawer">
        <label for="drawer-control" class="drawer-close" />
        <navigation>
          <Link to="/">home</Link>
          <br />
          <Link to="/about">about</Link>
          <br />
          <Link to="/documentation">documentation</Link> <br />
          {isLoggedIn && (
            <>
              <a href="#">
                <strong>welcome!</strong> <i class="fas fa-caret-down" />
              </a>
              <br />
              <Link to href="/account">
                account
              </Link>
              <br />
              <a onClick={logout()} href="#">
                logout
              </a>{" "}
              <br />
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link to="/login">login</Link>
              <br />
              <Link to="/sign-up">sign up</Link>
            </>
          )}
        </navigation>
      </div>
    </header>

    /* <nav className="nav bar thick dark">
          <ul>
            <li className="collapse">
              <a
                alt="This is the navigation"
                aria-label="This is the navigation"
                href="#"
                className="menu"
              >
                <i className="fa fa-bars" />
              </a>
            </li>

            <li className="brand">
              <a href="/">
                <i className="fa fa-ring" /> The
                <strong>The Lord of the Rings</strong> API
              </a>
            </li>

           
          </ul>
        </nav> */
  );
}

export default Header;