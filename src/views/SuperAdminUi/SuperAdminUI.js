import React, { useEffect, useState } from "react";
import { Button, Col, CustomInput, Row } from "reactstrap";

const SuperAdminUI = () => {
  const [SuperAdminList, setSuperAdminList] = useState([]);
  useEffect(() => {}, []);

  return (
    <div>
      <Row>
        <Col lg="8" sm="6" md="8">
          <CustomInput type="select">
            <option>--select SuperAdmin--</option>
            <option>ffaaf</option>
            <option>ffaaf</option>
            <option>ffaaf</option>
          </CustomInput>
        </Col>
        <Col>
          <Button color="primary">Submit</Button>
        </Col>
      </Row>
    </div>
  );
};

export default SuperAdminUI;
