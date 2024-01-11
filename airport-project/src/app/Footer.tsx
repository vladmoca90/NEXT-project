"use client";
import Image from "next/image";
import footerLogo from "../../public/images/footer-logo.png";

export default function AirportFooter() {
    return (
        <div id="Footer">
            <div className="footer-container">
                <div className="footer-image-container">
                    <Image src={footerLogo} className="footer-logo" alt="Footer logo" />
                    <div className="footer-contact">
                        <span>Heathrow Airport Limited,<br />
                            The Compass Centre,<br />
                            Nelson Road, Hounslow<br />
                            Middlesex, TW6 2GW
                        </span>
                        <div className="footer-socials">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-x-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-tiktok"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className="footer-list-content">
                    <h3 className="footer-list-title">Helpful links</h3>
                    <ul className="footer-list">
                        <li>Flights</li>
                        <li>At the airport</li>
                        <li>Transport and directions</li>
                        <li>Shop and Eat</li>
                        <li>Booking</li>
                        <li>FAQs</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="footer-list-content">
                    <h3 className="footer-list-title">Discover Heathrow</h3>
                    <ul className="footer-list">
                        <li>Special offers</li>
                        <li>What to eat</li>
                        <li>Where to shop</li>
                        <li>Parking</li>
                        <li>VIP</li>
                    </ul>
                </div>
                <div className="footer-list-content">
                    <h3 className="footer-list-title">Our company</h3>
                    <ul className="footer-list">
                        <li>About the airport</li>
                        <li>Careers</li>
                        <li>Our community</li>
                        <li>Sustainability</li>
                        <li>Investor information</li>
                        <li>News</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}