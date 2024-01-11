import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Card, Button, Label, Input, Form } from "reactstrap";
import { Roles } from "./AddRole";

import axiosConfig from "../../../../axiosConfig";
// import { Route, Link } from "react-router-dom";
import swal from "sweetalert";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { permission } from "./DummyPermissiom";
import { useParams, useHistory } from "react-router-dom";
import {
  Get_Role_byid,
  Update_Role_list,
} from "../../../../ApiEndPoint/ApiCalling";

export default function AddRoleNew() {
  const [Desc, setDesc] = useState("");
  const [Role, setRole] = useState("");
  const [Selected, setSelected] = useState([]);
  const [SelectedIndex, setIndex] = useState("");
  const [show, setShow] = useState(false);
  const [Existingpermission, setExistingpermission] = useState({});
  const [updatedPermissions, setUpdatedPermissions] = useState([...permission]);

  const param = useParams();
  const history = useHistory();

  useEffect(() => {
    Get_Role_byid(param.id)
      .then((res) => {
        console.log(res?.Role);
       
        setSelected(res?.Role?.rolePermission);
        setRole(res?.Role?.roleName);
        setDesc(res?.Role?.desc);
        setExistingpermission(res?.Role.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelectPage = (value, checked, permit, title, ele) => {
    const newSelected = [...Selected];
    const pageIndex = newSelected.findIndex((item) => item.pagename === title);

    if (checked) {
      if (pageIndex !== -1) {
        if (!newSelected[pageIndex].permission.includes(permit)) {
          newSelected[pageIndex].permission.push(permit);
        }
      } else {
        newSelected.push({ pagename: title, permission: [permit] });
      }
    } else {
      if (pageIndex !== -1) {
        newSelected[pageIndex].permission = newSelected[
          pageIndex
        ].permission.filter((p) => p !== permit);

        if (newSelected[pageIndex].permission.length === 0) {
          newSelected.splice(pageIndex, 1);
        }
      }
    }

    setSelected(newSelected);

    const updatedPermissionsCopy = updatedPermissions.map((item) => {
      if (item.pagename === title) {
        return {
          ...item,
          permission: newSelected
            .filter((selectedItem) => selectedItem.pagename === title)
            .flatMap((selectedItem) => selectedItem.permission),
        };
      }
      return item;
    });

    setUpdatedPermissions(updatedPermissionsCopy);
  };

  const updateChildCheckboxes = (title, checked, permit) => {
    const page = Roles.find((role) => role.title === title);

    if (!page) return;

    page.TabName.forEach((tab) => {
      if (!tab.permission.includes("parentPermit")) {
        const permissionIndex = updatedPermissions.findIndex(
          (p) => p.pagename === tab.title
        );

        if (checked) {
          if (permissionIndex !== -1) {
            if (
              !updatedPermissions[permissionIndex].permission.includes(permit)
            ) {
              updatedPermissions[permissionIndex].permission.push(permit);
            }
          } else {
            updatedPermissions.push({
              pagename: tab.title,
              permission: [permit],
            });
          }
        } else {
          if (permissionIndex !== -1) {
            updatedPermissions[permissionIndex].permission = updatedPermissions[
              permissionIndex
            ].permission.filter((p) => p !== permit);

            if (updatedPermissions[permissionIndex].permission.length === 0) {
              updatedPermissions.splice(permissionIndex, 1);
            }
          }
        }

        updateChildCheckboxes(tab.title, checked, permit);
      }
    });

    setUpdatedPermissions([...updatedPermissions]);
  };

  const handleSumit = (e) => {
    e.preventDefault();
    let payload = {
      desc: Desc,
      roleName: Role,
      rolePermission: Selected,
    };
    Update_Role_list(param.id, payload)
      .then((res) => {
        console.log(res);
        swal("Success", "Role Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlesetparent = (value, index) => {
    setShow(value);
    setIndex(index);
  };

  return (
    <>
      {Selected ? (
        <>
          <Row className="">
            <Col xl={12}>
              <Card>
                <Row>
                  <Col className="m-1">
                    <h3 className="py-2">Update Role</h3>
                  </Col>
                  <Col className="m-1">
                    <Button
                      className=" btn btn-danger float-right "
                      onClick={() =>
                        history.push("/app/Trupee/account/RoleList")
                      }>
                      Back
                    </Button>
                  </Col>
                </Row>
                <div className="container" />
                <Form onSubmit={handleSumit}>
                  <div className="container mt-2">
                    <Row className="mb-3 container">
                      <Col>
                        <Label>Existing Role *</Label>
                        <Input
                          // disabled
                          value={Role}
                          onChange={(e) => setRole(e.target.value)}
                          type="text"
                          placeholder="Enter Role"
                          className="form-control"
                        />
                      </Col>
                      <Col>
                        <Label>Existing Role Description * </Label>
                        <Input
                          value={Desc}
                          onChange={(e) => setDesc(e.target.value)}
                          type="text"
                          placeholder="Enter Role Desc.."
                        />
                      </Col>
                    </Row>
                  </div>
                  <section className="mt-5 p-3">
                    <Row className="gy-0 p-3">
                      {Roles &&
                        Roles?.map((value, index) => {
                          return (
                            <Col
                              key={index}
                              style={{
                                borderRadius: "12px",

                                height: `${
                                  Selected?.some(
                                    (item) =>
                                      item?.pagename === value?.title &&
                                      item?.permission.includes("parentPermit")
                                  )
                                    ? "auto"
                                    : "40px"
                                }`,
                              }}
                              className="customcol gy-0 mb-2 "
                              lg="12"
                              md="12"
                              sm="12">
                              <Row
                                style={{
                                  lineHeight: "44px",
                                  borderRadius: "6px",
                                  background: "#f7f7f8",
                                }}
                                className="roleheading">
                                <Col className="gy-2" lg="2" sm="2" md="2">
                                  <div className="align-item-center">
                                    <input
                                      checked={Selected?.some(
                                        (item) =>
                                          item?.pagename === value?.title &&
                                          item?.permission?.includes(
                                            "parentPermit"
                                          )
                                      )}
                                      className="mt-1"
                                      name="check"
                                      id={`head_${value?.title}`}
                                      onClick={(e) => {
                                        handlesetparent(
                                          e.target.checked,
                                          index
                                        );
                                        handleSelectPage(
                                          e.target.value,
                                          e.target.checked,
                                          "parentPermit",
                                          value?.title,
                                          index
                                        );
                                      }}
                                      style={{
                                        height: "19px",
                                        width: "26px",
                                      }}
                                      type="checkbox"
                                    />

                                    <span className="mx-3 gy-0">
                                      {value?.title}
                                    </span>
                                  </div>
                                </Col>
                                <Col className="gy-2">
                                  <div className="d-flex justify-content-center">
                                    <span className="mx-3"> View</span>
                                  </div>
                                </Col>
                                <Col className="gy-2">
                                  <div className="d-flex justify-content-center">
                                    <span className="mx-3"> Create</span>
                                  </div>
                                </Col>
                                <Col className="gy-2">
                                  <div className="d-flex justify-content-center">
                                    <span className="mx-3"> Edit</span>
                                  </div>
                                </Col>
                                <Col className="gy-2">
                                  <div className="d-flex justify-content-center">
                                    <span className="mx-3"> Delete</span>
                                  </div>
                                </Col>
                                <Col className="gy-2">
                                  <div className="d-flex justify-content-center">
                                    <span className="mx-3"> Download</span>
                                  </div>
                                </Col>
                              </Row>

                              {Selected?.some(
                                (item) =>
                                  item.pagename === value?.title &&
                                  item.permission.includes("parentPermit")
                              ) ? (
                                <>
                                  <>
                                    <div className="p-3">
                                      <div className="gy-2 mt-2">
                                        {value?.TabName?.map((ele, i) => {
                                          return (
                                            <>
                                              <Row key={i} className="">
                                                <Col lg="2" sm="2" md="2">
                                                  <h6 className="mt-1">
                                                    {" "}
                                                    {ele?.title}
                                                  </h6>
                                                </Col>
                                                {ele?.permission?.map(
                                                  (permit, ind) => {
                                                    const hasPermissio =
                                                      Selected?.some(
                                                        (p) =>
                                                          p.pagename ===
                                                            ele.title &&
                                                          p.permission.includes(
                                                            permit
                                                          )
                                                      );
                                                    return (
                                                      <Col
                                                        key={ind}
                                                        lg="2"
                                                        md="2"
                                                        sm="2">
                                                        <div className="d-flex justify-content-center">
                                                          <input
                                                            checked={
                                                              hasPermissio
                                                            }
                                                            name="check"
                                                            id={`item_${permit}`}
                                                            onClick={(e) => {
                                                              handleSelectPage(
                                                                e.target.value,
                                                                e.target
                                                                  .checked,
                                                                permit,
                                                                ele.title,
                                                                ind
                                                              );
                                                            }}
                                                            style={{
                                                              height: "19px",
                                                              width: "26px",
                                                            }}
                                                            type="checkbox"
                                                          />
                                                        </div>
                                                      </Col>
                                                    );
                                                  }
                                                )}
                                              </Row>
                                            </>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </>
                                </>
                              ) : null}
                            </Col>
                          );
                        })}
                    </Row>
                    <Row>
                      <Col>
                        <div className="d-flex justify-content-center mb-2">
                          <Button
                            type="submit"
                            style={{ cursor: "pointer" }}
                            color="primary">
                            Update Permission
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </section>
                </Form>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row>
            <Col>
              <div className="d-flex justify-content-center align-item-center mt-5">
                <h2>Loading...</h2>
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}
