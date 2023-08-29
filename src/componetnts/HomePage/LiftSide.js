import React from "react";
import { Col } from "react-bootstrap";
import background1 from "../../images/card-bg.svg";
import background2 from "../../images/photo.svg";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";

const LiftSide = (props) => {
  return (
    <div className="LiftSide">
      <Col className="box b1 ">
        <Card style={{ width: "100%" }} className="text-center">
          <Card.Img variant="top" src={background1} />
          <div className="image">
            <Card.Img variant="top" src={background2} className="img2" />
          </div>
          <Card.Body>
            <Card.Title>
              Welcom, {props.user && props.user.displayName}
            </Card.Title>
            <Card.Text>Add a photo</Card.Text>
          </Card.Body>
          <div className="border border-1 p-3 text-start">
            <p className="m-0 p-0">Conections</p>
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="fs-5">Grow your Network</h4>
              <i class="fa-solid fa-user-plus"></i>
            </div>
          </div>
          <div className="d-flex align-items-center p-3 text-start">
            <i class="fa-solid fa-bookmark"></i>
            <h4 className="fs-6 mx-2 my-0">My Items</h4>
          </div>
        </Card>
      </Col>
      <Col className="box b2">
        <Card className="p-3 text-start mt-2" style={{ width: "100%" }}>
          <h4 className="fs-6 my-2">Groups</h4>
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="fs-6 ">Events</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <h4 className="fs-6 my-2">Follows Hashtags</h4>
        </Card>
        <Card className="p-3 text-start mt-2" style={{ width: "100%" }}>
          <h4 className="fs-6 text-muted">Discover more</h4>
        </Card>
      </Col>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(LiftSide);
