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
import "react-phone-input-2/lib/style.css";
import "../../../../../src/layouts/assets/scss/pages/users.scss";
import {
  GoodDispatchxmlView,
  EditGoodDispatch,
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
import UserContext from "../../../../context/Context";

const GoodDispatchEdit = ({ EditOneData }) => {
  const [CreatAccountView, setCreatAccountView] = useState([]);
  const [formData, setFormData] = useState({});
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [permissions, setpermissions] = useState({});

  const Context = useContext(UserContext);

  const handleInputChange = (e, type, i) => {
    const { name, value, checked } = e.target;
    setindex(i);
    // if (type == "checkbox") {
    //   if (checked) {
    //     setFormData({
    //       ...formData,
    //       [name]: checked,
    //     });
    //   } else {
    //     setFormData({
    //       ...formData,
    //       [name]: checked,
    //     });
    //   }
    // }
    // else {
    //   if (type == "number") {
    //     if (/^\d{0,10}$/.test(value)) {
    //       setFormData({
    //         ...formData,
    //         [name]: value,
    //       });
    //       setError("");
    //     } else {
    //       setError(
    //         "Please enter a valid number with a maximum length of 10 digits"
    //       );
    //     }
    //   }
    //   else {
    if (value.length <= 10) {
      setFormData({
        ...formData,
        [name]: value,
      });
      setError("");
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    //   }
    // }
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  useEffect(() => {
    console.log(EditOneData);
    setFormData(EditOneData);
  }, []);
  useEffect(() => {
    GoodDispatchxmlView()
      .then(res => {
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        console.log(JSON.parse(jsonData)?.GoodDispatch?.input);
        setCreatAccountView(JSON.parse(jsonData)?.GoodDispatch?.input);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const submitHandler = e => {
    e.preventDefault();
    console.log(formData);
    debugger;
    // if (error) {
    //   swal("Error occured while Entering Details");
    // } else {
    EditGoodDispatch(EditOneData?._id, formData)
      .then(res => {
        setFormData({});
        console.log(res);
        //   if (res.status) {
        // window.location.reload();
        swal("Good Dispatch Updated Successfully");
        //   }
      })
      .catch(err => {
        console.log(err);
      });
    // }
  };

  return (
    <div>
      <div>
        <Card>
          <Form className="mr-1 ml-1" onSubmit={submitHandler}>
            <Row className="mb-2">
              {CreatAccountView &&
                CreatAccountView?.map((ele, i) => {
                  console.log(ele?.type?._attributes?.type);

                  if (ele?.type?._attributes?.type == "text") {
                    console.log(ele?.name?._text);
                    return (
                      <Col key={i} lg="3" md="3" sm="12">
                        <FormGroup key={i}>
                          <Label>{ele?.label?._text}</Label>
                          <Input
                            type={ele?.type?._attributes?.type}
                            placeholder={ele?.placeholder?._text}
                            name={ele?.name?._text}
                            value={formData[ele?.name?._text]}
                            onChange={e => {
                              handleInputChange(
                                e,
                                ele?.type?._attributes?.type,
                                i
                              );
                            }}
                          />
                          {index === i ? (
                            <>
                              {error && (
                                <span style={{ color: "red" }}>{error}</span>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </FormGroup>
                      </Col>
                    );
                  } else if (ele?.type?._attributes?.type == "file") {
                    console.log("fill", ele?.name?._text);
                    return (
                      <Col key={i} lg="3" md="3" sm="12">
                        <FormGroup key={i}>
                          <Label className="">{ele?.label?._text}</Label>
                          <Input
                            type={ele?.type?._attributes?.type}
                            name={ele?.name?._text}
                            // value={formData[ele?.name?._text]}
                            onChange={e => {
                              handleInputChange(
                                e,
                                ele?.type?._attributes?.type,
                                i
                              );
                            }}
                          />

                          {index === i ? (
                            <>
                              {error && (
                                <span style={{ color: "red" }}>{error}</span>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </FormGroup>
                      </Col>
                    );
                  } else {
                    return (
                      <Col key={i} lg="3" md="3" sm="12">
                        <FormGroup key={i}>
                          <Label>{ele?.label?._text}</Label>
                          <Input
                            type={ele?.type?._attributes?.type}
                            placeholder={ele?.placeholder?._text}
                            name={ele?.name?._text}
                            value={formData[ele?.name?._text]}
                          />
                          {index === i ? (
                            <>
                              {error && (
                                <span style={{ color: "red" }}>{error}</span>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </FormGroup>
                      </Col>
                    );
                  }
                })}
            </Row>
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
        </Card>
      </div>
    </div>
  );
};
export default GoodDispatchEdit;
