import React from 'react'
import presidenPict from '../../img/presiden_pict.png'

export default function PresidenArea() {
    return (
        <div className="presiden-area row d-flex justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 d-flex justify-content-center">
                <img src={presidenPict} alt="video_pict1" />
                <p className="p1">75 Tahun Indonesia Merdeka</p>
                <p className="p2">"BAGIMU NEGERI"</p>
            </div>
        </div>
    )
}
