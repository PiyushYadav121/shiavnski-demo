import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { X } from 'lucide-react';

function Icon() {
    return (

        <>
            <div>

                <div className="col-sm-12   d-flex justify-content-center" style={{ display: 'flex', paddingRight: '120px' }} >
                    <div className=" col-sm-4 col-md-4 col-lg-4 mb-4 mr-5 ">
                        <Link href="#"> <FaFacebook size={35} /> </Link>
                    </div>

                    {/* <div className="col-sm-4 col-md-4 col-lg-4 mb-4 mr-5 ">
                         <FaTwitter size={35} />
                       </div> */}

                    <div className=" col-sm-4 col-md-4 col-lg-4 mb-5 mr-5  text-white font-bold bg-black rounded ">
                        <Link href="https://x.com/shiavnski_inc"> < X size={32} href="#" /> </Link>
                    </div>

                    <div className=" col-sm-4 col-md-4 col-lg-4 mb-4 mr-5" >
                        <Link href="https://www.linkedin.com/company/shiavnski-technologies-inc">  <FaLinkedin size={35} /> </Link>
                    </div>

                </div>

            </div>


        </>

    )
} export default Icon;