import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';
import sponsor1 from '../../img/sponsor1.png'
import sponsor2 from '../../img/sponsor2.png'
import brand2 from '../../img/brand_2.png'

export default function SponsorFooter() {
    return (
        <div className="sponsor-area footer row f-flex justify-content-center">
            <p style={{textAlign: 'center',marginBottom:'40px'}}>Didukung oleh</p>
            <div className="row" style={{marginBottom:'120px'}}>
                <div className="col-12 col-sm-12 col-md-6  d-flex justify-content-center">
                    <img src={sponsor1} alt="" className="sponsor-row"/>
                </div>
                <div className="col-12 col-sm-12 col-md-6  d-flex justify-content-center">
                    <img src={sponsor2} alt="" className="sponsor-row"/>
                </div>
            </div>
            <div className='border-top'>
                <div className='row' style={{margin:'20px'}}>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                        <img src={brand2} alt="" />
                    </div>
                    <div className="row col-12 col-sm-12 col-md-12 col-lg-9 d-flex justify-content-between">
                        <div className='col-12 col-sm-12 col-md-1 col-lg-1'>
                            About
                        </div>
                        <div className='col-12 col-sm-12 col-md-1 col-lg-1'>
                            Privacy Policy
                        </div>
                        <div className='col-12 col-sm-12 col-md-1 col-lg-1'>
                            Code of Conduct
                        </div>
                        <div className='col-12 col-sm-12 col-md-1 col-lg-1'>
                            Advertise with Us
                        </div>
                        <div className='col-12 col-sm-12 col-md-1 col-lg-1'>
                            Contact Us
                        </div>
                        <div className='col-12 col-sm-12 col-md-1 col-lg-1'>
                            Career
                        </div>
                        <div className='col-12 col-sm-12 col-md-1 col-lg-1'>
                            <a href=".content" style={{textDecoration: "none",color:'black'}}>
                            <AiOutlineArrowUp />
                                <span>To top</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
