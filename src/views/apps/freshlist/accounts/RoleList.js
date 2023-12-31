import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import {
  Card,
  CardBody,
  Input,
  Label,
  Row,
  CustomInput,
  Col,
  Form,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  Badge,
  Spinner,
} from "reactstrap";
import UserContext from "../../../../context/Context";
import xmlJs from "xml-js";
import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Eye, Trash2, ChevronDown, Edit, Trash, Edit2 } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import { BsEye, BsTrash } from "react-icons/bs";
import {
  CreateAccountView,
  Get_RoleList,
  _Get,
} from "../../../../ApiEndPoint/ApiCalling";
import { FaPlus } from "react-icons/fa";
import { CheckPermission } from "../house/CheckPermission";
import SuperAdminUI from "../../../SuperAdminUi/SuperAdminUI";
import { Role_list_by_Master } from "../../../../ApiEndPoint/Api";

class RoleList extends React.Component {
  static contextType = UserContext;

  state = {
    rowData: [],
    InsiderPermissions: {},
    paginationPageSize: 20,
    Position: 0,
    MasterShow: false,
    MasterRoleList: false,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 150,
        filter: true,
      },
      {
        headerName: "Role Name",
        field: "roleName",
        filter: true,
        resizable: true,
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.roleName}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Role desc",
        field: "desc",
        filter: true,
        resizable: true,
        width: 230,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.desc}</span>
              </div>
            </div>
          );
        },
      },

      {
        headerName: "Actions",
        field: "sortorder",
        field: "transactions",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {/* {this.state.InsiderPermissions &&
                this.state.InsiderPermissions.View && (
                  <BsEye
                    className="mr-50"
                    size="25px"
                    color="green"
                    onClick={() =>
                      history.push(
                        `/app/freshlist/account/updateexistingrole/${params.data._id}`
                      )
                    }
                  />
                )} */}

              {this.state.InsiderPermissions &&
                this.state.InsiderPermissions.Edit && (
                  <Route
                    render={({ history }) => (
                      <span
                        style={{
                          border: "1px solid white",
                          padding: "10px",
                          borderRadius: "30px",
                          backgroundColor: "rgb(212, 111, 16)",
                          marginLeft: "3px",
                        }}>
                        <FaPencilAlt
                          className=""
                          size="20px"
                          color="white"
                          onClick={() =>
                            history.push({
                              pathname: `/app/freshlist/account/editRole/${params?.data?._id}`,
                              data: params,
                            })
                          }
                        />
                      </span>
                    )}
                  />
                )}
              {/* )} */}
              {/* {this.state.Deletepermisson && (
                <BsTrash
                  className="mr-50"
                  size="25px"
                  color="red"
                  onClick={() => {
                    this.runthisfunction(params.data.id);
                  }}
                />
              )} */}
            </div>
          );
        },
      },
    ],
  };

  async Apicalling(id, db, value) {
    this.setState({ Loading: true });
    if (value) {
      await _Get(Role_list_by_Master, id)
        .then((res) => {
          console.log(res?.Role);
          this.setState({ Loading: false });
          this.setState({ rowData: res?.Role });
        })
        .catch((err) => {
          this.setState({ Loading: false });
          this.setState({ rowData: [] });

          console.log(err);
        });
    } else {
      await Get_RoleList(id, db)
        .then((res) => {
          this.setState({ Loading: false });

          console.log(res?.Role);
          this.setState({ rowData: res?.Role });
        })
        .catch((err) => {
          this.setState({ Loading: false });
          this.setState({ rowData: [] });

          console.log(err);
        });
    }
  }
  async componentDidMount() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    this.setState({ Position: pageparmission?.rolename.rank });

    if (pageparmission?.rolename.rank === 0) {
      this.setState({ MasterShow: true });
      this.setState({ MasterRoleList: true });
    }
    let value = pageparmission?.rolename.rank === 0;
    const InsidePermissions = CheckPermission("Create User");
    console.log(InsidePermissions);
    this.setState({ InsiderPermissions: InsidePermissions });
    await this.Apicalling(pageparmission?._id, pageparmission?.database, value);
  }

  runthisfunction(id) {
    // console.log(id);
    let selectedData = this.gridApi.getSelectedRows();
    swal("Warning", "Sure You Want to Delete it", {
      buttons: {
        cancel: "cancel",
        catch: { text: "Delete ", value: "delete" },
      },
    }).then((value) => {
      switch (value) {
        case "delete":
          const formData = new FormData();
          formData.append("user_id", id);
          this.gridApi.updateRowData({ remove: selectedData });
          axiosConfig.post(`/userdelete`, formData).then((response) => {});
          break;
        default:
      }
    });
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };
  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  //   onChangeHandler = (event) => {
  //     this.setState({ selectedFile: event.target.files[0] });
  //     this.setState({ selectedName: event.target.files[0].name });
  //     console.log(event.target.files[0]);
  //   };
  //   onChangeHandler = (event) => {
  //     this.setState({ selectedFile: event.target.files });
  //     this.setState({ selectedName: event.target.files.name });
  //     console.log(event.target.files);
  //   };
  //   changeHandler1 = (e) => {
  //     this.setState({ status: e.target.value });
  //   };
  //   changeHandler = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  //   submitHandler = (e) => {
  //     e.preventDefault();
  //     const data = new FormData();
  //     data.append("banner_title", this.state.banner_title);
  //     data.append("bannertype", this.state.bannertype);
  //     data.append("status", this.state.status);
  //     for (const file of this.state.selectedFile) {
  //       if (this.state.selectedFile !== null) {
  //         data.append("banner_img", file, file.name);
  //       }
  //     }

  //     axiosConfig
  //       .post("/addbanner", data)
  //       .then((response) => {
  //         console.log(response);
  //         swal("Successful!", "You clicked the button!", "success");
  //         this.props.history.push("/app/freshlist/banner/bannerList");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  handleParentSubmit = (e) => {
    e.preventDefault();
    this.setState({ MasterRoleList: false });
    let SuperAdmin = JSON.parse(localStorage.getItem("SuperadminIdByMaster"));
    let id = SuperAdmin.split(" ")[0];
    let db = SuperAdmin.split(" ")[1];
    this.Apicalling(id, db, false);
  };
  handleDropdownChange = (selectedValue) => {
    localStorage.setItem("SuperadminIdByMaster", JSON.stringify(selectedValue));
  };
  render() {
    if (this.state.Loading) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20rem",
          }}>
          <Spinner
            style={{
              height: "4rem",
              width: "4rem",
            }}
            color="primary">
            Loading...
          </Spinner>
        </div>
      );
    }
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12">
          <Card>
            <Row className="mt-2 mx-2 mr-2">
              <Col lg="3" md="3" sm="6" xs="12">
                <h1 className="float-left" style={{ fontWeight: "600" }}>
                  Role List
                </h1>
              </Col>
              {this.state.MasterShow && (
                <Col>
                  <SuperAdminUI
                    onDropdownChange={this.handleDropdownChange}
                    onSubmit={this.handleParentSubmit}
                  />
                </Col>
              )}
              {this.state.InsiderPermissions &&
                this.state.InsiderPermissions?.Create && (
                  <Col>
                    <div className="d-flex justify-content-end">
                      <Route
                        render={({ history }) => (
                          <Button
                            style={{
                              cursor: "pointer",
                              backgroundColor: "#39cccc",
                              color: "white",
                              fontWeight: "600",
                            }}
                            className=" float-right mb-1"
                            color="#39cccc"
                            onClick={() =>
                              history.push("/app/freshlist/account/addRoleNew")
                            }>
                            <FaPlus size={15} /> Create Role
                          </Button>
                        )}
                      />
                    </div>
                  </Col>
                )}

              {this.state.InsiderPermissions &&
                this.state.InsiderPermissions?.Create && (
                  <>
                    {/* {this.state.Position == 1 && (
                      <Col lg="2" sm="2" md="2" ms="12">
                        <Route
                          render={({ history }) => (
                            <Button
                              style={{
                                cursor: "pointer",
                                backgroundColor: "#39cccc",
                                color: "white",
                                fontWeight: "600",
                              }}
                              className=" float-right"
                              color="#39cccc"
                              onClick={() =>
                                history.push(
                                  "/app/freshlist/account/CreateHeirarchy"
                                )
                              }>
                              <FaPlus size={15} /> Hierarchy
                            </Button>
                          )}
                        />
                      </Col>
                    )} */}
                  </>
                )}
            </Row>
            <CardBody style={{ marginTop: "-1.5rem" }}>
              {this.state.rowData === null ? null : (
                <div className="ag-theme-material w-100 my-1 ag-grid-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-1">
                      <UncontrolledDropdown className="p-1 ag-dropdown">
                        <DropdownToggle tag="div">
                          {this.gridApi
                            ? this.state.currenPageSize
                            : "" * this.state.getPageSize -
                              (this.state.getPageSize - 1)}{" "}
                          -{" "}
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}{" "}
                          of {this.state.rowData.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}>
                            20
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}>
                            50
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}>
                            100
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(134)}>
                            134
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    {/* <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="table-input mr-1">
                        <Input
                          placeholder="Hub Name"
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="table-input mr-1">
                        <Input
                          placeholder="Order Id"
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="table-input mr-1">
                        <Input
                          placeholder="Phone Number"
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="table-input mr-1">
                        <Input
                          placeholder="Enter Email"
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="export-btn">
                        <Button.Ripple
                          color="primary"
                          onClick={() => this.gridApi.exportDataAsCsv()}
                        >
                          Export as CSV
                        </Button.Ripple>
                      </div>
                    </div> */}
                  </div>
                  <ContextLayout.Consumer>
                    {(context) => (
                      <AgGridReact
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={false}
                        pagination={true}
                        paginationPageSize={this.state.paginationPageSize}
                        pivotPanelShow="always"
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default RoleList;
