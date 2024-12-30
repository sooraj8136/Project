import React from 'react'
import { useSelector } from 'react-redux';

function Signup() {

  const { darkMode } = useSelector((state) => state.mode)
  console.log(darkMode)

  return (
    <>
    <div className={darkMode ? "text-black" : "text-white"}>
      <h1 className='text-center'>Become an H&M member</h1>
    </div>
      <form action="/action_page.php" method="post" >
        <div className="input-sec text-center">
          <label htmlFor="email" size="lg" className={darkMode ? "text-black" : "text-white nav-sec-1 fs-10 fw-normal"}>register.name*</label>
          <br />
          <div className="d-flex justify-content-center">
            <input
              type="text"
              id="text"
              name="text"
              className="pass-input mx-auto my-3"
              style={{ maxWidth: "400px", width: "90%" }}
            />
          </div>
          <babel htmlFor="password" className={darkMode ? "text-black" : "text-white nav-sec-1 fs-10 fw-normal"}>register.email*</babel>
          <div className="d-flex justify-content-center">
            <input
              type="email"
              id="email"
              name="email"
              className="pass-input mx-auto my-3"
              style={{ maxWidth: "400px", width: "90%" }}
            />
          </div>
          <babel htmlFor="password" className={darkMode ? "text-black" : "text-white nav-sec-1 fs-10 fw-normal"}>register.mobile*</babel>
          <div className="d-flex justify-content-center">
            <input
              type="text"
              id="text"
              name="text"
              className="pass-input mx-auto my-3"
              style={{ maxWidth: "400px", width: "90%" }}
            />
          </div>
          <babel htmlFor="password" className={darkMode ? "text-black" : "text-white nav-sec-1 fs-10 fw-normal"}>register.password*</babel>
          <div className="d-flex justify-content-center">
            <input
              type="password"
              id="password"
              name="password"
              className="pass-input mx-auto my-3"
              style={{ maxWidth: "400px", width: "90%" }}
            />
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-center">
        <input type="submit" className="signup-first-btn text-center my-4 w-90 bg-black text-white" value="Become an H&M member" style={{ maxWidth: "400px", width: "90%" }} />
      </div>
      <div className="d-flex justify-content-center">
        <input type="submit" className="bg-light submit-btn text-black" value="Sign in" style={{ maxWidth: "400px", width: "90%" }} onClick={() => window.location.href = '/login'}/>
      </div>
    </>
  )
}

export default Signup