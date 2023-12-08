import React, { useRef } from "react";
import xmlJs from "xml-js";
import {
  Card,
  CardBody,
  Input,
  Row,
  Modal,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  ModalHeader,
  ModalBody,
  Badge,
  Label,
  Form,
  CustomInput,
} from "reactstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { ToWords } from "to-words";
import {
  Eye,
  Trash2,
  ChevronDown,
  Edit,
  CloudLightning,
  CornerDownLeft,
} from "react-feather";
import { history } from "../../../../history";
import Templatethree from "../../../../assets/Billtemp/Templatethree.png";
import Templatetwo from "../../../../assets/Billtemp/Templatetwo.png";
import templatefour from "../../../../assets/Billtemp/templatefour.png";
import templateone from "../../../../assets/Billtemp/templateone.png";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import InvoicGenerator from "../subcategory/InvoiceGeneratorone";
import { Route, Link } from "react-router-dom";
import swal from "sweetalert";
import { createOrderhistoryview } from "../../../../ApiEndPoint/ApiCalling";

import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import EditAccount from "../accounts/EditAccount";
// import ViewAccount from "../accounts/ViewAccount";
import ViewOrder from "../../../../../src/views/apps/freshlist/order/ViewAll";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Logo from "../../../../assets/img/profile/pages/logomain.png";
import Papa from "papaparse";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";

