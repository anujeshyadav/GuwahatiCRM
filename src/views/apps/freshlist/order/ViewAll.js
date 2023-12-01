import React from "react";
import {
  Card,
  CardBody,
  Media,
  Row,
  Col,
  Button,
  Label,
  Input,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { history } from "../../../../history";
class ViewConfirmed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  // componentDidMount() {
  //   //console.log(this.props.match.params);
  //   let { id } = this.props.match.params;
  //   axiosConfig
  //     .get(`/viewonebanner/${id}`)
  //     .then(response => {
  //       console.log(response.data);
  //       console.log(response.data.data);
  //       this.setState({ data: response.data.data });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 col-sm-6 className="float-left">
                    All Order Detail
                  </h1>
                </Col>
                <Col>
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/freshlist/order/All")}
                  >
                    Back
                  </Button>
                </Col>
              </Row>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="mb-1" lg="4" md="4" sm="12">
                    <div className="">
                      <Label>Expected Delivery Date</Label>
                      <Input
                        required
                        type="date"
                        name="DateofDelivery"
                        // value={dateofDelivery}
                        // onChange={e => setDateofDelivery(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default ViewConfirmed;
