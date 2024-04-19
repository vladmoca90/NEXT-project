/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import googlePlayImg from "../../../public/images/google-play.png";
import { useCallback, useEffect, useState } from "react";
import { Shop } from "../../../lib/shopAndEat/shop";

export default function AirportShopAndEat() {
    let shopsUrl = "https://airport-next-new.vercel.app/api/shop-and-eat";

    const [shops, setShops] = useState<Shop[]>([]);

    const getShops = useCallback(async () => {
        const res = await fetch(shopsUrl);

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setShops(data.body);
    }, [shopsUrl]);

    useEffect(() => {
        getShops();
    }, [getShops]);

    return (
        <div id="airportShopAndEat">
            <div className="airport-shopandeat-banner top-banner">
                <h1 className="heading-title">Shop and Eat at Heathrow Airport</h1>
            </div>
            <div className="airport-shops-cards">
                {
                    shops.map((shop, index) => {
                        return (
                            <div className="shops-card card-shadow" key={index}>
                                <img alt="Shop card" className="shops-card-img" key={index} src={shop.shopImage} />
                                <div className="shops-card-link">
                                    <a className="cta" target="_blank" key={index} href={shop.shopUrl}>View the shop</a>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <div className="airport-shops-app bottom-container">
                <div>
                    <h3 className="heading-subtitle">Download our app to pre-order food and drinks at Heathrow!</h3>
                    <p className="heading-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a rel="noopener" className="airport-shopandeat-link btn btn--large" target="_blank" href="https://play.google.com/store/apps/details?id=com.baa.heathrow&feature=more_from_developer#?t=W251bGwsMSwyLDEwMiwiY29tLmJhYS5oZWF0aHJvdyJd">Download our app</a>
                </div>
                <Image alt="Google Play icon" className="google-play-img" src={googlePlayImg} />
            </div>
        </div>
    );
}