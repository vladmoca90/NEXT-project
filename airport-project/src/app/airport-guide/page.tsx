"use client";
import { useCallback, useEffect, useState } from "react";
import { Destination } from "../../../lib/guide-destinations/destination";
import { Guide } from "../../../lib/guide-cards/guide";

export default function AirportGuide() {
    let destinationsUrl = "http://localhost:3000/api/guide-destinations";
    let guidesUrl = "http://localhost:3000/api/guide-cards";

    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [guides, setGuides] = useState<Guide[]>([]);

    const getGuides = useCallback(async () => {
        const res = await fetch(guidesUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setGuides(data.body);
    }, [guidesUrl]);

    const getDestinations = useCallback(async () => {
        const res = await fetch(destinationsUrl);

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setDestinations(data.body);
    }, [destinationsUrl]);

    useEffect(() => {
        getGuides();
        getDestinations();
    }, [getDestinations, getGuides]);

    return (
        <div id="airportGuide">
            <div className="airportGuide-banner top-banner">
                <h1 className="heading-title">Your guide to Heathrow Airport</h1>
            </div>
            <div className="airportGuide-container">
                {
                    guides.map((guide, index) => {
                        return (
                            <div className="card-full-container" key={index}>
                                <div>
                                    <div className="card-full-container--left" key={index}>
                                        <h3 className="card-full-title">{guide.title}</h3>
                                        <p>{guide.subtitle}</p>
                                    </div>
                                    <div className="card-full-container--right">
                                        {
                                            guide.content.map((content, index) => {
                                                return (
                                                    <div className="card-shadow" key={index}>
                                                        <span key={index}>{content}</span>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                <div className="airportGuide-statistics">
                    <div className="airportGuide-statistics-text">
                        <h3 className="heading-subtitle">Destinations</h3>
                        <p>From Heathrow you can fly to 214 destinations across 84 countries on all inhabited continents. And you have 89 airlines to choose from.</p>
                        <div className="airportGuide-cards cards">
                            {
                                destinations.map((destination, index) => {
                                    return (
                                        <div className="card-content" key={index}>
                                            <div className="card-image" key={index}></div>
                                            <div className="card-content-text" key={index}>
                                                <h3 className="heading-content">{destination.title}</h3>
                                                <p className="content-text">{destination.description}</p>
                                                <a className="card-link btn" title={destination.urlText} href={destination.url}>{destination.urlText}</a>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="airportGuide-planespotting">
                <div className="airportGuide-planespotting-container bottom-container">
                    <h3 className="heading-subtitle">Getting a unique experience!</h3>
                    <p className="heading-content">Heathrow airport is a paradise for planespotters!</p>
                    <p>With multiple aircraft taking off, landing and taxi-ing across the airfield throughout the day,
                        Heathrow is a real joy for plane enthusiasts.</p>
                    <a className="airportGuide-link btn btn--large" target="_blank" href="https://www.spotterguide.net/planespotting/europe/united-kingdom/heathrow-lhr-egll/">Click to discover more</a>
                </div>
            </div>
        </div>
    );
}