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
import DummyTestHeirarchy from "./DummyTestHeirarchy";
import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";

import { Get_RoleList } from "../../../../ApiEndPoint/ApiCalling";

import "../../../../assets/scss/pages/users.scss";
import UserContext from "../../../../context/Context";
import { CloudLightning } from "react-feather";
import { FaPlus } from "react-icons/fa";

const CreateHeirarchy = ({ EditOneData }) => {
  const [parentValue, setParentValue] = useState("");
  const [childValue, setChildValue] = useState("");
  const [hierarchy, setHierarchy] = useState({});
  const [dropdownValue, setdropdownValue] = useState({});
  const [dropdownValuesecond, setdropdownValueSecond] = useState({});
  const [Parent, setParent] = useState("Parent");
  const [Error, setError] = useState("");
  const [Child, setChild] = useState("Child");

  const Context = useContext(UserContext);

  const handleParentChange = event => {
    const selectedParent = event.target.value;
    setParentValue(selectedParent);

    // Set hierarchy for the selected parent
    setHierarchy(prevHierarchy => ({
      ...prevHierarchy,
      [selectedParent]: 1,
    }));

    // Clear child value when parent changes
    setChildValue("");
  };

  const handleChildChange = event => {
    const selectedChild = event.target.value;
    setChildValue(selectedChild);

    // Set hierarchy for the selected child
    setHierarchy(prevHierarchy => ({
      ...prevHierarchy,
      [selectedChild]: hierarchy[parentValue] + 1,
    }));
  };
  // above latest code//

  useEffect(() => {
    if (Parent == Child) {
      swal("You Can not Select Same in Parent and Child");
      setError("Select Different Values in Parent and Child");
    }
  }, [Parent, Child]);

  useEffect(() => {
    let userdata = JSON.parse(localStorage.getItem("userData"));
    Get_RoleList(userdata?._id, userdata?.database)
      .then(res => {
        setdropdownValue(res?.Role);
        setdropdownValueSecond(res?.Role);
        console.log(res?.Role);
      })
      .catch(err => {
        console.log(err);
        swal("Roles List Not found");
      });
  }, []);

  const submitHandler = e => {
    e.preventDefault();
    // console.log(EditOneData);
    // console.log(formData);

    console.log(Parent);
    console.log(dropdownValue);
    let Secondary = dropdownValuesecond?.filter(
      (ele, i) => ele?._id !== Parent
    );
    console.log(Secondary);
    setdropdownValueSecond(Secondary);
    debugger;
    // setdropdownValueSecond;

    debugger;
    if (localStorage.getItem("Herirarchy_postion")) {
      let current_position = localStorage.getItem("Herirarchy_postion");

      localStorage.setItem("Herirarchy_postion", current_position + 1);
    } else {
      localStorage.setItem("Herirarchy_postion", 0);
    }
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
                      onClick={() => history.goBack()}
                    >
                      {" "}
                      Back
                    </Button>
                  )}
                />
              </div>
            </Col>
          </Row>
          {/* <hr /> */}
          <DummyTestHeirarchy />
          <div className="d-flex justify-content-center">
            <span style={{ color: "red" }}>
              {Error && Error ? <>{Error}</> : null}
            </span>
          </div>

          <div className="container">
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                <Col lg="4" md="4">
                  <FormGroup>
                    <Label>Select Parent</Label>
                    <CustomInput
                      required
                      type="select"
                      name="rolename"
                      onChange={e => {
                        setParent(e.target.value);
                        let Secondary = dropdownValuesecond?.filter(
                          (ele, i) => ele?._id !== e.target.value
                        );
                        console.log(Secondary);
                        setdropdownValueSecond(Secondary);
                      }}
                    >
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
                      onChange={e => setChild(e.target.value)}
                    >
                      <option value="Child">--Select Child--</option>
                      {dropdownValuesecond &&
                        dropdownValuesecond?.length &&
                        dropdownValuesecond?.map((ele, i) => {
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
                  className="mr-1 mt-2 mx-2"
                >
                  Submit
                </Button.Ripple>
              </Row>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default CreateHeirarchy;
