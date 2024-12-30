import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux';

function Contact() {

  const { darkMode } = useSelector((state) => state.mode)
  console.log(darkMode)

  return (
    <>
      <Container>
        <div className="container  d-flex justify-content-center align-items-center">
          <p className={darkMode ? "text-black" : "text-white "}>H&M / <span className='text-danger' style={{
            fontWeight: "700",
          }}>contact</span></p>
        </div>
        <div className='container mt-4 d-flex justify-content-center align-items-center'>
          <div className="position-relative" style={{ maxWidth: "930px", width: "100%" }}>
            <div className='text-center mb-4'>
              <h1 className={darkMode ? "text-black" : "text-white "}>WE’D LOVE TO HEAR FROM YOU</h1>
            </div>
            <div className='text-center'>
              <p className={darkMode ? "text-black" : "text-white "} style={{ fontSize: "small", fontWeight: "500" }}>You can chat with our Virtual assistant 24/7 for answers to frequently asked questions. You’ll be put through to a live agent if you need more help, during below opening hours.</p>
            </div>
            <div className='text-center '>
              <h4 className={darkMode ? "text-black" : "text-white "} style={{ fontSize: "medium", fontWeight: "700" }}>Call us</h4>
            </div>
            <div className='text-center '>
              <p className={darkMode ? "text-black" : "text-white "} style={{ fontSize: "small", fontWeight: "500" }}>1800-889-8000<br />Free of charge</p>
            </div>
            <div className='text-center '>
              <h4 className={darkMode ? "text-black" : "text-white "} style={{ fontSize: "medium", fontWeight: "700" }}>Opening Hours</h4>
            </div>
            <div className='text-center '>
              <h4 className={darkMode ? "text-black" : "text-white "} style={{ fontSize: "medium", fontWeight: "700" }}>Phone</h4>
            </div>
            <div className='text-center'>
              <p className={darkMode ? "text-black" : "text-white "} style={{ fontSize: "small", fontWeight: "500" }}>Monday – Sunday: 8.00 – 22.00</p>
            </div>
            <div className='text-center '>
              <h4 className={darkMode ? "text-black" : "text-white "} style={{ fontSize: "medium", fontWeight: "700" }}>Chat</h4>
            </div>
            <div className='text-center'>
              <p className={darkMode ? "text-black" : "text-white "} style={{ fontSize: "small", fontWeight: "500" }}>Monday – Sunday: 8.00 – 22.00</p>
            </div>
            <div className='text-center '>
              <h4 className={darkMode ? "text-black" : "text-white "} style={{ fontSize: "medium", fontWeight: "700" }}>Email</h4>
            </div>
            <div className='text-center'>
              <p className={darkMode ? "text-black" : "text-white "} style={{ fontSize: "small", fontWeight: "500" }}>customerservice.in@hm.com</p>
            </div>
            <div className='text-center'>
              <p className={darkMode ? "text-black" : "text-white "} style={{ fontSize: "small", fontWeight: "500" }}>When you contact Customer Service your personal data will be processed in accordance with our Privacy Notice.</p>
            </div>
            <div className="responsive-img-container">
              <img
                src="https://lp2.hm.com/hmgoepprod?set=width[1920],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/seasonal-images/aw24/6010-SEASON-6.00-GOE-Customer-Service-940x156.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]"
                alt="Responsive Image" className="responsive-img" />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact