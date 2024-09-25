import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Button } from 'react-bootstrap';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Sidebar
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav>
            <ul>
              <li><Link to="/" onClick={handleClose}>Home</Link></li>
              <li><Link to="/stopwatch" onClick={handleClose}>Stopwatch</Link></li>
              <li><Link to="/timer" onClick={handleClose}>Timer</Link></li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
