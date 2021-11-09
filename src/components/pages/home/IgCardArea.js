import React from 'react'
import instagramIcon from '../../img/instagram_icon.png'
import instagramIc from '../../img/instagram_ic.png'
import liveIcon from '../../img/live_icon.png'
import person1 from '../../img/person1.png'
import person2 from '../../img/person2.png'
import person3 from '../../img/person3.png'
import person4 from '../../img/person4.png'

export default function IgCardArea() {
    return (
        <div className='card-ig-area row d-flex justify-content-center'>
            <div className="col-12 col-sm-5 col-md-4">
                <div className="card card-1 d-flex justify-content-center text-center">
                    <img src={instagramIcon} className="ig-icon" alt="..."/>
                    <img src={liveIcon} className="live-icon" alt="..."/>
                    <div style={{marginBottom: '10px'}}>
                        <img src={instagramIc} className="ig-ic" alt="..."/>
                        <span>@bisniscom</span>
                    </div>
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 text-center">
                        <h5>17 Agustus 2020</h5>
                        <h6>11.00 wib</h6>
                        <br/>
                        <p style={{fontSize: '0.8rem'}}>
                            SPIRIT MEMBANGUN INDONESIA
                        </p>
                        <p style={{fontSize: '1.2rem'}}>
                            Mencerdaskan Kehidupan Bangsa Melalui Media
                        </p>
                        <p style={{fontSize: '0.7rem'}}>
                            bersama
                        </p>
                    </div>
                    <div className="row d-flex justify-content-center" style={{fontSize: '0.7rem'}}>
                        <div className="col-4 col-sm-5">
                            <img src={person1} className="person-img" alt="..."/>
                            <p style={{marginBottom: '0'}}>Helmy Yahya</p>
                            <p>(Praktisi Multimedia)</p>
                        </div>
                        <div className="col-4 col-sm-5">
                            <img src={person2} className="person-img" alt="..."/>
                            <p style={{marginBottom: '0'}}>David Eka Issetiabudi</p>
                            <p>(Manager Kontent Bisnis.com)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-5 col-md-4">
                <div className="card card-2 d-flex justify-content-center text-center">
                    <img src={instagramIcon} className="ig-icon" alt="..."/>
                    <img src={liveIcon} className="live-icon" alt="..."/>
                    <div style={{marginBottom: '10px'}}>
                        <img src={instagramIc} className="ig-ic" alt="..."/>
                        <span>@bisniscom</span>
                    </div>
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 text-center">
                        <h5>17 Agustus 2020</h5>
                        <h6>15.00 wib</h6>
                        <br/>
                        <p style={{fontSize: '0.8rem'}}>
                            SPIRIT MEMBANGUN INDONESIA
                        </p>
                        <p style={{fontSize: '1.2rem'}}>
                            Merdeka Finansial
                        </p>
                        <p style={{fontSize: '0.7rem'}}>
                            bersama
                        </p>
                    </div>
                    <div className="row d-flex justify-content-center" style={{fontSize: '0.7rem'}}>
                        <div className="col-4 col-sm-5">
                            <img src={person3} className="person-img" alt="..."/>
                            <p style={{marginBottom: '0'}}>Safir Senduk</p>
                            <p>(Financial Planner)</p>
                        </div>
                        <div className="col-4 col-sm-5">
                            <img src={person4} className="person-img" alt="..."/>
                            <p style={{marginBottom: '0'}}>Maftuh Ihsan</p>
                            <p>(Head of Digital Product Development Bisnis.com)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
