// import React from "react";

// const CreateHeirarchy = () => {
//   return (
//     <div>
//       <div className="d-flex justify-content-center">
//         <h4>Create Hierarchy</h4>
//       </div>
//     </div>
//   );
// };

// export default CreateHeirarchy;

import React, { useEffect, useState, useContext } from "react";
import xmlJs from "xml-js";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
  Badge,
} from "reactstrap";
import { history } from "../../../../history";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import moment from "moment-timezone";
import { Route } from "react-router-dom";

import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";

import {
  CreateAccountSave,
  CreateAccountUpdate,
  CreateAccountView,
  Get_RoleList,
} from "../../../../ApiEndPoint/ApiCalling";
import { BiEnvelope } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import "../../../../assets/scss/pages/users.scss";
import UserContext from "../../../../context/Context";
import { CloudLightning } from "react-feather";
import { FaPlus } from "react-icons/fa";

const CreateHeirarchy = ({ EditOneData }) => {
  const [dropdownValue, setdropdownValue] = useState({});
  const [Parent, setParent] = useState("Parent");
  const [Error, setError] = useState("");
  const [Child, setChild] = useState("Child");

  const Context = useContext(UserContext);
  useEffect(() => {
    if (Parent == Child) {
      swal("You Can not Select Same in Parent and Child");
      setError("Select Different Values in Parent and Child");
    }
  }, [Parent, Child]);

  useEffect(() => {
    Get_RoleList()
      .then((res) => {
        setdropdownValue(res?.Role);
      })
      .catch((err) => {
        console.log(err);
        swal("Roles List Not found");
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(EditOneData);
    // console.log(formData);
  };

  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Create Hierarchy</h1>
            </Col>
            <Col>
              <div className="float-right">
                <Route
                  render={({ history }) => (
                    <Button
                      style={{ cursor: "pointer" }}
                      className="float-right mr-1"
                      color="primary"
                      onClick={() => history.goBack()}>
                      {" "}
                      Back
                    </Button>
                  )}
                />
              </div>
            </Col>
          </Row>
          {/* <hr /> */}
          <div className="d-flex justify-content-center">
            <span style={{ color: "red" }}>
              {Error && Error ? <>{Error}</> : null}
            </span>
          </div>
          <Form className="m-1" onSubmit={submitHandler}>
            <Row className="mb-2">
              <Col lg="4" md="4">
                <FormGroup>
                  <Label>Select Parent</Label>
                  <CustomInput
                    required
                    type="select"
                    name="rolename"
                    onChange={(e) => setParent(e.target.value)}>
                    <option value="Parent">--Select Parent--</option>
                    {dropdownValue &&
                      dropdownValue?.length &&
                      dropdownValue?.map((ele, i) => {
                        return (
                          <option value={ele?._id}>{ele?.roleName}</option>
                        );
                      })}
                  </CustomInput>
                </FormGroup>
              </Col>
              <Col lg="4" md="4">
                <FormGroup>
                  <Label>Select Child</Label>
                  <CustomInput
                    required
                    type="select"
                    name="rolename"
                    onChange={(e) => setChild(e.target.value)}>
                    <option value="Child">--Select Child--</option>
                    {dropdownValue &&
                      dropdownValue?.length &&
                      dropdownValue?.map((ele, i) => {
                        return (
                          <option value={ele?._id}>{ele?.roleName}</option>
                        );
                      })}
                  </CustomInput>
                </FormGroup>
              </Col>
            </Row>

            <hr />

            {/* <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
              <Label className="mb-0">Status</Label>
              <div
                className="form-label-group"
                // onChange={(e) => {
                //   setFormData({
                //     ...formData,
                //     ["status"]: e.target.value,
                //   });
                // }}
              >
                <input
                  style={{ marginRight: "3px" }}
                  type="radio"
                  name="status"
                  value="Active"
                />
                <span style={{ marginRight: "20px" }}>Active</span>

                <input
                  // checked={status == "Inactive"}
                  style={{ marginRight: "3px" }}
                  type="radio"
                  name="status"
                  value="Deactive"
                />
                <span style={{ marginRight: "3px" }}>Deactive</span>
              </div>
            </Col> */}
            <Row>
              <Button.Ripple
                color="primary"
                type="submit"
                className="mr-1 mt-2 mx-2">
                Submit
              </Button.Ripple>
            </Row>
          </Form>
        </Card>
      </div>
    </div>
  );
};
export default CreateHeirarchy;