import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from "react-router-dom";


function Root() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light-200">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="first-header-sec collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Sustainability</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Customer Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Newsletter</a>
                                </li>
                            </ul>
                            <div id="imageTag">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png"
                                    width="70px" className="rounded mx-auto d-block "></img>
                            </div>
                            <div className='nav-sec-2'>
                                <div><Link to='/login'>Sign in</Link></div>
                                <div><Link to='/cart'>Shopping Bag</Link></div>
                            </div>
                        </div>
                    </div>
                </nav>
                <form class="d-flex">
                    <div class="search-container">
                        <input class="search-input" placeholder="Search" aria-label="Search" type="search" />
                        <button class="search-button" aria-label="Submit Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="search-icon" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.242 1.1a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </header>
            <Outlet />
            <footer>
                <div>
                    <p class="final-font">The content of this site is copyright-protected</p>
                </div>
            </footer >
        </>
    )
}

export default Root