import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaFilter,
  FaPlus,
} from "react-icons/fa";
import moment from "moment-timezone";
import {
  CreateAccountList,
  CreateAccountView,
  DeleteAccount,
} from "../../../../ApiEndPoint/ApiCalling";
import {
  BsCloudDownloadFill,
  BsFillArrowDownSquareFill,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";
import * as XLSX from "xlsx";
import UserContext from "../../../../context/Context";
import { CheckPermission } from "../house/CheckPermission";

const SelectedColums = [];
const toWords = new ToWords({
  localeCode: "en-IN",
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: false,
    currencyOptions: {
      // can be used to override defaults for the selected locale
      name: "Rupee",
      plural: "Rupees",
      symbol: "₹",
      fractionalUnit: {
        name: "Paisa",
        plural: "Paise",
        symbol: "",
      },
    },
  },
});
const AddedBill = [];
const AllProduct = [];
class InvoiceGenerator extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
    this.gridApi = null;
    this.state = {
      isOpen: false,
      ShowMyBill: false,
      BillNumber: "",
      Arrindex: "",
      AllbillMerged: [],
      rowData: [],
      InsiderPermissions: {},
      CompanyDetails: {},
      ShowBill: false,
      Applied_Charges: {},
      Billtoposition: "Left",
      shipto: "right",
      logoposition: "Left",
      ButtonText: "Submit",
      Mergebilllength: "",
      modal: false,
      modalOne: false,
      sgst: "",
      discount: "",
      ViewBill: true,
      wordsNumber: "",
      cgst: "",
      otherCharges: "",
      deliveryCharges: "",
      PrintData: {},
      Viewpermisson: null,
      Editpermisson: null,
      Createpermisson: null,
      Deletepermisson: null,
      getPageSize: "",
      columnDefs: [
        {
          headerName: "S.No",
          valueGetter: "node.rowIndex + 1",
          field: "node.rowIndex + 1",
          width: 80,
          filter: true,
        },
        // {
        //   headerName: "Add Bills",
        //   width: 160,
        //   filter: true,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center justify-content-center cursor-pointer">
        //         <div>
        //           <span>
        //             <input
        //               type="checkbox"
        //               className="customcheckbox"
        //               onClick={(e) => {
        //                 this.handleMultipleBillsAdd(
        //                   params?.data,
        //                   e.target.checked
        //                 );
        //                 // console.log(e.target.checked);
        //               }}
        //             />
        //             {/* <AiOutlineDownload
        //               onClick={() => this.handleBillDownload(params.data)}
        //               fill="green"
        //               size="30px"
        //             /> */}
        //           </span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
        {
          headerName: "Status",
          field: "order_status",
          filter: true,
          width: 140,
          cellRendererFramework: params => {
            // console.log(params.data);
            return params.data?.status === "completed" ? (
              <div className="badge badge-pill badge-success">Completed</div>
            ) : params.data?.status === "pending" ? (
              <div className="badge badge-pill badge-warning">
                {params.data?.status}
              </div>
            ) : params.data?.status === "return" ? (
              <div className="badge badge-pill bg-danger">Returned</div>
            ) : params.data?.status === "cancelled" ? (
              <div className="badge badge-pill bg-danger">
                {params.data.status}
              </div>
            ) : params.data?.status === "completed" ? (
              <div className="badge badge-pill bg-success">Completed</div>
            ) : (
              <>
                <div className="badge badge-pill bg-warning">Cancelled</div>
              </>
            );
          },
        },
        {
          headerName: "Orderid",
          field: "_id",
          filter: true,
          resizable: true,
          width: 180,
          cellRendererFramework: params => {
            // console.log(params.data?.order_id);

            return (
              <div className="d-flex align-items-center cursor-pointer">
                <div>
                  {/* <select
                  // className="form-control"
                  defaultValue={params.data?.order_status}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    let data = new FormData();
                    data.append("order_id", params.data?.order_id);
                    data.append("order_status", e.target.value);
                    axiosConfig
                      .post(`/change_order_status`, data)
                      .then((res) => {
                        console.log(res?.data.message);
                        if (res?.data.message) {
                          this.componentDidMount();
                          swal("status Updated Succesfully");
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                  name="changestatus"
                  id="changeStatus"
                >
                  <option value={params.data?.order_status}>
                    {params.data?.order_status}
                  </option>
                  <option value="Pending">--UpdateStatus--</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Cancelled">Cancelled</option>
                </select> */}
                  <span>{params?.data?._id}</span>
                </div>
              </div>
            );
          },
        },
        {
          headerName: "Invoice",
          field: "invoice",
          filter: true,
          resizable: true,
          width: 140,
          cellRendererFramework: params => {
            // console.log(params?.data?.status);

            return (
              <div className="d-flex align-items-center justify-content-center cursor-pointer">
                <div>
                  {params?.data?.status == "completed" ? (
                    <>
                      {this.state.InsiderPermissions &&
                        this.state.InsiderPermissions?.View && (
                          <AiOutlineDownload
                            // onClick={() => this.handleBillDownload(params.data)}
                            onClick={() => this.MergeBillNow(params.data)}
                            fill="green"
                            size="30px"
                          />
                        )}
                    </>
                  ) : (
                    "NA"
                  )}
                  <span></span>
                </div>
              </div>
            );
          },
        },
        {
          headerName: "FullName",
          field: "fullName",
          filter: true,
          resizable: true,
          width: 150,
          cellRendererFramework: params => {
            return (
              <div className="d-flex align-items-center justify-content-center cursor-pointer">
                <div>
                  <span>{params?.data?.fullName}</span>
                </div>
              </div>
            );
          },
        },
        {
          headerName: "MobileNo",
          field: "MobileNo",
          filter: true,
          resizable: true,
          width: 160,
          cellRendererFramework: params => {
            return (
              <div className="d-flex align-items-center justify-content-center cursor-pointer">
                <div>
                  <span>{params?.data?.MobileNo}</span>
                </div>
              </div>
            );
          },
        },
        {
          headerName: "Address",
          field: "address",
          filter: true,
          resizable: true,
          width: 200,
          cellRendererFramework: params => {
            return (
              <div className="d-flex align-items-center justify-content-center cursor-pointer">
                <div>
                  <span>{params?.data?.address}</span>
                </div>
              </div>
            );
          },
        },
        {
          headerName: "GrandTotal",
          field: "grandTotal",
          filter: true,
          resizable: true,
          width: 150,
          cellRendererFramework: params => {
            return (
              <div className="d-flex align-items-center justify-content-center cursor-pointer">
                <div>
                  <span>{params?.data?.grandTotal}</span>
                </div>
              </div>
            );
          },
        },
        {
          headerName: "Tax Amount",
          field: "taxAmount",
          filter: true,
          resizable: true,
          width: 150,
          cellRendererFramework: params => {
            return (
              <div className="d-flex align-items-center justify-content-center cursor-pointer">
                <div>
                  <span>{params?.data?.taxAmount}</span>
                </div>
              </div>
            );
          },
        },
        {
          headerName: "Party Name",
          field: "partyId.firstName",
          filter: true,
          resizable: true,
          width: 210,
          cellRendererFramework: params => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <div>
                  <span>{params.data?.partyId?.firstName}</span>
                </div>
              </div>
            );
          },
        },

        {
          headerName: "Total Product",
          field: "params?.data?.orderItems?.length",
          filter: true,
          resizable: true,
          width: 180,
          cellRendererFramework: params => {
            // console.log(params.data);
            return (
              <div className="d-flex cursor-pointer">
                <div>{params?.data?.orderItems?.length} Products</div>
              </div>
            );
          },
        },

        {
          headerName: "Actions",
          field: "sortorder",
          field: "transactions",
          width: 120,
          cellRendererFramework: params => {
            return (
              <div className="actions cursor-pointer">
                {this.state.InsiderPermissions &&
                  this.state.InsiderPermissions?.Edit && (
                    <CornerDownLeft
                      className="mr-50"
                      size="25px"
                      color="green"
                      onClick={() => {
                        localStorage.setItem(
                          "OrderList",
                          JSON.stringify(params.data)
                        );
                        this.props.history.push({
                          pathname: `/app/AJGroup/order/placeOrderReturn/${params.data?._id}`,
                          state: params.data,
                        });
                      }}
                    />
                  )}

                {this.state.InsiderPermissions &&
                  this.state.InsiderPermissions?.Delete && (
                    <Route
                      render={() => (
                        <Trash2
                          className="mr-50"
                          size="25px"
                          color="red"
                          onClick={() => {
                            let selectedData = this.gridApi.getSelectedRows();
                            this.runthisfunction(params.data?._id);
                            this.gridApi.updateRowData({
                              remove: selectedData,
                            });
                          }}
                        />
                      )}
                    />
                  )}
                {/* {this.state.Deletepermisson && (
              
              )} */}
              </div>
            );
          },
        },

        // {
        //   headerName: "total",
        //   field: "total",
        //   filter: true,
        //   resizable: true,
        //   width: 160,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <Badge color="success">{params.data?.total}</Badge>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
        // {
        //   headerName: "brandname ",
        //   field: "brand_name",
        //   filter: true,
        //   resizable: true,
        //   width: 180,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <span>{params.data?.brand_name}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
        // {
        //   headerName: "city",
        //   field: "city",
        //   filter: true,
        //   resizable: true,
        //   width: 160,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <span>{params.data?.city}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
        {
          headerName: "order Creation date",
          field: "order_date",
          filter: true,
          resizable: true,
          width: 230,
          cellRendererFramework: params => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <div>
                  <span>{params.data?.order_date}</span>
                </div>
              </div>
            );
          },
        },
        // {
        //   headerName: "deliverydate",
        //   field: "delivery_date",
        //   filter: true,
        //   resizable: true,
        //   width: 230,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <span>{params.data?.delivery_date}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
        // {
        //   headerName: "description",
        //   field: "description",
        //   filter: "true",
        //   width: 180,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div className="">
        //           <span>{params.data?.description}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
        // {
        //   headerName: "discountprice",
        //   field: "discountprice",
        //   filter: "true",
        //   width: 180,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div className="">
        //           <span>{params.data?.discountprice}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
        // {
        //   headerName: "email",
        //   field: "email",
        //   filter: true,
        //   resizable: true,
        //   width: 190,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <span>{params.data?.email}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },

        // {
        //   headerName: "full_name",
        //   field: "full_name",
        //   filter: true,
        //   resizable: true,
        //   width: 170,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <span>{params.data?.full_name}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },

        // {
        //   headerName: "mobile",
        //   field: "mobile",
        //   filter: true,
        //   resizable: true,
        //   width: 190,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <span>{params.data?.mobile}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
        // {
        //   headerName: "price",
        //   field: "price",
        //   filter: true,
        //   resizable: true,
        //   width: 150,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <span>{params.data?.price}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },

        // {
        //   headerName: "producttype",
        //   field: "product_type",
        //   filter: true,
        //   resizable: true,
        //   width: 190,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <span>{params.data?.product_type}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
        // {
        //   headerName: "shippingfee",
        //   field: "shipping_fee",
        //   filter: true,
        //   resizable: true,
        //   width: 190,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <span>{params.data?.shipping_fee}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
        // {
        //   headerName: "status",
        //   field: "status",
        //   filter: true,
        //   resizable: true,
        //   width: 180,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <span>{params.data?.status}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
        // {
        //   headerName: "stock",
        //   field: "stock",
        //   filter: true,
        //   resizable: true,
        //   width: 180,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <span>{params.data?.stock}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
        // {
        //   headerName: "subtotal",
        //   field: "subtotal",
        //   filter: true,
        //   resizable: true,
        //   width: 180,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <span>{params.data?.subtotal}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
        // {
        //   headerName: "tags",
        //   field: "tags",
        //   filter: true,
        //   resizable: true,
        //   width: 180,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <span>{params.data?.tags}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
        // {
        //   headerName: "tax_rate",
        //   field: "tax_rate",
        //   filter: true,
        //   resizable: true,
        //   width: 180,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div>
        //           <span>{params.data?.tax_rate}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },

        // {
        //   headerName: "Permitions",
        //   field: "permitions",
        //   filter: true,
        //   width: 180,
        //   cellRendererFramework: (params) => {
        //     return (
        //       <CustomInput
        //         type="switch"
        //         className="mr-1"
        //         id="primary"
        //         name="primary"
        //         inline
        //         onChange={this.handleSwitchChange}
        //       ></CustomInput>
        //     );
        //   },
        // },
      ],
      setMySelectedarr: [],
      SelectedCols: [],
      paginationPageSize: 5,
      currenPageSize: "",
      getPageSize: "",
      AllcolumnDefs: [],
      SelectedcolumnDefs: [],
      defaultColDef: {
        sortable: true,
        enablePivot: true,
        enableValue: true,
        resizable: true,
        suppressMenu: true,
      },
    };
  }
  handleMultipleBillsAdd = (data, check) => {
    this.setState({ PrintData: data });
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    if (check) {
      AddedBill.push({
        order_id: data?.order_id,
        user_id: pageparmission?.Userinfo?.id,
        role: pageparmission?.Userinfo?.role,
      });
    } else {
      let index = AddedBill.findIndex(ele => ele?.order_id === data?.order_id);
      AddedBill.splice(index, 1);
    }
    // console.log(AddedBill);
    this.setState({ Mergebilllength: AddedBill?.length });
  };

  MergeBillNow = data => {
    let billnum = localStorage.getItem("billnumber");
    console.log(data);
    console.log(billnum);
    // debugger;
    if (billnum) {
      this.setState({ ShowBill: false });
      this.setState({ PrintData: data });

      // e.preventDefault();
      const toWords = new ToWords();
      let words = toWords.convert(Number(data?.grandTotal), { currency: true });
      this.setState({ wordsNumber: words });
      this.toggleModalOne();
    } else {
      swal("Select Bill Template");
      this.setState({ ShowBill: true });
      this.toggleModalOne();
    }
    console.log(data);
  };

  handleBillDownload = data => {
    this.setState({ PrintData: data });
    const toWords = new ToWords();
    let words = toWords.convert(Number(data.sub_total), { currency: true });
    this.setState({ wordsNumber: words });
    this.toggleModal();
  };
  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };
  toggleModalOne = () => {
    this.setState(prevState => ({
      modalOne: !prevState.modalOne,
    }));
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  toggleModalclose = () => {
    // debugger;
    this.setState({ modalOne: false });
    this.setState({ ShowMyBill: false });
    // window.location.reload();
    // AddedBill = [];
    // console.log(AddedBill);
  };

  handleChangeView = (data, types) => {
    let type = types;
    if (type == "readonly") {
      this.setState({ ViewOneUserView: true });
      this.setState({ ViewOneData: data });
    } else {
      this.setState({ EditOneUserView: true });
      this.setState({ EditOneData: data });
    }
  };
  LookupviewStart = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  handleChangeEdit = (data, types) => {
    let type = types;
    if (type == "readonly") {
      this.setState({ ViewOneUserView: true });
      this.setState({ ViewOneData: data });
    } else {
      this.setState({ EditOneUserView: true });
      this.setState({ EditOneData: data });
    }
  };

  async componentDidMount() {
    const UserInformation = this.context;
    // console.log(UserInformation?.CompanyDetails);
    if (UserInformation?.CompanyDetails) {
      this.setState({ CompanyDetails: UserInformation?.CompanyDetails });
    }
    debugger;
    let billnumner = localStorage.getItem("billnumber");
    if (billnumner) {
      this.setState({ ShowBill: false });
      this.setState({ BillNumber: billnumner });
    }
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    let userid = pageparmission?._id;
    const InsidePermissions = CheckPermission("Sales Invoice");
    console.log(InsidePermissions);
    this.setState({ InsiderPermissions: InsidePermissions });
    createOrderhistoryview(userid)
      .then(res => {
        console.log(res?.orderHistory);
        this.setState({ rowData: res?.orderHistory });
        this.setState({ AllcolumnDefs: this.state.columnDefs });

        let userHeading = JSON.parse(localStorage.getItem("SalesOrderList"));
        if (userHeading?.length) {
          this.setState({ columnDefs: userHeading });
          this.gridApi.setColumnDefs(userHeading);
          this.setState({ SelectedcolumnDefs: userHeading });
        } else {
          this.setState({ columnDefs: this.state.columnDefs });
          this.setState({ SelectedcolumnDefs: this.state.columnDefs });
        }
        this.setState({ SelectedCols: this.state.columnDefs });
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(pageparmission.role);
    let userchoice = JSON.parse(localStorage.getItem("billUI"));
    console.log(userchoice);
    if (userchoice) {
      this.setState({ logoposition: userchoice?.imagePosition });
      this.setState({ Billtoposition: userchoice?.billTo });
      this.setState({ shipto: userchoice?.shipto });
    }
    let newparmisson = pageparmission?.role?.find(
      value => value?.pageName === "invoice Generator"
    );
    // console.log(newparmisson);
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
  }

  submitHandler = e => {
    e.preventDefault();
    let mychoice = {
      imagePosition: this.state.logoposition,
      billTo: this.state.Billtoposition,
      shipto: this.state.shipto,
    };

    if (mychoice.billTo == mychoice.shipto) {
      swal("Can not set Bill to and Ship to on one Same side");
    } else {
      localStorage.setItem("billUI", JSON.stringify(mychoice));
      this.setState({ ShowMyBill: true });
    }
  };
  toggleDropdown = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  runthisfunction(id) {
    swal("Warning", "Sure You Want to Delete it", {
      buttons: {
        cancel: "cancel",
        catch: { text: "Delete ", value: "delete" },
      },
    }).then(value => {
      switch (value) {
        case "delete":
          DeleteAccount(id)
            .then(res => {
              let selectedData = this.gridApi.getSelectedRows();
              this.gridApi.updateRowData({ remove: selectedData });
            })
            .catch(err => {
              console.log(err);
            });
          break;
        default:
      }
    });
  }
  handleBillSet = i => {
    this.setState({ BillNumber: i });
    localStorage.setItem("billnumber", i);
    // this.toggleModalOne();
    this.setState({ ShowBill: false });
  };
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridRef.current = params.api;

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
  handleChangeHeader = (e, value, index) => {
    let check = e.target.checked;
    if (check) {
      SelectedColums?.push(value);
    } else {
      const delindex = SelectedColums?.findIndex(
        ele => ele?.headerName === value?.headerName
      );

      SelectedColums?.splice(delindex, 1);
    }
  };
  parseCsv(csvData) {
    return new Promise((resolve, reject) => {
      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: result => {
          if (result.data && result.data.length > 0) {
            resolve(result.data);
          } else {
            reject(new Error("No data found in the CSV"));
          }
        },
        error: error => {
          reject(error);
        },
      });
    });
  }
  generatePDF(parsedData) {
    let pdfsize = [Object.keys(parsedData[0])][0].length;
    let size = pdfsize > 15 ? "a1" : pdfsize < 14 > 10 ? "a3" : "a4";

    const doc = new jsPDF("landscape", "mm", size, false);
    doc.setTextColor(5, 87, 97);
    const tableData = parsedData.map(row => Object.values(row));
    doc.addImage(Logo, "JPEG", 10, 10, 50, 30);
    let date = new Date();
    doc.setCreationDate(date);
    doc.text("OrderList", 14, 51);
    doc.autoTable({
      head: [Object.keys(parsedData[0])],
      body: tableData,
      startY: 60,
    });

    doc.save("OrderList.pdf");
  }

  exportToPDF = async () => {
    const csvData = this.gridApi.getDataAsCsv({
      processCellCallback: this.processCell,
    });
    try {
      const parsedData = await this.parseCsv(csvData);
      this.generatePDF(parsedData);
    } catch (error) {
      console.error("Error parsing CSV:", error);
    }
  };
  processCell = params => {
    // console.log(params);
    // Customize cell content as needed
    return params.value;
  };

  convertCsvToExcel(csvData) {
    return new Promise(resolve => {
      Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function (result) {
          const worksheet = XLSX.utils.json_to_sheet(result.data);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
          const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
          });
          const blob = new Blob([excelBuffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
          resolve(blob);
        },
      });
    });
  }
  downloadExcelFile(blob) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "OrderList.xlsx";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }

  exportToExcel = async e => {
    const CsvData = this.gridApi.getDataAsCsv({
      processCellCallback: this.processCell,
    });
    const blob = await this.convertCsvToExcel(CsvData);
    this.downloadExcelFile(blob);
  };

  convertCSVtoExcel = () => {
    const CsvData = this.gridApi.getDataAsCsv({
      processCellCallback: this.processCell,
    });
    Papa.parse(CsvData, {
      complete: result => {
        const ws = XLSX.utils.json_to_sheet(result.data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        const excelType = "xls";
        XLSX.writeFile(wb, `OrderList.${excelType}`);
      },
    });
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
  convertCsvToXml = () => {
    const CsvData = this.gridApi.getDataAsCsv({
      processCellCallback: this.processCell,
    });
    Papa.parse(CsvData, {
      complete: result => {
        const rows = result.data;

        // Create XML
        let xmlString = "<root>\n";

        rows.forEach(row => {
          xmlString += "  <row>\n";
          row.forEach((cell, index) => {
            xmlString += `    <field${index + 1}>${cell}</field${index + 1}>\n`;
          });
          xmlString += "  </row>\n";
        });

        xmlString += "</root>";

        // setXmlData(xmlString);

        // Create a download link
        const blob = new Blob([xmlString], { type: "text/xml" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "OrderList.xml";
        link.click();
      },
    });
  };

  HandleSetVisibleField = e => {
    e.preventDefault();
    this.gridApi.setColumnDefs(this.state.SelectedcolumnDefs);
    this.setState({ columnDefs: this.state.SelectedcolumnDefs });
    this.setState({ SelectedcolumnDefs: this.state.SelectedcolumnDefs });
    this.setState({ rowData: this.state.rowData });
    localStorage.setItem(
      "SalesOrderList",
      JSON.stringify(this.state.SelectedcolumnDefs)
    );
    this.LookupviewStart();
  };

  HeadingRightShift = () => {
    const updatedSelectedColumnDefs = [
      ...new Set([
        ...this.state.SelectedcolumnDefs.map(item => JSON.stringify(item)),
        ...SelectedColums.map(item => JSON.stringify(item)),
      ]),
    ].map(item => JSON.parse(item));
    this.setState({
      SelectedcolumnDefs: [...new Set(updatedSelectedColumnDefs)], // Update the state with the combined array
    });
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
  render() {
    const {
      rowData,
      columnDefs,
      defaultColDef,
      SelectedcolumnDefs,
      isOpen,
      SelectedCols,
      AllcolumnDefs,
    } = this.state;
    return (
      <>
        {/* <ExcelReader /> */}
        <Row className="app-user-list">
          {this.state.EditOneUserView && this.state.EditOneUserView ? (
            <Row className="card">
              <Col>
                <div className="d-flex justify-content-end p-1">
                  <Button
                    onClick={e => {
                      e.preventDefault();
                      this.setState({ EditOneUserView: false });
                      this.componentDidMount();
                    }}
                    color="danger"
                  >
                    Back
                  </Button>
                </div>
              </Col>

              {/* <EditAccount EditOneData={this.state.EditOneData} /> */}
            </Row>
          ) : (
            <>
              {this.state.ViewOneUserView && this.state.ViewOneUserView ? (
                <>
                  <Row className="card">
                    <Col>
                      <h1 className="float-left">View User</h1>
                    </Col>
                    <Col>
                      <div className="d-flex justify-content-end p-1">
                        <Button
                          onClick={e => {
                            e.preventDefault();
                            this.setState({ ViewOneUserView: false });
                          }}
                          color="danger"
                        >
                          Back
                        </Button>
                      </div>
                    </Col>
                    <ViewOrder ViewOneData={this.state.ViewOneData} />
                  </Row>
                </>
              ) : (
                <>
                  <Col sm="12">
                    <Card>
                      <Row className="m-2">
                        <Col>
                          <h1 className="float-left">Order List</h1>
                        </Col>
                        <Col>
                          <span className="mx-1">
                            <FaFilter
                              style={{ cursor: "pointer" }}
                              title="filter coloumn"
                              size="25px"
                              onClick={this.LookupviewStart}
                              color="#39cccc"
                              className="float-right"
                            />
                          </span>
                          <span className="mx-1">
                            <div className="dropdown-container float-right">
                              <BsCloudDownloadFill
                                style={{ cursor: "pointer" }}
                                title="download file"
                                size="25px"
                                className="dropdown-button "
                                color="#39cccc"
                                onClick={this.toggleDropdown}
                              />
                              {isOpen && (
                                <div
                                  style={{
                                    position: "absolute",
                                    zIndex: "1",
                                  }}
                                  className="dropdown-content dropdownmy"
                                >
                                  <h5
                                    onClick={() => this.exportToPDF()}
                                    style={{ cursor: "pointer" }}
                                    className=" mx-1 myactive mt-1"
                                  >
                                    .PDF
                                  </h5>
                                  <h5
                                    onClick={() =>
                                      this.gridApi.exportDataAsCsv()
                                    }
                                    style={{ cursor: "pointer" }}
                                    className=" mx-1 myactive"
                                  >
                                    .CSV
                                  </h5>
                                  <h5
                                    onClick={this.convertCSVtoExcel}
                                    style={{ cursor: "pointer" }}
                                    className=" mx-1 myactive"
                                  >
                                    .XLS
                                  </h5>
                                  <h5
                                    onClick={this.exportToExcel}
                                    style={{ cursor: "pointer" }}
                                    className=" mx-1 myactive"
                                  >
                                    .XLSX
                                  </h5>
                                  <h5
                                    onClick={() => this.convertCsvToXml()}
                                    style={{ cursor: "pointer" }}
                                    className=" mx-1 myactive"
                                  >
                                    .XML
                                  </h5>
                                </div>
                              )}
                            </div>
                          </span>
                          <span></span>
                        </Col>
                        {this.state.InsiderPermissions &&
                          this.state.InsiderPermissions?.Create && (
                            <Col lg="2" sm="2" md="2">
                              <Button
                                className=" btn btn-success float-right"
                                onClick={e => {
                                  let billnumber =
                                    localStorage.getItem("billnumber");
                                  if (billnumber) {
                                    swal("You already Selected Bill Type");
                                  } else {
                                    this.setState({ ShowBill: true });
                                    this.toggleModalOne();
                                  }
                                }}
                              >
                                Select Invoice
                              </Button>
                            </Col>
                          )}
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
                                      onClick={() => this.filterSize(5)}
                                    >
                                      5
                                    </DropdownItem>
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
                              <div className="d-flex flex-wrap justify-content-end mb-1">
                                <div className="table-input mr-1">
                                  <Input
                                    placeholder="search Item here..."
                                    onChange={e =>
                                      this.updateSearchQuery(e.target.value)
                                    }
                                    value={this.state.value}
                                  />
                                </div>
                              </div>
                            </div>
                            <ContextLayout.Consumer className="ag-theme-alpine">
                              {context => (
                                <AgGridReact
                                  id="myAgGrid"
                                  // gridOptions={{
                                  //   domLayout: "autoHeight",
                                  //   // or other layout options
                                  // }}
                                  gridOptions={this.gridOptions}
                                  rowSelection="multiple"
                                  defaultColDef={defaultColDef}
                                  columnDefs={columnDefs}
                                  rowData={rowData}
                                  // onGridReady={(params) => {
                                  //   this.gridApi = params.api;
                                  //   this.gridColumnApi = params.columnApi;
                                  //   this.gridRef.current = params.api;

                                  //   this.setState({
                                  //     currenPageSize:
                                  //       this.gridApi.paginationGetCurrentPage() +
                                  //       1,
                                  //     getPageSize:
                                  //       this.gridApi.paginationGetPageSize(),
                                  //     totalPages:
                                  //       this.gridApi.paginationGetTotalPages(),
                                  //   });
                                  // }}
                                  onGridReady={this.onGridReady}
                                  colResizeDefault={"shift"}
                                  animateRows={true}
                                  floatingFilter={false}
                                  pagination={true}
                                  paginationPageSize={
                                    this.state.paginationPageSize
                                  }
                                  pivotPanelShow="always"
                                  enableRtl={context.state.direction === "rtl"}
                                  ref={this.gridRef} // Attach the ref to the grid
                                  domLayout="autoHeight" // Adjust layout as needed
                                />
                              )}
                            </ContextLayout.Consumer>
                          </div>
                        )}
                      </CardBody>
                    </Card>
                  </Col>
                </>
              )}
            </>
          )}
        </Row>

        <Modal
          isOpen={this.state.modal}
          toggle={this.LookupviewStart}
          className={this.props.className}
          style={{ maxWidth: "1050px" }}
        >
          <ModalHeader toggle={this.LookupviewStart}>Change Fileds</ModalHeader>
          <ModalBody className="modalbodyhead">
            <Row>
              <Col lg="4" md="4" sm="12" xl="4" xs="12">
                <h4>Avilable Columns</h4>
                <div className="mainshffling">
                  <div class="ex1">
                    {AllcolumnDefs &&
                      AllcolumnDefs?.map((ele, i) => {
                        return (
                          <>
                            <div
                              onClick={e => this.handleChangeHeader(e, ele, i)}
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

                                  {ele?.headerName}
                                </h5>
                              </span>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </Col>
              <Col lg="2" md="2" sm="12" xl="2" xs="12" className="colarrowbtn">
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
                                              element =>
                                                element?.headerName ==
                                                ele?.headerName
                                            );

                                          if (SelectedCols && delindex >= 0) {
                                            const splicedElement =
                                              SelectedCols.splice(delindex, 1); // Remove the element
                                            // splicedElement contains the removed element, if needed

                                            this.setState({
                                              SelectedcolumnDefs: SelectedCols, // Update the state with the modified array
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

                                      {ele?.headerName}
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
                  <Button onClick={this.HandleSetVisibleField} color="primary">
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
        <Modal
          isOpen={this.state.modalOne}
          toggle={this.toggleModalOne}
          className={this.props.className}
          style={{ maxWidth: "1050px" }}
        >
          <ModalHeader toggle={this.toggleModalclose}>
            {this.state.ShowBill ? "Select Bill Format" : "Download BIll"}
          </ModalHeader>
          <ModalBody>
            {this.state.ShowBill && this.state.ShowBill ? (
              <>
                <div className="d-flex justify-content-center">
                  <h4>Choose Bill type</h4>
                </div>
                <Row className="container p-5">
                  <Col lg="3" md="3" s="3">
                    <div className="imagebackground p-1">
                      <img
                        onClick={e => this.handleBillSet(1)}
                        style={{ cursor: "pointer" }}
                        width={130}
                        height={150}
                        src={Templatethree}
                        alt="template"
                      />
                    </div>
                  </Col>
                  <Col lg="3" md="3" s="3">
                    <div className="imagebackground p-1">
                      <img
                        onClick={e => this.handleBillSet(2)}
                        className="imagebackground"
                        style={{ cursor: "pointer" }}
                        width={130}
                        height={150}
                        src={Templatetwo}
                        alt="template"
                      />
                    </div>
                  </Col>
                  <Col lg="3" md="3" s="3">
                    <div className="imagebackground p-1">
                      <img
                        onClick={e => this.handleBillSet(3)}
                        className="imagebackground"
                        style={{ cursor: "pointer" }}
                        width={130}
                        height={150}
                        src={templateone}
                        alt="template"
                      />
                    </div>
                  </Col>
                  <Col lg="3" md="3" s="3">
                    <div className="imagebackground p-1">
                      <img
                        onClick={e => this.handleBillSet(4)}
                        className="imagebackground"
                        style={{ cursor: "pointer" }}
                        width={130}
                        height={150}
                        src={templatefour}
                        alt="template"
                      />
                    </div>
                  </Col>
                </Row>
              </>
            ) : (
              <>
                {this.state.ShowMyBill && this.state.ShowMyBill ? (
                  <>
                    {this.state.ViewBill && this.state.ViewBill ? (
                      <>
                        <div style={{ width: "100%" }} className="">
                          <InvoicGenerator
                            CompanyDetails={this.state.CompanyDetails}
                            BillNumber={this.state.BillNumber}
                            PrintData={this.state.PrintData}
                            Applied_Charges={this.state.Applied_Charges}
                            AllbillMerged={this.state.AllbillMerged}
                            wordsNumber={this.state.wordsNumber}
                            sgst={this.state.sgst}
                            cgst={this.state.cgst}
                            deliveryCharges={this.state.deliveryCharges}
                            otherCharges={this.state.otherCharges}
                            discount={this.state.discount}
                            // AddedBill={AddedBill}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ width: "100%" }} className="">
                          <Form onSubmit={e => this.handleSubmit(e)}>
                            <Row className="main div heading px-3 py-3">
                              <Col lg="6" className="mb-2">
                                <Label>SGST</Label>
                                <select
                                  required
                                  className="form-control"
                                  value={this.state.sgst}
                                  onChange={this.changeHandler}
                                  name="sgst"
                                >
                                  <option value="not selected">
                                    --Select--
                                  </option>
                                  <option value="5">5%</option>
                                  <option value="9">9%</option>
                                  <option value="12">12%</option>
                                </select>
                              </Col>
                              <Col lg="6" className="mb-2">
                                <Label>CGST</Label>
                                <select
                                  required
                                  className="form-control"
                                  name="cgst"
                                  placeholder="Enter CGST"
                                  value={this.state.cgst}
                                  onChange={this.changeHandler}
                                >
                                  <option value="not selected">
                                    --Select--
                                  </option>
                                  <option value="5">5%</option>
                                  <option value="9">9%</option>
                                  <option value="12">12%</option>
                                </select>
                              </Col>
                              <Col lg="6">
                                <Label className="mt-2">Other Charges</Label>
                                <Input
                                  type="number"
                                  name="otherCharges"
                                  placeholder="Enter Other Charges"
                                  value={this.state.otherCharges}
                                  onChange={this.changeHandler}
                                ></Input>
                              </Col>
                              <Col lg="6">
                                <Label className="mt-2">Delivery Charges</Label>
                                <Input
                                  type="number"
                                  name="deliveryCharges"
                                  placeholder="Enter Delivery Charges"
                                  value={this.state.deliveryCharges}
                                  onChange={this.changeHandler}
                                ></Input>
                              </Col>
                              <Col lg="6">
                                <Label className="mt-2">Discount </Label>
                                <Input
                                  type="number"
                                  name="discount"
                                  placeholder="Enter discount value"
                                  value={this.state.discount}
                                  onChange={this.changeHandler}
                                ></Input>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12" className="mt-2 mb-2">
                                <div className="d-flex justify-content-center">
                                  <Button
                                    disabled={
                                      this.state.ButtonText === "InProcess"
                                        ? true
                                        : false
                                    }
                                    color="primary"
                                    type="submit"
                                  >
                                    {this.state.ButtonText}
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <Form className="m-1" onSubmit={this.submitHandler}>
                      <Row className="mb-2">
                        <Col lg="4" md="4" className="mb-2">
                          <Label>Logo Position</Label>
                          <CustomInput
                            type="select"
                            placeholder="Select Type"
                            name="logoposition"
                            value={this.state.logoposition}
                            onChange={this.changeHandler}
                          >
                            <option>---Select---</option>
                            <option value="Left">Left</option>
                            <option value="right">Right</option>
                          </CustomInput>
                        </Col>
                        <Col lg="4" md="4" className="mb-2">
                          <Label>ship to position</Label>
                          <CustomInput
                            type="select"
                            placeholder="Select Type"
                            name="shipto"
                            value={this.state.shipto}
                            onChange={this.changeHandler}
                          >
                            <option>---Select---</option>
                            <option value="Left">Left</option>
                            <option value="right">Right</option>
                          </CustomInput>
                          <span>
                            {this.state.shipto == this.state.Billtoposition ? (
                              <span style={{ color: "red" }}>
                                Bill to and ship to cannot be same
                              </span>
                            ) : null}
                          </span>
                        </Col>

                        <Col lg="4" md="4" className="mb-2">
                          <Label>Bill to position</Label>
                          <CustomInput
                            type="select"
                            placeholder="Select Type"
                            name="Billtoposition"
                            value={this.state.Billtoposition}
                            onChange={this.changeHandler}
                          >
                            <option>---Select---</option>
                            <option value="Left">Left</option>
                            <option value="right">Right</option>
                          </CustomInput>
                          <span>
                            {this.state.shipto == this.state.Billtoposition ? (
                              <span style={{ color: "red" }}>
                                Bill to and ship to cannot be same
                              </span>
                            ) : null}
                          </span>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <div className="d-flex justify-content-center">
                            <Button.Ripple
                              color="primary"
                              type="submit"
                              className="mr-1 mb-1"
                            >
                              Submit
                            </Button.Ripple>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </>
                )}
              </>
            )}
          </ModalBody>
        </Modal>
      </>
    );
  }
}
export default InvoiceGenerator;
