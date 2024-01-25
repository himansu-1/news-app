import React from 'react';
import { Link } from 'react-router-dom';

const Navbar =()=> {
    
        return (<div className=''>

            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top w-auto pt-0">
                <div className="container-fluid bg-secondary mh-50 rounded">
                    <Link className="navbar-brand text-light" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link active  text-light " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  text-light" href="#/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle  text-light" href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item text-dark" href="#/">Action</a></li>
                                    <li><a className="dropdown-item text-dark" href="#/">Another action</a></li>
                                    <li><hr className="dropdown-divider text-dark"/></li>
                                    <li><a className="dropdown-item text-dark" href="#/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled text-light" aria-disabled="true" href='/'>Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-light text-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>)
    
}

export default Navbar;