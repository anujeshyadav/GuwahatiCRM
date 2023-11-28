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
} from "reactstrap";
// import axiosConfig from "../../../axiosConfig";
import axios from "axios";
import {
  createOrderhistoryview,
  ProductListView,
  CreatePartyList,
} from "../../../../ApiEndPoint/ApiCalling";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import { Route, Link } from "react-router-dom";

class OrderList extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
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
        headerName: "Product_Title",
        field: "orderItems",
         filter: true,
        width: 180,
        valueGetter: params => {
          if (params.data.orderItems && params.data.orderItems.length > 0) {
            return params.data.orderItems[0].product.Product_Title; 
          }
          return null; 
        },
      },
      {
        headerName: "Category",
        field: "orderItems",
         filter: true,
        width: 180,
        valueGetter: params => {
          if (params.data.orderItems && params.data.orderItems.length > 0) {
            return params.data.orderItems[0].product.category; 
          }
          return null; 
        },
      },
      {
        headerName: "SubCategory",
        field: "orderItems",
         filter: true,
        width: 180,
        valueGetter: params => {
          if (params.data.orderItems && params.data.orderItems.length > 0) {
            return params.data.orderItems[0].product.SubCategory; 
          }
          return null; 
        },
      },
      {
        headerName: "Price",
        field: "orderItems",
         filter: true,
        width: 150,
        valueGetter: params => {
          if (params.data.orderItems && params.data.orderItems.length > 0) {
            return params.data.orderItems[0].price; 
          }
          return null; 
        },
      },
      {
        headerName: "Size",
        field: "orderItems",
         filter: true,
        width: 150,
        valueGetter: params => {
          
          if (params.data.orderItems && params.data.orderItems.length > 0) {
            return params.data.orderItems[0].qty; // Return the price
          }
          return null; 
          
        },
      },
      {
        headerName: "GST Rate",
        field: "orderItems",
         filter: true,
        width: 180,
        valueGetter: params => {
          if (params.data.orderItems && params.data.orderItems.length > 0) {
            return params.data.orderItems[0].product["GST Rate"]; // Return the price
          }
          return null; // Or handle cases where there's no price
        },
      },
      {
        headerName: "HSN Code",
        field: "orderItems",
         filter: true,
        width: 180,
        valueGetter: params => {
          if (params.data.orderItems && params.data.orderItems.length > 0) {
            return params.data.orderItems[0].product.HSN_Code; // Return the price
          }
          return null; 
        },
      },
   
      {
        headerName: "Country",
        field: "country",
        filter: true,
        width: 200,
        cellRendererFramework: params => {
          return (
            <div>
              <span>{params.data?.country}</span>
            </div>
          );
        },
      },
      {
        headerName: "State",
        field: "state",
        filter: true,
        width: 200,
        cellRendererFramework: params => {
          return (
            <div>
              <span>{params.data?.state}</span>
            </div>
          );
        },
      },
      {
        headerName: "City",
        field: "city",
        filter: true,
        width: 200,
        cellRendererFramework: params => {
          return (
            <div>
              <span>{params.data?.city}</span>
            </div>
          );
        },
      },
      {
        headerName: "MobileNo",
        field: "MobileNo",
        filter: true,
        width: 150,
        cellRendererFramework: params => {
          return (
            <div>
              <span>{params.data?.MobileNo}</span>
            </div>
          );
        },
      },
      {
        headerName: "Discount",
        field: "discount",
        filter: true,
        width: 200,
        cellRendererFramework: params => {
          return (
            <div>
              <span>{params.data?.discount}</span>
            </div>
          );
        },
      },
      {
        headerName: "GrandTotal",
        field: "grandTotal",
        filter: true,
        width: 200,
        cellRendererFramework: params => {
          return (
            <div>
              <span>{params.data?.grandTotal}</span>
            </div>
          );
        },
      },
     

        {
          headerName: "Status",
          field: "status",
          filter: true,
          width: 150,
          cellRendererFramework: params => {
            return params.value === "Active" ? (
              <div className="badge badge-pill badge-success">
                {params.data.status}
              </div>
            ) : params.value === "pending" ? (
              <div className="badge badge-pill badge-warning">
                {params.data.status}
              </div>
            ) : null;
          },
        },
      // {
      //   headerName: "Actions",
      //   field: "sortorder",
      //   field: "transactions",
      //   width: 150,
      //   cellRendererFramework: params => {
      //     return (
      //       <div className="actions cursor-pointer">
      //         <Route
      //           render={({ history }) => (
      //             <>
      //               {/* <Eye
      //                           className="mr-50"
      //                           size="25px"
      //                           color="green"
      //                           onClick={() =>
      //                               history.push(`/app/customer/viewCustomer/${params.data._id}`)}
      //                       /> */}
      //               {/* <Edit
      //                 className="mr-50"
      //                 size="25px"
      //                 color="blue"
      //                 onClick={() => history.push("/app/customer/editCustomer")}
      //               /> */}
      //               <Trash2
      //                 className="mr-50"
      //                 size="25px"
      //                 color="red"
      //                 onClick={() => {
      //                   let selectedData = this.gridApi.getSelectedRows();
      //                   this.runthisfunction(params.data._id);
      //                   this.gridApi.updateRowData({ remove: selectedData });
      //                 }}
      //               />
      //             </>
      //           )}
      //         />
      //       </div>
      //     );
      //   },
      // },
    ],
  };

  async componentDidMount() {
  createOrderhistoryview()
    .then(res => {
        console.log(res.orderHistory)
        this.setState({ rowData:res.orderHistory });
    })
    .catch(err => {
        console.log(err);
    });
  }

  // async runthisfunction(id) {
  //   console.log(id);
  //   await axios.get(`http://3.6.37.16:8000/admin/del_language/${id}`).then(
  //     response => {
  //       console.log(response);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
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
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      console.log(rowData),
      (
        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 sm="6" className="float-left">
                    Order List
                  </h1>
                </Col>
                <Col>
                  <Route
                    render={({ history }) => (
                      <Button
                        className="btn float-right"
                        color="primary"
                        onClick={() =>
                          history.push("/app/softnumen/order/createorder")
                        }
                      >
                       Create Order
                      </Button>
                    )}
                  />
                </Col>
              </Row>
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
            </Card>
          </Col>
        </Row>
      )
    );
  }
}
export default OrderList;
