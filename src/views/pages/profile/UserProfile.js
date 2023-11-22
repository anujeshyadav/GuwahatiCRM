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
  CustomInput, FormGroup,
} from "reactstrap";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import CheckBoxesVuexy from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";
import { EditUserProfile } from "../../../ApiEndPoint/ApiCalling";
import "../../../assets/scss/pages/users-profile.scss";
import UserContext from "../../../context/Context";
import moment from "moment-timezone";

class UserProfile extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      // formData: {
      //   Country: '',
      //   State: '',
      //   City: '',
      // },

      selectedCountry: null,
      selectedState: null,
      selectedCity: null,
      name: "",
      LoginData: {},
      formData: "",
      email: "",
      cnfmPassword: "",
      password: "",
    };
  }

  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    // console.log(event.target.files[0]);
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedCountry !== prevState.selectedCountry) {
      console.log(this.state.selectedCountry);
      console.log(this.state.selectedCountry?.isoCode);
      console.log(State?.getStatesOfCountry(this.state.selectedCountry?.isoCode));
    }
  }
  componentDidMount() {
    // const countries = Country.getAllCountries();
    // this.setState({ countries });
    console.log(this.context);
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    // console.log(pageparmission);
    this.setState({ LoginData: pageparmission });

    this.setState({
      // data: response.data.data,
      name: pageparmission?.name,
      email: pageparmission?.email,
      cnfmPassword: pageparmission?.Userinfo?.password,
    });
    // if (
    //   pageparmission?.currency == undefined ||
    //   pageparmission?.currency == null
    // ) {
    //   this.setState({ Currency: "USD" });
    // }
    // console.log(this.context);
  }


  // handleCountryChange = (selectedOption) => {
  //   this.setState({
  //     selectedCountry: selectedOption,
  //     formData: {
  //       ...this.state.formData,
  //       Country: selectedOption ? selectedOption.name : '',
  //     },
  //     selectedState: null,
  //     selectedCity: null,
  //   });
  // };

  // handleStateChange = (selectedOption) => {
  //   this.setState({
  //     selectedState: selectedOption,
  //     formData: {
  //       ...this.state.formData,
  //       State: selectedOption ? selectedOption.name : '',
  //     },
  //     selectedCity: null,
  //   });
  // };

  // handleCityChange = (selectedOption) => {
  //   this.setState({
  //     selectedCity: selectedOption,
  //     formData: {
  //       ...this.state.formData,
  //       City: selectedOption ? selectedOption.name : '',
  //     },
  //   });
  // };
  handleCountryChange = (selectedOption) => {
    this.setState({ selectedCountry: selectedOption });
  };

  handleStateChange = (selectedOption) => {
    this.setState({ selectedState: selectedOption });
  };

  handleCityChange = (selectedOption) => {
    this.setState({ selectedCity: selectedOption });
  };
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
    if (this.state.password) {
      data.append("Password", this.state.password);
    }
    data.append("cnfmPassword", this.state.cnfmPassword);
    // data.append("dateFormat", this.state.Date_format);
    // data.append("dateTimeFormat", this.state.Date_Time_format);
    // data.append("locale", this.state.Locale);
    // data.append("timeZone", this.state.T_Zone);
    // data.append("currency", this.state.Currency);
    // if (this.state.selectedFile !== null) {
    //   data.append("file", this.state.selectedFile);
    // }
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
          })
          .catch((error) => {
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
        })
        .catch((error) => {
          console.log("object");
          swal("Error!", "Something went Wrong", "error");
          console.log(error.response);
          this.setState({ Loading: "Submit" });
        });
    }
  };
  render() {
    console.log(this.context?.UserInformatio);
    const { selectedCountry, selectedState, selectedCity } = this.state;
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
                  <ul
                    style={{ listStyleType: "none" }}
                    className="lst-1 usrdatlist"
                  >
                    <li className="lst-2 p-1">
                      FirstName:
                      <span className="lst-3">
                        <strong>{this.state.LoginData?.name}</strong>
                      </span>
                    </li>
                    <li className="lst-2 p-1">
                      LastName:
                      <span className="lst-3">
                        <strong>{this.state.LoginData?.name}</strong>
                      </span>
                    </li>
                    <li className="lst-2 p-1">
                      Email:
                      <span className="lst-3">
                        <strong>{this.context?.UserInformatio?.email}</strong>
                      </span>
                    </li>
                    <li className="lst-2 p-1">
                      Country:
                      <span className="lst-3">
                        <strong>{this.context?.UserInformatio?.email}</strong>
                      </span>
                    </li>
                    <li className="lst-2 p-1">
                      State:
                      <span className="lst-3">
                        <strong>{this.context?.UserInformatio?.email}</strong>
                      </span>
                    </li>
                    <li className="lst-2 p-1">
                      City:
                      <span className="lst-3">
                        <strong>{this.context?.UserInformatio?.email}</strong>
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
                        <Label>FirstName</Label>
                        <Input
                          type="text"
                          name="firstName"
                          placeholder="FirstName"
                          value={this.state.name}
                          onChange={this.changeHandler}
                        />
                      </Col>
                    
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>LastName</Label>
                        <Input
                          type="text"
                          name="lastName"
                          placeholder="LastName"
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

                      <Col lg="6" md="6" sm="12">
                        <FormGroup>
                          <Label>Select Country</Label>
                          <Select
                            options={Country.getAllCountries()}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.name}
                            value={selectedCountry}
                            onChange={this.handleCountryChange}
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="6" md="6" sm="12">
                        <FormGroup>
                          <Label>Select State</Label>
                          <Select
                            options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.name}
                            value={selectedState}
                            onChange={this.handleStateChange}
                          />

                        </FormGroup>
                      </Col>
                      <Col lg="6" md="6" sm="12">
                        <FormGroup>
                          <Label>Select City</Label>
                          <Select
                            options={City.getCitiesOfState(selectedState?.countryCode, selectedState?.isoCode)}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.name}
                            value={selectedCity}
                            onChange={this.handleCityChange}
                          />
                        </FormGroup>
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