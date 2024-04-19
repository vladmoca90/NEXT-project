"use client";
import { useCallback, useEffect, useState } from "react";
import { HeathrowMap } from "../../../lib/mapsGettingToTerminals/heathrowMap";
import { TerminalMap } from "../../../lib/mapsTerminalMaps/terminalMap";

export default function AirportMaps() {
    let mapsUrl = "https://airport-next-new.vercel.app/api/maps-getting-to-terminals";
    let terminalsUrl = "https://airport-next-new.vercel.app/api/maps-terminals-maps";

    const [terminals, setTerminals] = useState<TerminalMap[]>([]);
    const [maps, setMaps] = useState<HeathrowMap[]>([]);

    const getMaps = useCallback(async () => {
        const res = await fetch(mapsUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setMaps(data.body);
    }, [mapsUrl]);

    const getTerminals = useCallback(async () => {
        const res = await fetch(terminalsUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setTerminals(data.body);
    }, [terminalsUrl]);

    useEffect(() => {
        getMaps();
        getTerminals();
    }, [getMaps, getTerminals]);

    return (
        <div id="airportMaps">
            <div className="airport-maps-banner top-banner">
                <h1 className="heading-title">Maps of Heathrow Airports</h1>
            </div>
            <h2 className="heading-subtitle">Getting to your terminal</h2>
            <div className="airport-maps-container">
                <div className="airport-maps-text">
                    <p>Heathrow Airport is one of the world&apos;s most challenging and complex environments.
                        Research shows that a large proportion of 80 million annual passengers suffer time pressure
                        and uncertainty - leading to a stressful experience.</p>
                    <p>Mapping is a tool that can explain and improve awareness - reducing stress.</p>
                    <p>Heathrow had a legacy of multiple different mapping approaches, none of them designed specifically
                        for the inexperienced traveler.</p>
                    <p>The hub-map project consolidated the design into a usability tested standard and applied this
                        physically and digitally in terminals as well as online and on mobiles.</p>
                </div>
                <div className="airport-maps-section">
                    {
                        maps.map((map, index) => {
                            return (
                                <div key={index}>
                                    <div className="airport-section-sides card-shadow" key={index}>
                                        <div className="airport-section--left">
                                            <h3 className="heading-content" key={index}>{map.mapName}</h3>
                                            <p className="content-text">{map.mapText}</p>
                                            <a className="airport-maps-link btn" target="_blank" key={index} href={map.mapUrl}>{map.mapUrlText}</a>
                                        </div>
                                        <div className="airport-section--right"></div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
                <div className="airport-maps-cards bottom-container">
                    <h2 className="heading-subtitle">Terminal maps</h2>
                    <div className="airport-maps-section">
                        {
                            terminals.map((terminal, index) => {
                                return (
                                    <div className="airport-terminal-maps" key={index}>
                                        <h3 className="heading-content" key={index}>{terminal.terminalName}</h3>
                                        <p className="content-text">{terminal.terminalText}</p>
                                        <a className="airport-maps-link btn btn--large" target="_blank" key={index} href={terminal.terminalUrl}>{terminal.terminalUrlText}</a>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}