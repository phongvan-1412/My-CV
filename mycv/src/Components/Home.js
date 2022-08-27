import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.refresh();

const Home = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        setShow(true);
      }

    return(
        <div className="container-fluid mainhome-wrapper" 
             data-aos="fade-up"
             data-aos-duration="1200">
                <div className="color-block d-none d-lg-block"></div>

                <div className="row align-items-center home-wrapper">
                    <div className="col-lg-4 bg position-fixed d-none d-lg-block home-img-wrapper"
                        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '../img/avatar.jpg'})`}}>
                    </div>

                    <div className="col-12 col-lg-8 offset-lg-4 text-center text-lg-start home-shorcut-wrapper">
                        <div>
                            <h1 className="text-uppercase poppins-font"> I'm Pham Van.
                                <span>web designer</span>
                            </h1>

                            <p>
                                I'm a Vietnamese based web designer & front‑end developer focused on
                                crafting clean & user‑friendly experiences, I am passionate about
                                building excellent software that improves the lives of those
                                around me.
                            </p>

                            <button className="button" onClick={handleShow}>
                                <span className="button-text">more about me</span>
                                <span className="button-icon fa fa-arrow-right"></span>
                            </button>

                            {/* <Modal
                            show={show} 
                            onHide={handleClose}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                            size="xl"
                            className="quickview-wrapper">
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-custom-modal-styling-title" className="product-quickview-title">
                                        
                                    </Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <h1>Hello</h1>
                                </Modal.Body>
                            </Modal> */}
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Home;