import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import newsPict1 from '../../img/news_pict1.png'
import newsPict2 from '../../img/news_pict2.png'
import newsPict3 from '../../img/news_pict3.png'

export default function NewsArea() {
    return (
        <div className="news-area row d-flex justify-content-center">
            <div className="col-12 col-sm-10 col-md-8">
                <div className="row justify-content-between" style={{marginBottom: '0.8rem'}}>
                    <div className="col-6 col-sm-5">Berita <span style={{color:'red'}}>Terkini</span></div>
                    <div className="col-6 col-sm-5 d-flex justify-content-end">Lihat berita lainnya &nbsp;<AiOutlineArrowRight style={{color:'red',marginTop:'5px'}} /></div>
                </div>
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-4">
                        <div className="card" style={{width: '100%'}}>
                            <img src={newsPict1} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="text-date">12 Juli 2020</p>
                                <p className="text-title" style={{color:'red'}}>Hari Kemerdekaan 17 Agustus: Upacara Digelar Minimalis, Ini Simulasinya</p>
                                <p className="text-body">Istana Kepresidenan menggelar latihan penaikan bendera merah putih untuk HUT ke-75 RI dengan petugas minimalis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-4">
                        <div className="card" style={{width: '100%'}}>
                            <img src={newsPict2} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="text-date">12 Juli 2020</p>
                                <p className="text-title">Merah Putih di Puncak Dunia, 2 Srikandi Indonesia Tuntaskan Ekspedisi 7 ...</p>
                                <p className="text-body">Tim The Women of Indonesias Seven Summits Expedition Mahitala Unpar (WISSEMU) berhasil mengibarkan bendera Merah Putih di puncak...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-4">
                        <div className="card" style={{width: '100%'}}>
                            <img src={newsPict3} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="text-date">12 Juli 2020</p>
                                <p className="text-title">Hari Kemerdekaan 17 Agustus: Upacara Digelar Minimalis, Ini Simulasinya</p>
                                <p className="text-body">Catat tanggalnya, 17 Agustus 2020 Pukul 10.17--10.20 WIB, waktunya menghentikan aktivitas sejenak.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
