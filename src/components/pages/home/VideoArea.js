import React from 'react'
import videoPict1 from '../../img/video_pict1.png'

export default function VideoArea() {
    return (
        <div className='video-area row d-flex justify-content-center'>
            <div class="col-12 col-sm-10 col-md-8">
                <img src={videoPict1} alt="video_pict1" />
            </div>
        </div>
    )
}
