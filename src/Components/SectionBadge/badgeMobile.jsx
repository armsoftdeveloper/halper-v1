import React from "react";
import badgeImg1 from "../../images/badgeMobile.png";
import appStore from "../../images/app_store_mobile.png";
import playMarket from "../../images/play_market_mobile.png";

export default function badgeMobile() {
    return (
        <div className="badge-mobile">
            <div className="badge-mobile-top">
                <h1>All your solutions Are on Halper</h1>
                <img src={badgeImg1} />
            </div>
            <div className="badge-mobile-bottom">
                <img src={appStore} />
                <img src={playMarket} />
            </div>
        </div>
    )
}