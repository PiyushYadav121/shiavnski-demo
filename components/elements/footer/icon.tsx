import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Icon() {
    return (

        <>
           

    <div>
    {/* padding-right: 120px */}

         <div className="col-sm-12   d-flex justify-content-center"  style={{display: 'flex', paddingRight:'120px'}} >
            <div className=" col-sm-4 col-md-4 col-lg-4 mb-4 mr-5 ">
                <FaFacebook size={35}  />
            </div>

            <div className="col-sm-4 col-md-4 col-lg-4 mb-4 mr-5 ">
                <FaTwitter size={35} />
            </div>

            <div className=" col-sm-4 col-md-4 col-lg-4 mb-4 mr-5 ">
                <FaLinkedin size={35}  />
            </div>
        </div>
        </div>


        </>

    )
} export default Icon;