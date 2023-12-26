import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Label,
  CustomInput,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import axios from "axios";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import {
  AllCategoryList,
  Delete_SubCategory,
} from "../../../../ApiEndPoint/ApiCalling";
import swal from "sweetalert";

class SubCategoryList extends React.Component {
  state = {
    rowData: [],
    CatList: [],
    paginationPageSize: 20,
    currenPageSize: "",
    category: "NA",
    Show: false,
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
      },
      {
        headerName: "Image",
        field: "image",
        filter: true,
        width: 100,
        cellRendererFramework: params => {
          return (
            <>
              {params.data?.image && (
                <img
                  className="rounded-circle mr-50"
                  src={`http://64.227.162.41:5000/Images/${params.data?.image}`}
                  alt="user avatar"
                  height="40"
                  width="40"
                />
              )}
            </>
          );
        },
      },
      {
        headerName: "Name",
        field: "name",
        filter: true,
        width: 200,
        cellRendererFramework: params => {
          return (
            <div className="d-flex align-items-center">
              <span>{params.data?.name}</span>
            </div>
          );
        },
      },

      {
        headerName: "description",
        field: "description",
        filter: true,
        width: 200,
        cellRendererFramework: params => {
          return (
            <div className="d-flex align-items-center">
              <span>{params.data?.description}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "Type",
      //   field: "type",
      //   filter: true,
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center">
      //         <span>{params.data?.type}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "Feature",
      //   field: "feature",
      //   filter: true,
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center">
      //         <span>{params.data?.feature}</span>
      //       </div>
      //     );
      //   },
      // },

      {
        headerName: "Status",
        field: "status",
        filter: true,
        width: 150,
        cellRendererFramework: params => {
          return params.data?.status === "Active" ? (
            <div className="badge badge-pill badge-success">
              {params.data?.status}
            </div>
          ) : params.data?.status === "Inactive" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.status}
            </div>
          ) : null;
        },
      },
      {
        headerName: "Actions",
        field: "sortorder",
        field: "transactions",
        width: 150,
        cellRendererFramework: params => {
          return (
            <div className="actions cursor-pointer">
              {/* <Eye
                                className="mr-50"
                                size="25px"
                                color="green"
                                onClick={() =>
                                    history.push(`/app/customer/viewCustomer/${params.data._id}`)}
                            /> */}
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(
                        `/app/freshlist/subcategory/editSubCategory/${this.state.category}/${params.data._id}`
                      )
                    }
                  />
                )}
              />
              <Route
                render={({ history }) => (
                  <Trash2
                    className="mr-50"
                    size="25px"
                    color="red"
                    onClick={() => {
                      this.runthisfunction(params.data._id);
                    }}
                  />
                )}
              />
            </div>
          );
        },
      },
    ],
  };

  async componentDidMount() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    let newparmisson = pageparmission?.role?.find(
      value => value?.pageName === "Category List"
    );

    this.setState({ Viewpermisson: newparmisson?.permission.includes("View") });
    this.setState({
      Createpermisson: newparmisson?.permission.includes("Create"),
    });
    this.setState({
      Editpermisson: newparmisson?.permission.includes("Edit"),
    });
    this.setState({
      Deletepermisson: newparmisson?.permission.includes("Delete"),
    });

   let userData = JSON.parse(localStorage.getItem("userData"));
   await AllCategoryList(userData?._id, userData?.database)
     .then((res) => {
       console.log(res);
       if (res?.Category?.length) {
         this.setState({ CatList: res?.Category });
       }
     })
     .catch((err) => {
       console.log(err);
     });
  }
  async runthisfunction(id) {
    console.log(id);

    Delete_SubCategory(this.state.category, id)
      .then(res => {
        let selectedData = this.gridApi.getSelectedRows();
        this.gridApi.updateRowData({ remove: selectedData });
        swal("SubCategory Deleted Successfully");
      })
      .catch(err => {
        console.log(err);
        swal("Something went wrong");
      });
  }
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };
  updateSearchQuery = val => {
    this.gridApi.setQuickFilter(val);
  };
  filterSize = val => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  handleShowSubCat = e => {
    e.preventDefault();
    if (this.state.category != "NA") {
      let selecteddata = this.state.CatList?.filter(
        (ele, i) => ele?._id == this.state.category
      );
      console.log(selecteddata[0]?.subcategories);
      this.setState({ rowData: selecteddata[0]?.subcategories });
      this.setState({ Show: true });
    } else {
      swal("Select Category");
    }
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { rowData, columnDefs, defaultColDef, Show } = this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="mt-2 ml-2 mr-2">
              <Col lg="5" md="5" xs="12">
                <h1 sm="6" className="float-left" style={{ fontWeight: "600" }}>
                  SubCategory List
                </h1>
              </Col>
              {/* <Col>
                  <Button
                    style={{ marginRight: "-22rem" }}
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/freshlist/subcategory/SubCategoryList")
                    }
                  >
                    Back
                  </Button>
                </Col> */}
              <Col lg="3" md="3" className="mb-2">
                <Label> Select Category *</Label>
                <CustomInput
                  required
                  type="select"
                  placeholder="Select Category"
                  name="category"
                  value={this.state.category}
                  onChange={this.changeHandler}
                >
                  <option value="NA">--Select Category--</option>
                  {this.state.CatList?.map(cat => (
                    <option value={cat?._id} key={cat?._id}>
                      {cat?.name}
                    </option>
                  ))}
                </CustomInput>
              </Col>
              <Col lg="2" md="2" className="mb-2">
                <Button
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#39cccc",
                    color: "white",
                    fontWeight: "600",
                  }}
                  className="btn float-right mt-1"
                  color="#39cccc"
                  onClick={this.handleShowSubCat}
                >
                  Submit
                </Button>
              </Col>
              <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#39cccc",
                        color: "white",
                        fontWeight: "600",
                      }}
                      className="btn float-right mt-1 "
                      color="#39cccc"
                      onClick={() =>
                        history.push(
                          "/app/freshlist/subcategory/addSubCategory"
                        )
                      }
                    >
                      + SubCategory
                    </Button>
                  )}
                />
              </Col>
            </Row>
            {Show ? (
              <>
                <CardBody>
                  {this.state.rowData === null ? null : (
                    <div className="ag-theme-material w-100 my-2 ag-grid-table">
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
                                this.state.currenPageSize *
                                  this.state.getPageSize >
                              0
                                ? this.state.currenPageSize *
                                  this.state.getPageSize
                                : this.state.rowData.length}{" "}
                              of {this.state.rowData.length}
                              <ChevronDown className="ml-50" size={15} />
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem
                                tag="div"
                                onClick={() => this.filterSize(20)}
                              >
                                20
                              </DropdownItem>
                              <DropdownItem
                                tag="div"
                                onClick={() => this.filterSize(50)}
                              >
                                50
                              </DropdownItem>
                              <DropdownItem
                                tag="div"
                                onClick={() => this.filterSize(100)}
                              >
                                100
                              </DropdownItem>
                              <DropdownItem
                                tag="div"
                                onClick={() => this.filterSize(134)}
                              >
                                134
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between mb-1">
                          <div className="table-input mr-1">
                            <Input
                              placeholder="search..."
                              onChange={e =>
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
                        </div>
                      </div>
                      <ContextLayout.Consumer>
                        {context => (
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
              </>
            ) : null}
          </Card>
        </Col>
      </Row>
    );
  }
}
export default SubCategoryList;
