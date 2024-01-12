import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  CustomInput,
  Input,
  Label,
  Row,
  Spinner,
  Table,
} from "reactstrap";
import { Route } from "react-router-dom";
import { _Get, _PostSave } from "../../../../ApiEndPoint/ApiCalling";
import {
  All_Users_List,
  Deptartment_with_Role,
  User_Assign_User,
} from "../../../../ApiEndPoint/Api";
import swal from "sweetalert";
let SelectedChild = [];
let SetAllHeadOfdepartment = [];
const AssignTeamMember = () => {
  const [DepartmentWithRole, setDepartmentWithRole] = useState([]);
  const [SelectedDepartment, setSelectedDepartment] = useState([]);
  const [ShowParentList, setShowParentList] = useState([]);
  const [ALLheadsofDept, setALLheadsofDept] = useState([]);
  const [ShowChildList, setShowChildList] = useState([]);
  const [Show, setShow] = useState(false);
  const [Child, setChild] = useState(false);
  const [SelectedParentForHeirarchy, setSelectedParentForHeirarchy] = useState(
    {}
  );
  const [SelectedChildForHeirarchy, setSelectedChildForHeirarchy] = useState(
    []
  );
  const [NoChild, setNoChild] = useState(false);
  const [Loader, setLoader] = useState(false);
  const [HeadOfDepartment, setHeadOfDepartment] = useState(false);
  const [Parent, setParent] = useState("");
  const [ParentName, setParentName] = useState("");
  const [SelectedRoleId, setSelectedRoleId] = useState("");
  const [ChildList, setChildList] = useState([]);
  const [AllUsersList, setAllUsersList] = useState([]);

  const UserList = () => {
    let userData = JSON.parse(localStorage.getItem("userData"));

    _Get(All_Users_List, userData?.database)
      .then((res) => {
        console.log(res?.User);
        let WithoutCreatedBy = res?.User?.filter((ele, i) => !ele?.created_by);
        setAllUsersList(res?.User);
        // if (WithoutCreatedBy?.length) {
        //   setAllUsersList(WithoutCreatedBy);
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log([...new Set(ALLheadsofDept)]);
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userData"));

    UserList();
    _Get(Deptartment_with_Role, userData?.database)
      .then((res) => {
        console.log(res?.Department);
        setDepartmentWithRole(res?.Department);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSaveParent = (parent) => {
    setSelectedParentForHeirarchy(parent);
  };
  const handleSaveChild = (child, e) => {
    if (e.target.checked) {
      SelectedChild.push(child);

      setSelectedChildForHeirarchy(child);
    } else {
      let index = SelectedChild?.indexOf(child);
      setSelectedChildForHeirarchy(SelectedChild.splice(index, 1));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoader(true);
    let ParentID = SelectedParentForHeirarchy?._id;
    let child = SelectedChild?.map((ele, i) => {
      return {
        id: ele?._id,
      };
    });
    let payload = {
      parentId: ParentID,
      childs: child,
    };

    await _PostSave(User_Assign_User, payload)
      .then((res) => {
        setLoader(false);
        console.log(res);

        UserList();
        setSelectedDepartment([]);
        setShowParentList([]);
        setParent("");
        setShowChildList([]);
        setChild(false);
        setChildList([]);
        SelectedChild = [];
        swal("Assigned Successfully");
      })
      .catch((err) => {
        setLoader(false);
        swal("Something Went Wrong");
        console.log(err);
      });
  };

  return (
    <div>
      <Card>
        <CardBody>
          <div className=" m-2">
            <Row className="">
              <Col>
                <h1>Assign Team To Parent Node</h1>
              </Col>
              <Col lg="2" md="2">
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
          </div>
          <div className=" m-2">
            <Row className="">
              <Col lg="3" md="3">
                <Label>Select Department</Label>
                <CustomInput
                  value={SelectedDepartment}
                  onChange={(e) => {
                    e.target.value ? setShow(true) : setShow(false);
                    if (e.target.value == "All_Dept_Heads") {
                      SetAllHeadOfdepartment = [];
                      setShow(false);
                      DepartmentWithRole?.map((ele, i) => {
                        ele?.roles?.forEach((val, index) => {
                          if (val?.rolePosition == 1) {
                            SetAllHeadOfdepartment?.push(val);
                          }
                        });
                      });
                      setALLheadsofDept(SetAllHeadOfdepartment);
                      let allHeadUsers = [];
                      SetAllHeadOfdepartment?.map((ele, i) => {
                        AllUsersList?.forEach((val, i) => {
                          if (val?.rolename?._id == ele?.roleId?._id) {
                            allHeadUsers.push(val);
                          }
                        });
                      });
                      setSelectedDepartment(e.target.value);
                      setShowChildList(allHeadUsers);
                      if (allHeadUsers?.length) {
                        setChild(true);
                      }
                      let userData = JSON.parse(
                        localStorage.getItem("userData")
                      );

                      let arr = [userData];
                      setShowParentList(arr);
                      // setChildList(SelectedChild);
                    } else {
                      let selectedDepartment = DepartmentWithRole?.filter(
                        (ele, i) => ele?._id == e.target.value
                      );
                      setSelectedDepartment(selectedDepartment[0]?.roles);
                    }
                  }}
                  type="select">
                  <option value="">--Select Department--</option>
                  <option value="All_Dept_Heads">All Department Head</option>
                  {DepartmentWithRole &&
                    DepartmentWithRole?.map((ele, i) => (
                      <option
                        data-name={`${ele?._id} ${ele?.database}`}
                        value={ele?._id}>
                        {ele?.departmentName?.departmentName}
                      </option>
                    ))}
                </CustomInput>
              </Col>
              {Show && Show && (
                <Col lg="3" md="3">
                  <Label>Select Parent Role</Label>
                  <CustomInput
                    value={Parent}
                    onChange={(e) => {
                      const selected = e.target.options[e.target.selectedIndex]
                        .getAttribute("data-name")
                        ?.split(" ");
                      if (selected[0] === 1) {
                        // pass created by
                        setHeadOfDepartment(true);
                      }
                      const name = selected.slice(2).join(" ");
                      let child = SelectedDepartment?.filter(
                        (ele) => ele?.rolePosition == Number(selected[0]) + 1
                      );

                      let ParentList = AllUsersList?.filter(
                        (ele) => ele?.rolename?._id == selected[1]
                      );

                      setShowParentList(ParentList);
                      setParent(e.target.value);
                      setParentName(name);
                      setSelectedRoleId(selected[1]);

                      if (child?.length) {
                        let ChildList = AllUsersList?.filter(
                          (ele) => ele?.rolename?._id == child[0]?.roleId?._id
                        );
                        setShowChildList(ChildList);
                        setChild(true);
                        setChildList(child);
                      } else {
                        setChildList([]);
                        setShowChildList([]);
                        setNoChild(true);
                        setChild(false);
                      }
                    }}
                    type="select">
                    <option value="">--Select Role--</option>
                    {SelectedDepartment &&
                      SelectedDepartment?.map((ele, i) => (
                        <option
                          data-name={`${ele?.rolePosition} ${ele?.roleId?._id} ${ele?.roleName}`}
                          value={ele?._id}>
                          {ele?.roleName} (Position-
                          {ele?.rolePosition})
                        </option>
                      ))}
                  </CustomInput>
                </Col>
              )}
              {Child && Child ? (
                <>
                  <Col lg="3" md="3">
                    <Label>Next Child</Label>
                    <Input
                      readOnly
                      type="text"
                      value={ChildList[0]?.roleName && ChildList[0]?.roleName}
                    />
                  </Col>
                  {SelectedChild && SelectedChild?.length > 0 && (
                    <Col lg="3" md="3">
                      <Button
                        color="primary"
                        onClick={(e) => handleSubmit(e)}
                        className="mt-2">
                        Submit
                      </Button>
                    </Col>
                  )}
                </>
              ) : (
                <>
                  {NoChild && NoChild && (
                    <Col lg="3" md="3">
                      <Label style={{ color: "red" }}>
                        No Next Child Found
                      </Label>
                      <Input readOnly type="text" value="No Child Found" />
                    </Col>
                  )}
                </>
              )}
            </Row>
          </div>
          <hr />
          <div className="p-2">
            <Row>
              {ShowParentList && ShowParentList?.length > 0 && (
                <Col lg="6" md="6" sm="6">
                  <div className="d-flex justify-content-center">
                    <h2>
                      <strong>
                        {ParentName && ParentName ? (
                          <> {ParentName} (Parent)</>
                        ) : (
                          "Head"
                        )}{" "}
                        Users List
                      </strong>
                    </h2>
                  </div>
                  <div
                    className="p-1"
                    style={{
                      borderRight: "1px solid black",
                    }}>
                    <Table
                      className="table_heading"
                      style={{ cursor: "pointer" }}
                      responsive>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Assigned To</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Mobile Number</th>
                          <th>email</th>
                          <th>State</th>
                          <th>City</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ShowParentList && ShowParentList?.length ? (
                          <>
                            {ShowParentList &&
                              ShowParentList?.map((ele, i) => {
                                console.log(ele);
                                return (
                                  <tr key={ele?._id}>
                                    <th scope="row">
                                      {/* {i + 1}{" "} */}
                                      <Input
                                        name="Parent"
                                        value="checkbox1"
                                        type="radio"
                                        onClick={(e) => handleSaveParent(ele)}
                                      />
                                    </th>
                                    <td>
                                      <Badge color="primary">
                                        <strong>
                                          {ele?.created_by?.firstName &&
                                            ele?.created_by?.firstName}
                                        </strong>
                                      </Badge>
                                    </td>
                                    <td>{ele?.firstName}</td>
                                    <td>{ele?.lastName}</td>
                                    <td>{ele?.mobileNumber}</td>
                                    <td>{ele?.email}</td>
                                    <td>{ele?.State}</td>
                                    <td>{ele?.City}</td>
                                  </tr>
                                );
                              })}
                          </>
                        ) : null}
                      </tbody>
                    </Table>
                  </div>
                </Col>
              )}

              {ShowChildList && ShowChildList?.length > 0 && (
                <Col lg="6" md="6" sm="6">
                  <div className="d-flex justify-content-center">
                    <h2>
                      <strong>
                        {ChildList[0]?.roleName && ChildList[0]?.roleName ? (
                          <>
                            {" "}
                            {ChildList[0]?.roleName && ChildList[0]?.roleName}
                            (child)
                          </>
                        ) : (
                          "All Dept Head"
                        )}{" "}
                        Users List
                      </strong>
                    </h2>
                  </div>
                  <div className="p-1">
                    <Table
                      className="table_heading"
                      style={{
                        cursor: "pointer",
                      }}
                      responsive>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Assigned To</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Mobile Number</th>
                          <th>email</th>
                          <th>State</th>
                          <th>City</th>
                        </tr>
                      </thead>

                      <tbody>
                        {ShowChildList &&
                          ShowChildList?.map((ele, i) => {
                            console.log(ele);
                            return (
                              <tr key={ele?._id}>
                                <th scope="row">
                                  {" "}
                                  {ele?.created_by?.firstName &&
                                  ele?.created_by?.firstName ? null : (
                                    <>
                                      <Input
                                        value="checkbox1"
                                        type="checkbox"
                                        onClick={(e) => handleSaveChild(ele, e)}
                                      />
                                    </>
                                  )}
                                </th>
                                <td>
                                  <Badge color="primary">
                                    <strong>
                                      {ele?.created_by?.firstName &&
                                        ele?.created_by?.firstName}
                                    </strong>
                                  </Badge>
                                </td>
                                <td>{ele?.firstName}</td>
                                <td>{ele?.lastName}</td>
                                <td>{ele?.mobileNumber}</td>
                                <td>{ele?.email}</td>
                                <td>{ele?.State}</td>
                                <td>{ele?.City}</td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </Table>
                  </div>
                </Col>
              )}
            </Row>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AssignTeamMember;
