import React from 'react'
import '../css/Home.css'
import {Container} from 'react-bootstrap'
import TextArea from './home/TextArea'
import VideoArea from './home/VideoArea'
import IgCardArea from './home/IgCardArea'
import PresidenArea from './home/PresidenArea'
import NewsArea from './home/NewsArea'
import SponsorFooter from './home/SponsorFooter'

export default function Home() {
    return (
        <div className="body">
            <div className='content'>
                <Container>

                    <TextArea />
                    
                    <VideoArea />
                    
                    <IgCardArea />
                    
                    <PresidenArea />

                    <NewsArea />
                    
                    <SponsorFooter />
                    
                </Container>
            </div>

        </div>
    )
}