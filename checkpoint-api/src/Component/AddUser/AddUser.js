import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

const AddUser = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    handleAdd(newUser);
    setNewUser({});
    handleClose();
  };

  return (
    <div style={{ margin: "0 auto", width: 50 }}>
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <input
            placeholder="Name.."
            type="text"
            className="form-control mb-3"
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            placeholder="adress.."
            type="text"
            className="form-control mb-3"
            onChange={(e) =>
              setNewUser({
                ...newUser,
                address: { ...newUser.address, city: e.target.value },
              })
            }
          />
          <input
            placeholder="email.."
            type="text"
            className="form-control mb-3"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <input
            placeholder="phone.."
            type="text"
            className="form-control mb-3"
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
          />
          <input
            placeholder="company.."
            type="text"
            className="form-control mb-3"
            onChange={(e) =>
              setNewUser({
                ...newUser,
                company: { ...newUser.company, name: e.target.value },
              })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddUser;
