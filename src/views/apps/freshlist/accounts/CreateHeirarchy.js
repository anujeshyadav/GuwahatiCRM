import React, { useEffect, useState } from "react";
import "./Tree.css";
import { Button, Card, Col, Row } from "reactstrap";
import { Route } from "react-router-dom";
import { Deptartment_with_Role } from "../../../../ApiEndPoint/Api";
import { _Get } from "../../../../ApiEndPoint/ApiCalling";

const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container mt-1 mb-2 mainheader">
      <div className="d-flex" style={{ marginLeft: `${node.depth * 20}px` }}>
        <span style={{ fontSize: "20px" }} onClick={handleToggle}>
          {node.roles && (isExpanded ? "[-]" : "[+]")}
        </span>
        <h5 style={{ fontSize: "20px" }} className="mx-2">
          {(node?.departmentName?.departmentName &&
            node?.departmentName?.departmentName) ||
            (node?.roleName && (
              <>
                {node?.roleName}(Position-{node?.rolePosition})
              </>
            ))}
        </h5>
      </div>
      {isExpanded &&
        node.roles &&
        node.roles.map((child) => <TreeNode key={child.id} node={child} />)}
    </div>
  );
};

const Tree = ({ data }) => {
  return <TreeNode node={data} />;
};

const treeData = {
  id: 1,
  name: "Root",
  depth: 0,
  children: [
    {
      id: 2,
      name: "Node 1",
      depth: 1,
      children: [
        {
          id: 3,
          name: "Node 1.1",
          depth: 2,
          children: [
            {
              id: 4,
              name: "Node 1.1.1",
              depth: 3,
              children: null,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Node 2",
      depth: 1,
      children: [
        {
          id: 3,
          name: "Node 1.1",
          depth: 2,
          children: [
            {
              id: 4,
              name: "Node 1.1.1",
              depth: 3,
              children: null,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Node 3",
      depth: 1,
      children: [
        {
          id: 3,
          name: "Node 1.1",
          depth: 2,
          children: [
            {
              id: 4,
              name: "Node 1.1.1",
              depth: 3,
              children: [
                {
                  id: 8,
                  name: "Node 1.1",
                  depth: 2,
                  children: [
                    {
                      id: 4,
                      name: "Node 1.1.1",
                      depth: 3,
                      children: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
const Trees = [treeData, treeData];

function CreateHeriarchy() {
  const [DepartmentWithRole, setDepartmentWithRole] = useState([]);

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userData"));

    _Get(Deptartment_with_Role, userData?.database)
      .then((res) => {
        console.log(res?.Department);
        setDepartmentWithRole(res?.Department);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Card>
      <div>
        <Row>
          <Col></Col>
          {/* <Col className="m-2" lg="3" sm="6" md="3">
            <Button
              style={{ cursor: "pointer" }}
              className="float-right mr-1"
              color="primary"
             
            >
              Connect with SuperAdmin
            </Button>
          </Col> */}
          <Col className="m-2" lg="2">
            <Route
              render={({ history }) => (
                <Button
                  style={{ cursor: "pointer" }}
                  className="float-right mr-1"
                  color="primary"
                  onClick={() => history.goBack()}>
                  {" "}
                  Back
                  {/* <FaPlus size={15} /> Create User */}
                </Button>
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-center">
              <h1>Your Organization Structure</h1>
            </div>
          </Col>
        </Row>
        {DepartmentWithRole && DepartmentWithRole ? (
          DepartmentWithRole?.map((ele, i) => <Tree key={i} data={ele} />)
        ) : (
          <>
            <div style={{ color: "red" }}>
              <h3>No Organization Structure found</h3>
            </div>
          </>
        )}
        {/* {Trees && Trees?.map((ele, i) => <Tree key={i} data={ele} />)} */}
      </div>
    </Card>
  );
}

export default CreateHeriarchy;
