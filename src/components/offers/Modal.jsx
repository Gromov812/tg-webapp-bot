import React from 'react'
import Modal from 'react-bootstrap/Modal';

function ModalBlock({show, setShowModal, modalTitle, modalText}) {
    

    return (
        <>
            <Modal
        show={show}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
           {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <pre>
            {modalText}
          </pre>
        </Modal.Body>
      </Modal>
        </>
    )
}
export default ModalBlock;