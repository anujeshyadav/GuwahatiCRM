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
  Get_RoleList,
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
import UserContext from "../../../../context/Context";

const GoodDispatchView = ({ ViewOneData }) => {
  const [CreatAccountView, setCreatAccountView] = useState([]);
  const [formData, setFormData] = useState({});
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [permissions, setpermissions] = useState({});

  const Context = useContext(UserContext);

  const handleInputChange = (e, type, i) => {
    const { name, value, checked } = e.target;
    setindex(i);
    if (type == "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          [name]: checked,
        });
      } else {
        setFormData({
          ...formData,
          [name]: checked,
        });
      }
    } else {
      if (type == "number") {
        if (/^\d{0,10}$/.test(value)) {
          setFormData({
            ...formData,
            [name]: value,
          });
          setError("");
        } else {
          setError(
            "Please enter a valid number with a maximum length of 10 digits"
          );
        }
      } else {
        if (value.length <= 10) {
          setFormData({
            ...formData,
            [name]: value,
          });
          // console.log(value);
          setError("");
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
          // setError("Input length exceeds the maximum of 10 characters");
        }
      }
    }
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  useEffect(() => {
    console.log(ViewOneData);
    setFormData(ViewOneData);
  }, []);
  useEffect(() => {
    // console.log(ViewOneData);

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

  return (
    <div>
      <div>
        <Card>
          <Form className="mr-1 ml-1">
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
                          <Label className="m-2">{ele?.label?._text}</Label>
                          <img
                            // className="form-control"
                            src={`http://64.227.162.41:5000/Images/${
                              formData[ele?.name?._text]
                            }`}
                            alt="image"
                            width={50}
                            height={50}
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
          </Form>
        </Card>
      </div>
    </div>
  );
};
export default GoodDispatchView;
