import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ModalHeader,
  Modal,
  ModalBody,
  Button,
  Col,
  Row,
} from "reactstrap";
import classnames from "classnames";
import { ChevronDown, ChevronRight, Edit, Trash2 } from "react-feather";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { history } from "../../../../history";
import navigationConfig from "../../../../configs/horizontalMenuConfig";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import {
  BsFillArrowDownSquareFill,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";
import { IoMdRemoveCircleOutline } from "react-icons/io";
let allList = [];
const SelectedColums = [];
class HorizontalSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeParents: [],
      rowData: [],
      setMySelectedarr: [],
      isOpen: false,
      Arrindex: "",
      openDropdown: [],
      AllAvailableCol: [],
      columnDefs: [],
      AllcolumnDefs: [],
      SelectedcolumnDefs: [],
      SelectedCols: [],
      dropdownHeight: "auto",
      itemHover: null,
      parentHover: null,
      activeChildUrl: null,
    };
    this.activeFlag = false;
    this.parentItems = [];
    this.activeParentItems = [];

    this.redirectUnauthorized = () => {
      history.push("misc/not-authorized");
    };
  }
  HeadingRightShift = () => {
    const updatedSelectedColumnDefs = [
      ...new Set([
        ...this.state.SelectedcolumnDefs?.map((item) => JSON.stringify(item)),
        ...SelectedColums.map((item) => JSON.stringify(item)),
      ]),
    ].map((item) => JSON.parse(item));
    this.setState({
      SelectedcolumnDefs: [...new Set(updatedSelectedColumnDefs)], // Update the state with the combined array
    });
    console.log([...new Set(updatedSelectedColumnDefs)]);
  };
  handleLeftShift = () => {
    let SelectedCols = this.state.SelectedcolumnDefs.slice();
    let delindex = this.state.Arrindex; /* Your delete index here */

    if (SelectedCols && delindex >= 0) {
      const splicedElement = SelectedCols.splice(delindex, 1); // Remove the element

      this.setState({
        SelectedcolumnDefs: SelectedCols, // Update the state with the modified array
      });
    }
  };
  LookupviewStart = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  handleTogglemodal = () => {
    this.LookupviewStart();
  };
  openDropdown = (id) => {
    let arr = this.state.openDropdown;
    if (!arr.includes(id)) arr.push(id);
    return this.setState({
      openDropdown: arr,
    });
  };

  closeDropdown = (id) => {
    let arr = this.state.openDropdown;
    arr.splice(arr.indexOf(id), 1);
    return this.setState({
      openDropdown: arr,
    });
  };

  handleItemHover = (id) => {
    this.setState({
      itemHover: id,
    });
  };
  handleChangeHeader = (e, value, index) => {
    let check = e.target.checked;
    if (check) {
      SelectedColums?.push(value);
    } else {
      const delindex = SelectedColums?.findIndex(
        (ele) => ele?.title === value?.title
      );

      SelectedColums?.splice(delindex, 1);
    }
  };
  handleParentHover = (id) => {
    this.setState({
      parentHover: id,
    });
  };

  componentDidMount() {
    this.handleActiveParent(this.activeParentItems);
  }

  componentDidUpdate(prevProps) {
    if (this.props.activePath !== prevProps.activePath) {
      this.setState({ openDropdown: [], parentHover: null });
      this.handleActiveParent(this.activeParentItems);
    }
  }

  updateParentItems = (id, mainParent = false) => {
    if (mainParent === true) {
      this.parentItems = [];
    }
    if (!this.parentItems.includes(id)) {
      this.parentItems.push(id);
    }
    if (this.activeFlag === true) {
      this.activeParentItems = this.parentItems;
      this.parentItems = [];
      this.activeFlag = false;
    }
  };

  handleActiveParent = (arr) => {
    this.setState({
      activeParents: arr,
    });
    this.activeFlag = false;
  };
  shiftElementUp = () => {
    let currentIndex = this.state.Arrindex;
    if (currentIndex > 0) {
      const myArrayCopy = [...this.state.SelectedcolumnDefs];
      const elementToMove = myArrayCopy.splice(currentIndex, 1)[0];
      this.setState({ Arrindex: currentIndex - 1 });
      myArrayCopy.splice(currentIndex - 1, 0, elementToMove);
      this.setState({ SelectedcolumnDefs: myArrayCopy });
    }
  };

  shiftElementDown = () => {
    let currentIndex = this.state.Arrindex;
    if (currentIndex < this.state.SelectedcolumnDefs.length - 1) {
      const myArrayCopy = [...this.state.SelectedcolumnDefs];
      const elementToMove = myArrayCopy.splice(currentIndex, 1)[0];
      this.setState({ Arrindex: currentIndex + 1 });
      myArrayCopy.splice(currentIndex + 1, 0, elementToMove);
      this.setState({ SelectedcolumnDefs: myArrayCopy });
    }
  };
  renderSubMenu = (submenu, id) => {
    return (
      <DropdownMenu
        tag="ul"
        className="mt-50"
        onMouseEnter={(e) => e.preventDefault()}
        // onMouseEnter={(e) => e.preventDefault()}
        modifiers={{
          setMaxHeight: {
            enabled: true,
            fn: (data) => {
              let pageHeight = window.innerHeight,
                ddTop = data.instance.reference.getBoundingClientRect().top,
                ddHeight = data.popper.height,
                maxHeight,
                stylesObj;

              if (pageHeight - ddTop - ddHeight - 28 < 1) {
                maxHeight = pageHeight - ddTop - 25;
                stylesObj = {
                  maxHeight: maxHeight,
                  overflowY: "auto",
                };
              }

              return {
                ...data,

                styles: {
                  ...stylesObj,
                },
              };
            },
          },
        }}
      >
        {submenu.map((child) => {
          const CustomAnchorTag = child.type === "external-link" ? `a` : Link;
          if (child.navLink && child.navLink === this.props.activePath) {
            this.activeFlag = true;
            this.updateParentItems(id);
          }

          let renderChildItems = (
            <React.Fragment key={child.id}>
              <li
                className={classnames({
                  active: this.state.activeParents.includes(child.id),
                })}
              >
                <DropdownItem
                  className={classnames("w-100", {
                    hover: this.state.itemHover === child.id,
                    "has-sub": child.children,
                    active:
                      (child.parentOf &&
                        child.parentOf.includes(this.props.activePath)) ||
                      (child.navLink &&
                        child.navLink === this.props.activePath),
                    "has-active-child": this.state.openDropdown.includes(
                      child.id
                    ),
                    disabled: child.disabled,
                  })}
                  tag={child.navLink ? CustomAnchorTag : "div"}
                  to={
                    child.filterBase
                      ? child.filterBase
                      : child.navLink && child.type === "item"
                      ? child.navLink
                      : "#"
                  }
                  href={
                    child.type === "external-link" ? child.navLink : undefined
                  }
                  target={child.newTab ? "_blank" : undefined}
                  onClick={() => this.handleItemHover(child.id)}
                  // onMouseEnter={() => this.handleItemHover(child.id)}
                  onMouseLeave={() => this.handleItemHover(null)}
                >
                  {child.children ? (
                    <Dropdown
                      className={classnames("sub-menu w-100", {})}
                      isOpen={this.state.openDropdown.includes(child.id)}
                      direction={this.state.openLeft ? "left" : "right"}
                      toggle={() => true}
                      onClick={() => this.openDropdown(child.id)}
                      // onMouseEnter={() => this.openDropdown(child.id)}
                      onMouseLeave={() => this.closeDropdown(child.id)}
                    >
                      <DropdownToggle
                        className="d-flex justify-content-between align-items-center item-content"
                        tag={"div"}
                        onClick={() => this.closeDropdown(child.id)}
                      >
                        <div className="dropdown-toggle-sub text-truncate">
                          <span className="menu-icon align-bottom mr-1">
                            {child.icon}
                          </span>
                          <FormattedMessage
                            className="menu-title align-middle"
                            id={child.title}
                          />
                        </div>
                        <ChevronRight
                          className="has-sub-arrow align-middle ml-50"
                          size={15}
                        />
                      </DropdownToggle>
                      {child.children
                        ? this.renderSubMenu(child.children, child.id)
                        : null}
                    </Dropdown>
                  ) : (
                    <div className="item-content">
                      <span className="menu-icon align-top mr-1">
                        {child.icon}
                      </span>
                      <span className="menu-title align-middle">
                        <FormattedMessage id={child.title} />
                      </span>
                    </div>
                  )}
                </DropdownItem>
              </li>
            </React.Fragment>
          );

          if (
            child.type === "external-link" ||
            (child.type === "item" &&
              child.permissions &&
              child.permissions.includes(this.props.currentUser)) ||
            child.type === "dropdown" ||
            child.permissions === undefined
          ) {
            return renderChildItems;
          } else if (
            child.navLink === this.props.activePath &&
            !child.permissions.includes(this.props.currentUser)
          ) {
            return this.redirectUnauthorized();
          } else {
            return null;
          }
        })}
      </DropdownMenu>
    );
  };

  componentDidMount() {
    let MyTotalList = navigationConfig?.map((ele, i) => {
      if (!!ele?.children) {
        allList.push(ele?.children);
      } else if (!!ele?.children?.children) {
      } else {
      }
    });
    console.log(allList.flat());
    let myallList = allList?.flat();
    this.setState({ AllAvailableCol: myallList });
  }

  renderDropdown = (arr) => {
    // console.log(this.state.SelectedcolumnDefs);
    let myownlink = this.state.SelectedcolumnDefs;
    return myownlink?.map((ele, i) => {
      return (
        <>
          <Route
            render={({ history }) => (
              <Button
                className="mr-2"
                size="25px"
                color="red"
                onClick={() => {
                  history.push(ele?.navLink);
                }}
              >
                {ele?.title}
              </Button>
            )}
          />
        </>
      );
    });
    // return arr?.map((item) => {
    //   if (
    //     item.type === "item" &&
    //     item.navLink &&
    //     item.navLink === this.props.activePath
    //   ) {
    //     this.activeFlag = true;
    //     this.updateParentItems(item.id, true);
    //   }
    //   const CustomAnchorTag = item.type === "external-link" ? `a` : Link;
    //   return (
    //     <li
    //       className={classnames("nav-item", {
    //         active: this.state.activeParents.includes(item.id),
    //         hover: this.state.parentHover === item.id,
    //       })}
    //       key={item.id}
    //       ref={(el) => (this.menuDrodpown = el)}
    //     >
    //       <div
    //         className={classnames("nav-item-wrapper cursor-pointer", {
    //           "single-item": item.type === "item",
    //         })}
    //         onClick={() => {
    //           this.openDropdown(item.id);
    //           this.handleParentHover(item.id);
    //         }}
    //         // onMouseEnter={() => {
    //         //   this.openDropdown(item.id);
    //         //   this.handleParentHover(item.id);
    //         // }}
    //         onMouseLeave={() => {
    //           this.closeDropdown(item.id);
    //           this.handleParentHover(null);
    //         }}
    //       >
    //         {item.children ? (
    //           <Dropdown
    //             isOpen={this.state.openDropdown.includes(item.id)}
    //             className="nav-link"
    //             toggle={() => this.openDropdown(item.id)}
    //           >
    //             <DropdownToggle className="d-flex align-items-center" tag="div">
    //               <div className="dropdown-text">
    //                 <span className="menu-icon align-middle mr-75">
    //                   {item.icon}
    //                 </span>
    //                 <span className="menu-title align-middle">
    //                   <FormattedMessage
    //                     className="menu-title align-middle"
    //                     id={item.title}
    //                   />
    //                 </span>
    //               </div>
    //               <ChevronDown className="ml-50 align-bottom" size={15} />
    //             </DropdownToggle>

    //             {this.updateParentItems(item.id, true)}
    //             {item.children
    //               ? this.renderSubMenu(item.children, item.id)
    //               : null}
    //           </Dropdown>
    //         ) : (
    //           <CustomAnchorTag
    //             className={classnames({
    //               "nav-link": item.type === "item",
    //               hover: this.state.parentHover === item.id,
    //             })}
    //             to={
    //               item.filterBase
    //                 ? item.filterBase
    //                 : item.navLink && item.type === "item"
    //                 ? item.navLink
    //                 : "#"
    //             }
    //             href={item.type === "external-link" ? item.navLink : undefined}
    //             target={item.newTab ? "_blank" : undefined}
    //           >
    //             <span className="menu-icon align-middle mr-75">
    //               {item.icon}
    //             </span>
    //             <span className="menu-title align-middle">
    //               <FormattedMessage
    //                 className="menu-title align-middle"
    //                 id={item.title}
    //               />
    //             </span>
    //           </CustomAnchorTag>
    //         )}
    //       </div>
    //     </li>
    //   );
    // });
  };

  render() {
    const {
      rowData,
      columnDefs,
      defaultColDef,
      SelectedcolumnDefs,
      AllAvailableCol,
      isOpen,
      SelectedCols,
      AllcolumnDefs,
    } = this.state;
    return (
      <div className="horizontal-menu-wrapper">
        <div
          className={classnames(
            "header-navbar navbar-expand-sm navbar navbar-horizontal navbar-shadow",
            {
              "navbar-static": this.props.navbarType === "static",
              "fixed-top": this.props.navbarType === "sticky",
              "floating-nav":
                this.props.navbarType === "floating" ||
                !["static", "sticky", "floating"].includes(
                  this.props.navbarType
                ),
            }
          )}
        >
          <div className="navbar-container main-menu-content">
            {/* <ul className="nav navbar-nav" id="main-menu-navigation"> */}
            {this.renderDropdown(navigationConfig)}
            {/* </ul> */}
          </div>
          <span>
            <Edit
              onClick={this.handleTogglemodal}
              style={{ cursor: "pointer" }}
              color="red"
              className="mr-2 "
            />
          </span>
          <Modal
            isOpen={this.state.modal}
            toggle={this.LookupviewStart}
            className={this.props.className}
            style={{ maxWidth: "1050px" }}
          >
            <ModalHeader toggle={this.LookupviewStart}>
              Change Fileds
            </ModalHeader>
            <ModalBody className="modalbodyhead">
              <Row>
                <Col lg="4" md="4" sm="12" xl="4" xs="12">
                  <h4>Avilable Columns</h4>
                  <div className="mainshffling">
                    <div class="ex1">
                      {AllAvailableCol &&
                        AllAvailableCol?.map((ele, i) => {
                          return (
                            <>
                              <div
                                onClick={(e) =>
                                  this.handleChangeHeader(e, ele, i)
                                }
                                key={i}
                                className="mycustomtag mt-1"
                              >
                                <span className="mt-1">
                                  <h5
                                    style={{ cursor: "pointer" }}
                                    className="allfields"
                                  >
                                    <input
                                      type="checkbox"
                                      // checked={check && check}
                                      className="mx-1"
                                    />

                                    {ele?.title}
                                  </h5>
                                </span>
                              </div>
                            </>
                          );
                        })}
                    </div>
                  </div>
                </Col>
                <Col
                  lg="2"
                  md="2"
                  sm="12"
                  xl="2"
                  xs="12"
                  className="colarrowbtn"
                >
                  <div className="mainarrowbtn">
                    <div style={{ cursor: "pointer" }}>
                      <FaArrowAltCircleRight
                        onClick={this.HeadingRightShift}
                        className="arrowassign"
                        size="30px"
                      />
                    </div>
                    <div style={{ cursor: "pointer" }} className="my-2">
                      <FaArrowAltCircleLeft
                        onClick={this.handleLeftShift}
                        className="arrowassign"
                        size="30px"
                      />
                    </div>
                  </div>
                </Col>
                <Col lg="6" md="6" sm="12" xl="6" xs="12">
                  <Row>
                    <Col lg="8" md="8" sm="12" xs="12">
                      <h4>Visible Columns</h4>
                      <div className="mainshffling">
                        <div class="ex1">
                          {SelectedcolumnDefs &&
                            SelectedcolumnDefs?.map((ele, i) => {
                              return (
                                <>
                                  <div key={i} className="mycustomtag mt-1">
                                    <span className="mt-1">
                                      <h5
                                        onClick={() =>
                                          this.setState({ Arrindex: i })
                                        }
                                        style={{
                                          cursor: "pointer",
                                          backgroundColor: `${
                                            this.state.Arrindex === i
                                              ? "#1877f2"
                                              : ""
                                          }`,
                                        }}
                                        className="allfields"
                                      >
                                        <IoMdRemoveCircleOutline
                                          onClick={() => {
                                            const SelectedCols =
                                              this.state.SelectedcolumnDefs.slice();
                                            const delindex =
                                              SelectedCols.findIndex(
                                                (element) =>
                                                  element?.title == ele?.title
                                              );

                                            if (SelectedCols && delindex >= 0) {
                                              const splicedElement =
                                                SelectedCols.splice(
                                                  delindex,
                                                  1
                                                ); // Remove the element
                                              // splicedElement contains the removed element, if needed

                                              this.setState({
                                                SelectedcolumnDefs:
                                                  SelectedCols, // Update the state with the modified array
                                              });
                                            }
                                            // const delindex =
                                            //   SelectedCols.findIndex(
                                            //     (element) =>
                                            //       element?.headerName ==
                                            //       ele?.headerName
                                            //   );

                                            // SelectedCols?.splice(delindex, 1);
                                            // this.setState({
                                            //   SelectedcolumnDefs: SelectedCols,
                                            // });
                                          }}
                                          style={{ cursor: "pointer" }}
                                          size="25px"
                                          color="red"
                                          className="mr-1"
                                        />

                                        {ele?.title}
                                      </h5>
                                    </span>
                                  </div>
                                </>
                              );
                            })}
                        </div>
                      </div>
                    </Col>
                    <Col lg="4" md="4" sm="12" xs="12">
                      <div className="updownbtn justify-content-center">
                        <div>
                          <BsFillArrowUpSquareFill
                            className="arrowassign mb-1"
                            size="30px"
                            onClick={this.shiftElementUp}
                          />
                        </div>
                        <div>
                          <BsFillArrowDownSquareFill
                            onClick={this.shiftElementDown}
                            className="arrowassign"
                            size="30px"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex justify-content-center">
                    <Button
                    //  onClick={this.HandleSetVisibleField} color="primary"
                    >
                      Submit
                    </Button>
                  </div>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.login.userRole,
  };
};
export default connect(mapStateToProps)(HorizontalSidebar);
