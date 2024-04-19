"use client";
import { ChangeEvent, useCallback, useState } from "react";
import Link from "next/link";

export default function BookingPopUp() {
    let bookingsUrl = "https://airport-next-3ccx1ojiy-vladmoca90s-projects.vercel.app/api/bookings";

    const [surnameText, setSurnameText] = useState("");
    const [bookingText, setBookingText] = useState("");

    // Two functions that return the text value of the inputs
    const onSurname = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSurnameText(e.target.value);
    }, []);

    const onBooking = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setBookingText(e.target.value);
    }, []);

    // A function that disables or activates the button according to the input text length
    const bookingBtnActive = useCallback(() => {
        if (surnameText.length == 0 || bookingText.length == 0) {
            return `btn btn-booking disabled`;
        } else {
            return `btn btn-booking`;
        }
    }, [bookingText, surnameText]);

    // Posting the input value data
    const onClick = useCallback(async () => {
        await fetch(bookingsUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "surname": surnameText,
                "bookingCode": bookingText,
            }),
        })
    }, [bookingsUrl, bookingText, surnameText]);

    return (
        <div id="bookingPopUp" className="card-shadow">
            <div className="booking-top">
                <h3 className="booking-title"><i className="fa-brands fa-plane"></i>Check your booking</h3>
            </div>
            <div className="booking-content">
                <div id="bookingSurname" className="booking-input-container">
                    <form>
                        <label>Surname:</label>
                        <input placeholder="Enter your surname" type="text" name="Surname" onChange={onSurname} value={surnameText} />
                    </form>
                </div>
                <div id="bookingCode" className="booking-input-container">
                    <form>
                        <label>Booking code:</label>
                        <input placeholder="Enter booking code" type="text" name="Booking code" onChange={onBooking} value={bookingText} />
                    </form>
                </div>
            </div>
            <div className="booking-bottom">
                <div id="bookingBtn" className="booking-btn-container">
                    <Link href={{
                        pathname: "/booking-details",
                        query: {
                            "surname": surnameText.trim(),
                            "bookingCode": bookingText.trim(),
                        }
                    }} className={bookingBtnActive()} onClick={onClick}>Search your booking</Link>
                </div>
            </div>
        </div>
    );
}