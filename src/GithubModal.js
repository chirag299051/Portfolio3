import React, { useContext, useState, useEffect } from "react";
import { Modal, Button, CloseButton, Image } from "react-bootstrap";
import { Context } from "./context";
import { useFetch } from "./context";
import Repo from "./Repo";
import ReactLoading from "react-loading";

const GithubModal = () => {
  const userUrl = "https://api.github.com/users/";
  const { showModal, setShowModal, handleClose, loading, setLoading } = useContext(Context);
  const { uid } = useContext(Context);
  console.log(uid);
  const { result: user_, error } = useFetch(userUrl, uid, false);
  const { result: repos_ } = useFetch(userUrl, uid, true);
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  
  // const [error, setError] = useState(null);

  console.log("Error :", error);
  console.log("USER :", user);
  console.log("REPOS :", repos);

  const close = () => {
    handleClose();
    // setUser(null);
    // setRepos(null);
  };

  useEffect(() => {
    if (showModal) {
      setUser(user_);
      setRepos(repos_);
      setLoading(false);
      // setError(err);
    }
  }, [user_, repos_]);

  if (loading) {
    return (
      <Modal
        dialogClassName="modal error"
        show={showModal}
        onHide={close}
        centered
      >
        <Modal.Header style={{ border: "none" }}>
          <Modal.Title>
            <ReactLoading
              type={"spin"}
              color={"#5867cc"}
              height={"20%"}
              width={"20%"}
            />
          </Modal.Title>
          <CloseButton onClick={close} />
        </Modal.Header>
      </Modal>
    );
  } else {
    if (!error) {
      return (
        <Modal
          scrollable={true}
          dialogClassName="modal"
          show={showModal}
          onHide={close}
          centered
        >
          <Modal.Header style={{ paddingLeft: "50px" }}>
            <Image src={user && user.avatar_url} alt="user" />
            <Modal.Title>{user && user.name}</Modal.Title>
            <CloseButton onClick={close} style={{ color: "red !important" }} />
          </Modal.Header>
          <Modal.Body>
            {Array.isArray(repos) &&
              repos
                .sort((a, b) => b.id - a.id)
                .map((item) => {
                  return <Repo key={item.id} {...item} />;
                })}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else {
      return (
        <Modal
          dialogClassName="modal error"
          show={showModal}
          onHide={close}
          centered
        >
          <Modal.Header style={{ border: "none" }}>
            <Modal.Title>{error}</Modal.Title>
            <CloseButton onClick={close} />
          </Modal.Header>
        </Modal>
      );
    }
  }
};

export default GithubModal;
