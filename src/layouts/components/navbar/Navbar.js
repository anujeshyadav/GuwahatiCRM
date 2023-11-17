import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  UncontrolledDropdown,
} from "reactstrap";
import { connect } from "react-redux";
import classnames from "classnames";
import { useAuth0 } from "../../../authServices/auth0/auth0Service";
import {
  logoutWithJWT,
  logoutWithFirebase,
} from "../../../redux/actions/auth/loginActions";
import NavbarBookmarks from "./NavbarBookmarks";
import NavbarUser from "./NavbarUser";
import userImg from "../../../assets/img/portrait/small/avatar-s-11.jpg";
import CustomNavbar from "../reactstrap/navbar/BasicNavbar";
import logoimg from "../../../assets/img/logo/logomain.png";
import { Box, Circle, DollarSign, ShoppingCart, Users } from "react-feather";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom";

import HorizontalMenu from "./Myhorizontalmenu";
const PhoneNo = (props) => {
  console.log(props);
  let phone_no = "";
  if (props.userdata !== undefined) {
    phone_no = props.userdata.number;
  } else if (props.user.login.values !== undefined) {
    phone_no = props.user.login.values.number;
    if (
      props.user.login.values.loggedInWith !== undefined &&
      props.user.login.values.loggedInWith === "jwt"
    ) {
      phone_no = props.user.login.values.loggedInUser.number;
    }
  } else {
    phone_no = "9893245678";
  }

  return phone_no;
};
const ThemeNavbar = (props) => {
  const { user } = useAuth0();
  const colorsArr = ["primary", "danger", "success", "info", "warning", "dark"];
  const navbarTypes = ["floating", "static", "sticky", "hidden"];
  return (
    <React.Fragment>
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <Navbar
        className={classnames(
          "header-navbar navbar-expand-lg navbar navbar-with-menu navbar-shadow",
          {
            "navbar-light":
              props.navbarColor === "default" ||
              !colorsArr.includes(props.navbarColor),
            "navbar-dark": colorsArr.includes(props.navbarColor),
            "bg-primary":
              props.navbarColor === "primary" && props.navbarType !== "static",
            "bg-danger":
              props.navbarColor === "danger" && props.navbarType !== "static",
            "bg-success":
              props.navbarColor === "success" && props.navbarType !== "static",
            "bg-info":
              props.navbarColor === "info" && props.navbarType !== "static",
            "bg-warning":
              props.navbarColor === "warning" && props.navbarType !== "static",
            "bg-dark":
              props.navbarColor === "dark" && props.navbarType !== "static",
            "d-none": props.navbarType === "hidden" && !props.horizontal,
            "floating-nav":
              (props.navbarType === "floating" && !props.horizontal) ||
              (!navbarTypes.includes(props.navbarType) && !props.horizontal),
            "navbar-static-top":
              props.navbarType === "static" && !props.horizontal,
            "fixed-top": props.navbarType === "sticky" || props.horizontal,
            scrolling: props.horizontal && props.scrolling,
          }
        )}
      >
        <div className="navbar-wrapper">
          {/* <HorizontalMenu /> */}

          <div className="navbar-container content">
            <div
              className="navbar-collapse d-flex justify-content-between align-items-center"
              id="navbar-mobile"
            >
              {" "}
              <Route
                render={({ history }) => (
                  <strong
                    title="Click to Go Dashboard"
                    style={{ fontWeight: "800", cursor: "pointer" }}
                    onClick={() => history.push("/dashboard")}
                  >
                    AJ GROUP
                  </strong>
                )}
              />
              <span className="d-flex">
                {/* <img src={logoimg} alt="" width={80} /> */}
              </span>{" "}
              <div>
                {/* <Nav>
                  <NavbarBrand>
                    <img src={logoimg} alt="" width={120} />
                  </NavbarBrand>
                  <NavItem>
                    <NavLink>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          nav
                          caret
                          style={{ paddingTop: "0px", color: "#000" }}
                        >
                          <Users size={14} style={{ marginRight: "15px" }} />
                          Users
                          <FaAngleDown
                            size={14}
                            style={{ marginLeft: "2px" }}
                          />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Create User
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Roles and Persmissions
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Create Customer
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          nav
                          caret
                          style={{ paddingTop: "0px", color: "#000" }}
                        >
                          <ShoppingCart
                            size={14}
                            style={{ marginRight: "15px" }}
                          />
                          Sales
                          <FaAngleDown
                            size={14}
                            style={{ marginLeft: "2px" }}
                          />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Create Order
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Place Order
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Pending Order
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Complete Order
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Create Invoice
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            dispatch details
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Credit Note
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          nav
                          caret
                          style={{ paddingTop: "0px", color: "#000" }}
                        >
                          <Box size={14} style={{ marginRight: "15px" }} />
                          Purchase
                          <FaAngleDown
                            size={14}
                            style={{ marginLeft: "2px" }}
                          />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Purchase Order
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Purchase Invoice
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Purchase Damage
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Debit Notes
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Multivendor
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Purchase Return
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          nav
                          caret
                          style={{ paddingTop: "0px", color: "#000" }}
                        >
                          <DollarSign
                            size={14}
                            style={{ marginRight: "15px" }}
                          />
                          Transaction
                          <FaAngleDown
                            size={14}
                            style={{ marginLeft: "2px" }}
                          />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Receipt{" "}
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Payment{" "}
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Cashbook
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          nav
                          caret
                          style={{ paddingTop: "0px", color: "#000" }}
                        >
                          <DollarSign
                            size={14}
                            style={{ marginRight: "15px" }}
                          />
                          Productions
                          <FaAngleDown
                            size={14}
                            style={{ marginLeft: "2px" }}
                          />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            StockTransfer
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Payment
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Circle size={10} style={{ marginRight: "10px" }} />
                            Cashbook
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </NavLink>
                  </NavItem>
                </Nav> */}
              </div>
              <div className="bookmark-wrapper">
                <NavbarBookmarks
                  sidebarVisibility={props.sidebarVisibility}
                  handleAppOverlay={props.handleAppOverlay}
                />
              </div>
              {props.horizontal ? (
                <div className="logo d-flex align-items-center">
                  <div className="brand-logo mr-50"></div>
                  <HorizontalMenu />
                </div>
              ) : null}
              {/* working navbar */}
              <>
                {/* <h2>dfdssf</h2> */}
                <NavbarUser
                  handleAppOverlay={props.handleAppOverlay}
                  changeCurrentLang={props.changeCurrentLang}
                  phoneNo={<PhoneNo userdata={user} {...props} />}
                  userImg={
                    props.user.login.values !== undefined &&
                    props.user.login.values.loggedInWith !== "jwt" &&
                    props.user.login.values.photoUrl
                      ? props.user.login.values.photoUrl
                      : user !== undefined && user.picture
                      ? user.picture
                      : userImg
                  }
                  loggedInWith={
                    props.user !== undefined &&
                    props.user.login.values !== undefined
                      ? props.user.login.values.loggedInWith
                      : null
                  }
                  logoutWithJWT={props.logoutWithJWT}
                  logoutWithFirebase={props.logoutWithFirebase}
                />
              </>
            </div>
            {/* <div>
           
            </div> */}
          </div>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapStateToProps, {
  logoutWithJWT,
  logoutWithFirebase,
  useAuth0,
})(ThemeNavbar);

// import React from "react";
// import { Navbar } from "reactstrap";
// import { connect } from "react-redux";
// import classnames from "classnames";
// import { useAuth0 } from "../../../authServices/auth0/auth0Service";
// import {
//   logoutWithJWT,
//   logoutWithFirebase,
// } from "../../../redux/actions/auth/loginActions";
// import NavbarBookmarks from "./NavbarBookmarks";
// import NavbarUser from "./NavbarUser";
// import userImg from "../../../assets/img/portrait/small/avatar-s-11.jpg";

// const PhoneNo = (props) => {
//   console.log(props);
//   let phone_no = "";
//   if (props.userdata !== undefined) {
//     phone_no = props.userdata.number;
//   } else if (props.user.login.values !== undefined) {
//     phone_no = props.user.login.values.number;
//     if (
//       props.user.login.values.loggedInWith !== undefined &&
//       props.user.login.values.loggedInWith === "jwt"
//     ) {
//       phone_no = props.user.login.values.loggedInUser.number;
//     }
//   } else {
//     phone_no = "9893245678";
//   }

//   return phone_no;
// };
// const ThemeNavbar = (props) => {
//   const { user } = useAuth0();
//   const colorsArr = ["primary", "danger", "success", "info", "warning", "dark"];
//   const navbarTypes = ["floating", "static", "sticky", "hidden"];
//   return (
//     <React.Fragment>
//       <div className="content-overlay" />
//       <div className="header-navbar-shadow" />
//       <Navbar
//         className={classnames(
//           "header-navbar navbar-expand-lg navbar navbar-with-menu navbar-shadow",
//           {
//             "navbar-light":
//               props.navbarColor === "default" ||
//               !colorsArr.includes(props.navbarColor),
//             "navbar-dark": colorsArr.includes(props.navbarColor),
//             "bg-primary":
//               props.navbarColor === "primary" && props.navbarType !== "static",
//             "bg-danger":
//               props.navbarColor === "danger" && props.navbarType !== "static",
//             "bg-success":
//               props.navbarColor === "success" && props.navbarType !== "static",
//             "bg-info":
//               props.navbarColor === "info" && props.navbarType !== "static",
//             "bg-warning":
//               props.navbarColor === "warning" && props.navbarType !== "static",
//             "bg-dark":
//               props.navbarColor === "dark" && props.navbarType !== "static",
//             "d-none": props.navbarType === "hidden" && !props.horizontal,
//             "floating-nav":
//               (props.navbarType === "floating" && !props.horizontal) ||
//               (!navbarTypes.includes(props.navbarType) && !props.horizontal),
//             "navbar-static-top":
//               props.navbarType === "static" && !props.horizontal,
//             "fixed-top": props.navbarType === "sticky" || props.horizontal,
//             scrolling: props.horizontal && props.scrolling,
//           }
//         )}
//       >
//         <div className="navbar-wrapper">
//           <div className="navbar-container content">
//             <div
//               className="navbar-collapse d-flex justify-content-between align-items-center"
//               id="navbar-mobile"
//             >
//               <div className="bookmark-wrapper">
//                 <NavbarBookmarks
//                   sidebarVisibility={props.sidebarVisibility}
//                   handleAppOverlay={props.handleAppOverlay}
//                 />
//               </div>
//               {props.horizontal ? (
//                 <div className="logo d-flex align-items-center">
//                   <div className="brand-logo mr-50"></div>
//                   <h2 className="text-primary brand-text mb-0">Vuexy</h2>
//                 </div>
//               ) : null}
//               <NavbarUser
//                 handleAppOverlay={props.handleAppOverlay}
//                 changeCurrentLang={props.changeCurrentLang}
//                 phoneNo={<PhoneNo userdata={user} {...props} />}
//                 userImg={
//                   props.user.login.values !== undefined &&
//                   props.user.login.values.loggedInWith !== "jwt" &&
//                   props.user.login.values.photoUrl
//                     ? props.user.login.values.photoUrl
//                     : user !== undefined && user.picture
//                     ? user.picture
//                     : userImg
//                 }
//                 loggedInWith={
//                   props.user !== undefined &&
//                   props.user.login.values !== undefined
//                     ? props.user.login.values.loggedInWith
//                     : null
//                 }
//                 logoutWithJWT={props.logoutWithJWT}
//                 logoutWithFirebase={props.logoutWithFirebase}
//               />
//             </div>
//           </div>
//         </div>
//       </Navbar>
//     </React.Fragment>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     user: state.auth,
//   };
// };

// export default connect(mapStateToProps, {
//   logoutWithJWT,
//   logoutWithFirebase,
//   useAuth0,
// })(ThemeNavbar);
