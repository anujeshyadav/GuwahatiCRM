import React, { useEffect, useState } from "react";
import { Button, Col, CustomInput, Row } from "reactstrap";
import { Super_Admin_List } from "../../ApiEndPoint/Api";
import { _Get, _GetList } from "../../ApiEndPoint/ApiCalling";

const SuperAdminUI = ({ onDropdownChange, onSubmit }) => {
  const [SuperAdminList, setSuperAdminList] = useState([]);
  const [selectedSuperAdmin, setSelectedSuperAdmin] = useState("");
  const [selectedSuperAdminName, setSelectedSuperAdminName] = useState("");

  useEffect(() => {
    // Super_Admin_List;
    _GetList(Super_Admin_List)
      .then((res) => {
        console.log(res?.SuperAdmin);
        setSuperAdminList(res?.SuperAdmin);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function passed from the parent component
    onSubmit(e);
  };
  const handleDropdownChange = (e) => {
    const selectedName = e.target.options[e.target.selectedIndex]
      .getAttribute("data-name")
      ?.split(" ")[0];
    const selectedValue =
      e.target.options[e.target.selectedIndex].getAttribute("data-name");
    setSelectedSuperAdmin(selectedName);
    setSelectedSuperAdminName(selectedName);
    onDropdownChange(selectedValue);
  };
  console.log(selectedSuperAdmin);
  return (
    <div>
      <Row>
        <Col lg="6" sm="6" md="6">
          <CustomInput
            value={selectedSuperAdmin}
            onChange={handleDropdownChange}
            type="select">
            <option>--select SuperAdmin--</option>
            {SuperAdminList &&
              SuperAdminList?.map((ele, i) => (
                <option
                  data-name={`${ele?._id} ${ele?.database}`}
                  value={ele?._id}>
                  {ele?.firstName} {ele?.lastName}
                </option>
              ))}
          </CustomInput>
        </Col>
        <Col>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SuperAdminUI;
