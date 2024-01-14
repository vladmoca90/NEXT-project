"use client";
import { useCallback, useEffect, useState } from "react";
import { Faq } from "../../../lib/helpFaqs/faq";

export default function AirportHelp() {
    let faqsUrl = "https://airport-next-new.vercel.app/api/help-faqs";

    const [faqs, setFaqs] = useState<Faq[]>([]);

    const getFaqs = useCallback(async () => {
        const res = await fetch(faqsUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setFaqs(data.body);
    }, [faqsUrl]);

    useEffect(() => {
        getFaqs();
    }, [getFaqs]);

    return (
        <div id="airportHelp">
            <div className="airportHelp-banner top-banner">
                <h1 className="heading-title">Help centre for Heathrow Airport users</h1>
            </div>
            <div className="airportHelp-container">
                {
                    faqs.map((faq, index) => {
                        return (
                            <div className="card-full-container" key={index}>
                                <div>
                                    <div className="card-full-container--left" key={index}>
                                        <h3 className="card-full-title">{faq.title}</h3>
                                        <p>{faq.subtitle}</p>
                                    </div>
                                    <div className="card-full-container--right">
                                        {
                                            faq.content.map((content, index) => {
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
                <div className="airportHelp-pay">
                    <div className="airportHelp-pay--left">
                        <div className="airportHelp-pay--left-box">
                            <h3 className="heading-subtitle">Tips to optimize your Heathrow Airport experience!</h3>
                            <p>1. As bug fixes and app improvements may be rolled out from time to time, you may wish to enable automatic app updates on your device settings or keep a look out for latest app versions available.</p>
                            <p>2. Store your Heathrow Account login credentials securely. You may be prompted to re-login. </p>
                            <p>3. Turn on notifications on your device to be updated of maintenance schedules. Alternatively, keep a look out for app advisories on your app - Account - Notifications Inbox (Bell Icon).</p>
                        </div>
                    </div>
                    <div className="airportHelp-pay--right">
                        <a className="btn btn--large" target="_blank" href="https://www.heathrow.com/customer-support">Click to discover more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}