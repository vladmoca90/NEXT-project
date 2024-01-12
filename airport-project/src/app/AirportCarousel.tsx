"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import Image from "next/image";
import Popup from "reactjs-popup";
import { Carousel } from "react-responsive-carousel";
import BookingPopUp from "./booking-popup/page";
import flightBooking from "../../public/images/check-in-slider.jpg";
import sliderOne from "../../public/images/slider1.jpg";
import sliderTwo from "../../public/images/slider2.jpg";
import sliderThree from "../../public/images/slider3.jpg";

export default function AirportCarousel() {
    return (
        <div id="airportCarousel">
            <Carousel showArrows={true} showThumbs={false}>
                <div>
                    <Image alt="Flight booking" src={flightBooking} />
                    <div className="carousel-content">
                        <p className="carousel-heading">See your flight details</p>
                        <p className="carousel-subheading">Please enter your name and booking reference.</p>
                        <Popup position="right center" trigger={<button className="carousel-link btn">Check your booking</button>}>
                            <BookingPopUp />
                        </Popup>
                    </div>
                </div>
                <div>
                    <Image alt="Flight information" src={sliderOne} />
                    <div className="carousel-content">
                        <p className="carousel-heading">Flight information</p>
                        <p className="carousel-subheading">Check all flights from Heathrow.</p>
                        <Link className="carousel-link btn" href="/flights">Check all the flights</Link>
                    </div>
                </div>
                <div>
                    <Image alt="Guide to Heathrow" src={sliderTwo} />
                    <div className="carousel-content">
                        <p className="carousel-heading">Guide to Heathrow</p>
                        <p className="carousel-subheading">Check all maps of terminals and TFL.</p>
                        <Link className="carousel-link btn" href="/airport-guide">Check your guide</Link>
                    </div>
                </div>
                <div>
                    <Image alt="Shopping at Heathrow" src={sliderThree} />
                    <div className="carousel-content">
                        <p className="carousel-heading">Shopping at Heathrow</p>
                        <p className="carousel-subheading">Engage in some amazing shopping.</p>
                        <Link className="carousel-link btn" href="/shop-and-eat">Check our shops</Link>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}