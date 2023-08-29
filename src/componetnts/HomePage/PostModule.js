import React, { useState } from "react";
import { Alert, Button, Col, Form, Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { Timestamp } from "firebase/firestore";
import { PostArticleApi } from "../../redux/actions";

const PostModule = (props) => {
  const [editortext, setEditortext] = useState("");
  const [assetArea, setAssetArea] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const handleReset = (e) => {
    setEditortext("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.handelClick(e);
  };
  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      Alert(`not an image, the file is ${typeof image}`);
      return;
    } else {
      setShareImage(image);
    }
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: shareImage,
      video: videoLink,
      user: props.user,
      description: editortext,
      timestamp: Timestamp.now(),
    };
    props.postArticle(payload);
    handleReset(e);
  };

  return (
    <div className="modle">
      {props.showModule && (
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton onHide={(e) => handleReset(e)}>
              <Modal.Title className="text-muted fs-5">
                Create a post
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex gap-2 align-items-center">
              <div className="main-image">
                {props.user && props.user.photoURL ? (
                  <img
                    src={props.user.photoURL}
                    alt="img"
                    className="main-image"
                  />
                ) : (
                  <i class="fa-solid fa-user-tie"></i>
                )}
              </div>
              <p className="fs-5 fw-bold m-0">
                {props.user && props.user.displayName}
              </p>
            </Modal.Body>
            <Form>
              <textarea
                type="text"
                value={editortext}
                onChange={(e) => setEditortext(e.target.value)}
                placeholder="what do you want to talk about?"
                className="modle-text"
                autoFocus={true}
              />
              {assetArea === "image" ? (
                <div className="text-center p-2">
                  <input
                    type="file"
                    name="image"
                    id="file"
                    style={{ display: "none" }}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="file"
                    style={{
                      display: "block",
                      cursor: "pointer",
                      margin: "20px",
                    }}
                  >
                    Select an image to share
                  </label>
                  {shareImage && (
                    <img
                      src={URL.createObjectURL(shareImage)}
                      style={{ maxHeight: "265px", height: "100%" }}
                      className="w-100"
                      alt="img"
                    />
                  )}
                </div>
              ) : (
                assetArea === "video" && (
                  <div className="text-center p-2">
                    <input
                      style={{
                        width: "90%",
                        height: "40px",
                        margin: "20px",
                        padding: "10px",
                      }}
                      type="text"
                      value={videoLink}
                      onChange={(e) => setVideoLink(e.target.value)}
                      placeholder="please input a video link"
                    />
                    {videoLink && (
                      <ReactPlayer width="100%" height="100%" url={videoLink} />
                    )}
                  </div>
                )
              )}
            </Form>
            <Modal.Footer>
              <div className="d-flex align-items-center " style={{ flex: 1 }}>
                <Col
                  className="d-flex align-items-center me-3 text-muted"
                  style={{ cursor: "pointer" }}
                >
                  <i
                    class="fa-solid fa-image"
                    onClick={() => setAssetArea("image")}
                  ></i>
                </Col>
                <Col
                  className="d-flex align-items-center text-muted "
                  style={{ cursor: "pointer" }}
                >
                  <i
                    class="fa-brands fa-youtube"
                    onClick={() => setAssetArea("video")}
                  ></i>
                </Col>
                <Form className="d-flex align-items-center mx-3 w-100">
                  <i class="fa-regular fa-comment-dots"></i>
                  <input
                    type="text"
                    placeholder="Any one"
                    className="modle-input w-100"
                  />
                </Form>
              </div>
              <Button
                variant="primary"
                onClick={(e) => handlePost(e)}
                disabled={!editortext ? true : false}
              >
                Post
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToPropes = (dispatch) => {
  return {
    postArticle: (payload) => dispatch(PostArticleApi(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToPropes)(PostModule);
