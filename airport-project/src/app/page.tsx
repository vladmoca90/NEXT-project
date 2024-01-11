/* eslint-disable @next/next/no-img-element */
"use client";
import { useCallback, useEffect, useState } from "react";
import { Minicard } from "../../lib/minicards/minicard";
import { Plan } from "../../lib/plans/plan";
import { Event } from "../../lib/events/event";
import AirportCarousel from "./AirportCarousel";
import SearchBar from "./SearchBar";

export default function AirportHomepage() {
    let minicardsUrl = "http://localhost:3000/api/minicards";
    let plansUrl = "http://localhost:3000/api/plans";
    let eventsUrl = "http://localhost:3000/api/events";

    const [minicards, setMinicards] = useState<Minicard[]>([]);
    const [plans, setPlans] = useState<Plan[]>([]);
    const [events, setEvents] = useState<Event[]>([]);

    // For the minicards section
    const getMinicards = useCallback(async () => {
        const res = await fetch(minicardsUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "",
                "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setMinicards(data.body);
    }, [minicardsUrl]);

    //For the Plans section
    const getPlans = useCallback(async () => {
        const res = await fetch(plansUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setPlans(data.body);
    }, [plansUrl]);

    //For the events section
    const getEvents = useCallback(async () => {
        const res = await fetch(eventsUrl, {

        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setEvents(data.body);
    }, [eventsUrl]);

    useEffect(() => {
        getMinicards();
        getPlans();
        getEvents();
    }, [getMinicards, getPlans, getEvents]);

    return (
        <div id="airportHomepage">
            <AirportCarousel />
            <SearchBar />
            <div className="homepage-container">
                <h1 className="heading-title">London-Heathrow Airport is there for you!</h1>
                <div className="airport-minicards">
                    {
                        minicards.map((minicard, index) => {
                            return (
                                <div className="airport-minicards-card" key={index}>
                                    <span className="airport-minicards-tag">{minicard.tag}</span>
                                    <img src={"/images/" + minicard.image} key={index} className="airport-minicards-img" alt={minicard.image} />
                                    <span className="airport-minicards-text">{minicard.description}</span>
                                </div>
                            );
                        })}
                </div>
                <h2 className="heading-subtitle">Prepare your journey</h2>
                <div className="cards">
                    {
                        plans.map((plan, index) => {
                            return (
                                <div className="card-content" key={index}>
                                    <div className="card-image"></div>
                                    <div className="card-content-text">
                                        <h3 className="heading-content">{plan.title}</h3>
                                        <p className="content-text">{plan.description}</p>
                                        <a className="card-link btn" title={plan.urlText} href={plan.url}>{plan.urlText}</a>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className="homepage-bottom">
                <h2 className="heading-subtitle">Heathrow Airport is committed to offer you the best experience of your life!</h2>
                <p className="homepage-bottom-subtitle">Find out more about the latest deals and events.</p>
                <div className="homepage-news">
                    <div className="homepage-news-container">
                        {
                            events.map((event, index) => {
                                return (
                                    <div className="homepage-news-card" key={index}>
                                        <h4>{event.title}</h4>
                                        <p>{event.content}</p>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="homepage-news-link">
                        <a className="cta" target="_blank" href="https://www.heathrow.com/latest-news">View all news</a>
                    </div>
                </div>
            </div>
        </div>
    );
}