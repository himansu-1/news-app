import React from 'react';
import { Link } from "react-router-dom";

const SideBar=()=> {
    
        return <div>
            <div className="sidebar-sticky ">
                <ul className="nav flex-column ">
                    <li className="nav-itemnav-link text-dark nav-link text-dark rounded mt-3 ml-0 p-0 ">
                        <h5 className='m-0'>Top Catagories</h5>
                    </li>
                    <li className="nav-item">
                        {/* <span class="badge text-bg-danger">Danger</span> */}
                        <Link className="nav-link text-dark border rounded m-1 mt-2" to="/business">

                            Business
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link text-dark border rounded m-1" to="/entertainment">
                            Entertainment
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark border rounded m-1" to="/">
                            General
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark border rounded m-1" to="/health">
                            Health
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark border rounded m-1" to="/science">
                            Science
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark border rounded m-1" to="sports">
                            Sports
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark border rounded m-1" to="/technology">
                            Technology
                        </Link>
                    </li>
                </ul>


            </div>
        </div>;
    
}


export default SideBar;