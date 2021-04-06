import React from 'react'
import "./Home.css"
import Product from "./Product";

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>
          
                <div className="home__row">
                    <Product id="12345678" title="Iphone 12" price={299.99} image="https://a-static.mlcdn.com.br/1500x1500/iphone-12-apple-64gb-preto-61-cam-dupla-12mp-ios/magazineluiza/155597600/9408d88b11867dba530d25ba2031f984.jpg" rating={5}/>
                    <Product id="12568756" title="The lean startup" price={999.99} image="https://a-static.mlcdn.com.br/600x600/monitor-gamer-curvo-samsung-odyssey-49-dqhd-lc49g95-240hz-1ms-hdmi-display-port-usb-g-sync-freesync-premium-pro-branco-serie-g9/lojasamsungoficial1/1619/c23e71c55f75ce7e58970df0b97956e8.jpg" rating={5}/>
                </div>

                <div className="home__row">
                    <Product id="12345678" title="Iphone 12" price={299.99} image="https://a-static.mlcdn.com.br/1500x1500/iphone-12-apple-64gb-preto-61-cam-dupla-12mp-ios/magazineluiza/155597600/9408d88b11867dba530d25ba2031f984.jpg" rating={5}/>
                    <Product id="12568756" title="The lean startup" price={999.99} image="https://a-static.mlcdn.com.br/600x600/monitor-gamer-curvo-samsung-odyssey-49-dqhd-lc49g95-240hz-1ms-hdmi-display-port-usb-g-sync-freesync-premium-pro-branco-serie-g9/lojasamsungoficial1/1619/c23e71c55f75ce7e58970df0b97956e8.jpg" rating={5}/>
                    <Product id="12568756" title="The lean startup" price={999.99} image="https://a-static.mlcdn.com.br/600x600/monitor-gamer-curvo-samsung-odyssey-49-dqhd-lc49g95-240hz-1ms-hdmi-display-port-usb-g-sync-freesync-premium-pro-branco-serie-g9/lojasamsungoficial1/1619/c23e71c55f75ce7e58970df0b97956e8.jpg" rating={5}/>
                </div>

                <div className="home__row">
                    <Product id="12568756" title="The lean startup" price={999.99} image="https://a-static.mlcdn.com.br/600x600/monitor-gamer-curvo-samsung-odyssey-49-dqhd-lc49g95-240hz-1ms-hdmi-display-port-usb-g-sync-freesync-premium-pro-branco-serie-g9/lojasamsungoficial1/1619/c23e71c55f75ce7e58970df0b97956e8.jpg" rating={5}/>
                </div>
            </div>
        </div>
        
    )
}
