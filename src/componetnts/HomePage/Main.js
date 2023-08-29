import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import PostModule from "./PostModule";
import Post from "./post";

const Main = (props) => {
  const [showModule, setShowModule] = useState(false);

  const handelClick = () => {
    setShowModule(!showModule);
  };

  return (
    <div className="main">
      {showModule === true ? <div className="overlay"></div> : null}

      <Card
        style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}
        className="p-3 d-flex align-items-center"
      >
        <div>
          {props.user && props.user.photoURL ? (
            <img src={props.user.photoURL} alt="img" className="main-image" />
          ) : (
            <i class="fa-solid fa-user-tie"></i>
          )}
        </div>
        <div style={{ flex: 1 }} className="mx-2">
          <button
            className="main-btn"
            onClick={handelClick}
            disabled={props.landing ? true : false}
          >
            start a post..
          </button>
        </div>
        <div className="box d-flex align-items-center w-100 mt-3">
          <Col className="d-flex align-items-center gap-2">
            <i
              class="fa-solid fa-image"
              style={{ color: "var(--main-color)" }}
            ></i>
            <p style={{ color: "var(--main-color)", margin: 0 }}>Photo</p>
          </Col>
          <Col className="d-flex align-items-center gap-2">
            <i class="fa-brands fa-youtube" style={{ color: "green" }}></i>
            <p style={{ color: "var(--main-color)", margin: 0 }}>Video</p>
          </Col>
          <Col className="d-flex align-items-center gap-2">
            <i
              class="fa-regular fa-calendar-days"
              style={{ color: "orange" }}
            ></i>
            <p style={{ color: "var(--main-color)", margin: 0 }}>Event</p>
          </Col>
          <Col className="d-flex align-items-center gap-2">
            <i class="fa-solid fa-keyboard" style={{ color: "red" }}></i>
            <p style={{ color: "var(--main-color)", margin: 0 }}>
              Write article
            </p>
          </Col>
        </div>
      </Card>
      <Post />
      <PostModule showModule={showModule} handelClick={handelClick} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.articalReducer.loading,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(Main);
// onClick={() =>handelDelete(post.id)}
