import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Label,
  Input,
  Card,
  CardTitle,
  CustomInput,
} from "reactstrap";
import "../../../assets/scss/pages/users-profile.scss";
import CheckBoxesVuexy from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";
import { EditUserProfile } from "../../../ApiEndPoint/ApiCalling";
import UserContext from "../../../context/Context";
import moment from "moment-timezone";

class UserProfile extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      LoginData: {},
      Update_User_details: {},
      email: "",
      cnfmPassword: "",
      password: "",
      Role: "",
      adminimg: "",
      Date_format: "",
      Date_Time_format: "",
      Currency: "",
      selectedName: "",
      Locale: "",
      Loading: "Submit",
      T_Zone: "",
      selectedFile: null,
      data: {},
    };
  }

  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    // console.log(event.target.files[0]);
  };

  componentDidMount() {
    console.log(this.context);
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    console.log(pageparmission);
    this.setState({ LoginData: pageparmission });

    this.setState({
      // data: response.data.data,
      name: pageparmission?.name,
      email: pageparmission?.email,
      mobile: pageparmission?.mobile,
      Role: pageparmission?.Role,
      Date_format: pageparmission.dateFormat,
      Locale: pageparmission?.locale,
      Date_Time_format: pageparmission?.dateTimeFormat,
      T_Zone: pageparmission?.timeZone,
      Currency: pageparmission?.currency,
      // cnfmPassword: pageparmission?.Userinfo?.password,
    });
    if (
      pageparmission?.currency == undefined ||
      pageparmission?.currency == null
    ) {
      this.setState({ Currency: "USD" });
    }
    // console.log(this.context);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ Loading: "Loading..." });
    let userData = JSON.parse(localStorage.getItem("userData"));
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("email", this.state.email);
    // data.append("id", userData?._id);
    if (this.state.password) {
      data.append("Password", this.state.password);
    }
    // data.append("cnfmPassword", this.state.cnfmPassword);
    data.append("dateFormat", this.state.Date_format);
    data.append("dateTimeFormat", this.state.Date_Time_format);
    data.append("locale", this.state.Locale);
    data.append("timeZone", this.state.T_Zone);
    data.append("currency", this.state.Currency);
    if (this.state.selectedFile !== null) {
      data.append("file", this.state.selectedFile);
    }
    if (this.state.password) {
      if (this.state.password == this.state.cnfmPassword) {
        EditUserProfile(userData?.accountId, data)
          .then((response) => {
            console.log(response);
            let userData = { ...response?.updateUser[0], ...response?.user };
            this.context?.setUserInformatio(userData);
            localStorage.setItem("userData", JSON.stringify(userData));

            if (response?.status) {
              swal("Success!", "Updated Successfully", "success");
              this.setState({ Loading: "Submit" });
            }
            // window.location.reload("/#/pages/profile");
          })
          .catch((error) => {
            console.log("dddddd");
            swal("Error!", "Something went Wrong", "error");
            this.setState({ Loading: "Submit" });
            console.log(error.response);
          });
      } else {
        swal("Password Does Not Match");
        this.setState({ Loading: "Submit" });
      }
    } else {
      EditUserProfile(userData?.accountId, data)
        .then((response) => {
          console.log(response);
          let userData = { ...response?.updateUser[0], ...response?.user };
          this.context?.setUserInformatio(userData);
          localStorage.setItem("userData", JSON.stringify(userData));

          if (response?.status) {
            swal("Success!", "Updated Successfully", "success");
            this.setState({ Loading: "Submit" });
          }
          // window.location.reload("/#/pages/profile");
        })
        .catch((error) => {
          console.log("object");
          swal("Error!", "Something went Wrong", "error");
          console.log(error.response);
          this.setState({ Loading: "Submit" });
        });
    }
    // for (var value of data.values()) {
    //   console.log(value);
    // }

    // for (var key of data.keys()) {
    //   console.log(key);
    // }
  };
  render() {
    console.log(this.context?.UserInformatio);
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Profile"
          breadCrumbParent="Pages"
          breadCrumbActive="Profile"
        />
        <div id="user-profile">
          <Row className="m-0 justify-content-center">
            <Col lg="4" md="4" xl="4" sm="12">
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <div className="profile-img text-center st-1">
                  {this.state.LoginData?.profileImage ? (
                    <>
                      <img
                        src={`http://65.0.96.247:8000//Images/${this.context?.UserInformatio?.profileImage}`}
                        alt="adminimg"
                        className="img-fluid img-border rounded-circle box-shadow-1 mt-1"
                        width="250px"
                        height="280px"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={`http://65.0.96.247:8000//Images/${this.context?.UserInformatio?.profileImage}`}
                        alt="adminimg"
                        className="img-fluid img-border rounded-circle box-shadow-1 mt-1"
                        width="210px"
                        height="280px"
                      />
                    </>
                  )}
                  <ul
                    style={{ listStyleType: "none" }}
                    className="lst-1 usrdatlist"
                  >
                    <li className="lst-2 p-1">
                      Name:{" "}
                      <span className="lst-3">
                        <strong>{this.state.LoginData?.name}</strong>
                      </span>
                    </li>
                    <li className="lst-2 p-1">
                      Email:{" "}
                      <span className="lst-3">
                        <strong>{this.context?.UserInformatio?.email}</strong>
                      </span>
                    </li>
                    <li className="lst-2 p-1">
                      Role:
                      <span className="lst-3">
                        <strong>{this.context?.UserInformatio?.Role}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col
              sm="12"
              xl="8"
              lg="8"
              md="8"
              className="d-flex justify-content-center"
            >
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <Form className="m-1" onSubmit={this.submitHandler}>
                  <div className="st-2">
                    <CardTitle>
                      <h4 className="mb-3">Edit Profile</h4>
                      <Col></Col>
                    </CardTitle>

                    <Row className="m-0">
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>UserName</Label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={this.state.name}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Email</Label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="email"
                          value={this.state.email}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Password</Label>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.changeHandler}
                        />
                      </Col>

                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Confirm Password</Label>
                        <Input
                          type="password"
                          name="cnfmPassword"
                          placeholder="Reset password"
                          value={this.state.cnfmPassword}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>User Image</Label>
                        <Input
                          className="form-control"
                          type="file"
                          name="profileImage"
                          onChange={this.onChangeHandler}
                        />
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Locale</Label>
                        <CustomInput
                          name="Locale"
                          value={this.state.Locale}
                          onChange={this.changeHandler}
                          required
                          type="select"
                        >
                          <option value="NA">--Select--</option>
                          <option value="en_US">English (United States)</option>
                          <option value="en_GB">
                            English (United Kingdom)
                          </option>
                          <option value="fr_FR">French (France)</option>
                          <option value="es_ES">es_ES Spanish (Spain)</option>
                          <option value="de_DE">German (Germany)</option>
                          <option value="it_IT">Italian (Italy)</option>
                          <option value="ja_JP">Japanese (Japan)</option>
                          <option value="zh_CN">Chinese ( China)</option>
                          <option value="ru_RU"> Russian (Russia)</option>
                          <option value="ar_SA">Arabic (Saudi Arabia)</option>
                          <option value="pt_BR">Portuguese (Brazil)</option>
                          <option value="ko_KR">Korean (South Korea)</option>

                          <option value="hi_IN">Hindi(India)</option>
                          <option value="tr_TR">Turkish (Turkey)</option>
                          <option value="nl_NL">Dutch (Netherlands)</option>
                          <option value="sv_SE">Swedish (Sweden)</option>
                          <option value="pl_PL">Polish (Poland)</option>
                          <option value="no_NO">Norwegian (Norway)</option>
                          <option value="fi_FI">Finnish (Finland)</option>
                          <option value="da_DK">Danish (Denmark)</option>
                        </CustomInput>
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Time Zone</Label>
                        <CustomInput
                          name="T_Zone"
                          value={this.state.T_Zone}
                          onChange={this.changeHandler}
                          required
                          type="select"
                        >
                          <option value="us">--Select--</option>
                          <option value="Etc/UTC">
                            Coordinated Universal Time (UTC)
                          </option>
                          <option value="GMT">Greenwich Mean Time (GMT)</option>
                          <option value="Europe/London-BST">
                            British Summer Time (BST)
                          </option>
                          <option value="Europe/Berlin-CST">
                            Central European Time (CET)
                          </option>
                          <option value="Europe/Berlin-CEST">
                            Central European Summer Time (CEST)
                          </option>

                          <option value="America/Los_Angeles-PST">
                            Pacific Standard Time (PST)
                          </option>
                          <option value="America/Los_Angeles-PDT">
                            Pacific Daylight Time (PDT)
                          </option>
                          <option value="CST">
                            (Central Standard Time - CST)
                          </option>
                          <option value="America/Phoenix-MST">
                            (Mountain Standard Time - MST)
                          </option>
                          <option value="America/Denver-MDT">
                            (Mountain Daylight Time - MDT)
                          </option>
                          <option value="America/Chicago-CDT">
                            (Central Daylight Time - CDT)
                          </option>
                          <option value="America/New_York-EDT">
                            Eastern Daylight Time (EDT)
                          </option>
                          <option value="Pacific/Honolulu -HST">
                            Hawaii Standard Time (HST)
                          </option>
                          <option value="America/Anchorage-AKST">
                            Alaska Standard Time (AKST)
                          </option>
                          <option value="America/Anchorage-AKDT">
                            Alaska Daylight Time (AKDT)
                          </option>
                          <option value="Australia/Sydney-AEST">
                            Australian Eastern Standard Time (AEST)
                          </option>
                          <option value="Australia/Sydney-AEDT">
                            Australian Eastern Daylight Time (AEDT)
                          </option>
                          <option value="Asia/Tokyo-JST">
                            Japan Standard Time (JST)
                          </option>
                          <option value="Asia/Shanghai-CST">
                            China Standard Time (CST)
                          </option>
                          <option value="Asia/Calcutta-IST">
                            Indian Standard Time (IST)
                          </option>
                          {/* <option value="AST">
                            Arabian Standard Time (AST)
                          </option> */}
                          {/* <option value="GST">Gulf Standard Time (GST)</option> */}
                          {/* <option value="SAST">
                            South Africa Standard Time (SAST)
                          </option> */}
                        </CustomInput>
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Date-Format</Label>
                        <CustomInput
                          name="Date_format"
                          value={this.state.Date_format}
                          onChange={this.changeHandler}
                          required
                          type="select"
                        >
                          <option value="us">--Select--</option>

                          <option value="YYYY-MM-DD">
                            YYYY-MM-DD (e.g., 2023-10-16)
                          </option>
                          <option value="MM/DD/YYYY">
                            MM/DD/YYYY (e.g., 10/16/2023)
                          </option>
                          <option value="DD/MM/YYYY">
                            DD/MM/YYYY (e.g., 16/10/2023)
                          </option>
                          <option value="MMM D, YYYY">
                            MMM D, YYYY (e.g., Oct 16, 2023)
                          </option>
                          <option value="D MMM, YYYY">
                            D MMM, YYYY (e.g., 16 Oct, 2023)
                          </option>
                          <option value="MMMM D, YYYY">
                            MMMM D, YYYY (e.g., October 16, 2023)
                          </option>
                          <option value="D of MMMM, YYYY">
                            D of MMMM, YYYY (e.g., 16 of October, 2023)
                          </option>
                        </CustomInput>
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Date-Time-Format</Label>
                        <CustomInput
                          name="Date_Time_format"
                          value={this.state.Date_Time_format}
                          onChange={this.changeHandler}
                          required
                          type="select"
                        >
                          <option value="us">--Select--</option>

                          <option value="YYYY-MM-DD HH:mm:ss">
                            YYYY-MM-DD HH:mm:ss (e.g., 2023-10-16 15:30:45)
                          </option>
                          <option value="MM/DD/YYYY h:mm A">
                            MM/DD/YYYY h:mm A (e.g., 10/16/2023 3:30 PM)
                          </option>
                          <option value="DD/MM/YYYY HH:mm">
                            DD/MM/YYYY HH:mm (e.g., 16/10/2023 15:30)
                          </option>
                          <option value="MMM D, YYYY h:mm A">
                            MMM D, YYYY h:mm A (e.g., Oct 16, 2023 3:30 PM)
                          </option>
                          <option value="D MMM, YYYY HH:mm">
                            D MMM, YYYY HH:mm (e.g., 16 Oct, 2023 15:30)
                          </option>
                          <option value="MMMM D, YYYY h:mm A">
                            MMMM D, YYYY h:mm A (e.g., October 16, 2023 3:30 PM)
                          </option>
                          <option value="D of MMMM, YYYY HH:mm">
                            D of MMMM, YYYY HH:mm (e.g., 16 of October, 2023
                            15:30)
                          </option>
                        </CustomInput>
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Currency</Label>
                        <CustomInput
                          name="Currency"
                          value={this.state.Currency}
                          onChange={this.changeHandler}
                          required
                          type="select"
                        >
                          <option value="NS">--Select--</option>
                          <option value="USD_$">USD</option>
                          <option value="AED_AED">AED</option>
                          <option value="ARS_$">ARS</option>
                          <option value="AUD_$">AUD</option>
                          <option value="BGN_лв">BGN</option>
                          <option value="BRL_R$">BRL</option>
                          <option value="BSD_$">BSD</option>
                          <option value="CAD_$">CAD</option>
                          <option value="CLP_$">CLP</option>
                          <option value="CNY_¥">CNY</option>
                          <option value="COP_$">COP</option>
                          <option value="CZK_Kč">CZK</option>
                          <option value="DKK_kr">DKK</option>
                          <option value="DOP_RD$">DOP</option>
                          <option value="EGP_£">EGP</option>
                          <option value="EUR_€">EUR</option>
                          <option value="FJD_$">FJD</option>
                          <option value="GBP_£">GBP</option>
                          <option value="GTQ_Q">GTQ</option>
                          <option value="HKD_$">HKD</option>
                          <option value="HUF_Ft">HUF</option>
                          <option value="IDR_Rp">IDR</option>
                          <option value="ILS_₪">ILS</option>
                          <option value="INR_₹">INR</option>
                          <option value="ISK_kr">ISK</option>
                          <option value="JPY_¥">JPY</option>
                          <option value="KRW_₩">KRW</option>
                          <option value="KZT_лв">KZT</option>
                          <option value="MXN_$">MXN</option>
                          <option value="MYR_RM">MYR</option>
                          <option value="NOK_kr">NOK</option>
                          <option value="NZD_$">NZD</option>
                          <option value="PAB_B/.">PAB</option>
                          <option value="PEN_S/.">PEN</option>
                          <option value="PHP_₱">PHP</option>
                          <option value="PKR_₨">PKR</option>
                          <option value="PLN_zł">PLN</option>
                          <option value="PYG_Gs">PYG</option>
                          <option value="RON_lei">RON</option>
                          <option value="RUB_₽">RUB</option>
                          <option value="SEK_kr">SEK</option>
                          <option value="SGD_$">SGD</option>
                          <option value="THB_฿">THB</option>
                          {/* <option value="TRY_">TRY</option> */}
                          <option value="TWD_NT$">TWD</option>
                          <option value="UAH_₴">UAH</option>
                          <option value="UYU_$U">UYU</option>
                        </CustomInput>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <CheckBoxesVuexy
                          color="primary"
                          className="mb-1 mx-1"
                          icon={<Check className="vx-icon" size={16} />}
                          label=" I accept the terms & conditions."
                          defaultChecked={true}
                        />
                      </Col>
                    </Row>
                    <div className="d-flex justify-content-between">
                      <Button.Ripple color="primary" type="submit">
                        {this.state.Loading}
                      </Button.Ripple>
                    </div>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default UserProfile;
