import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png"

export default function AirportNav() {
    return (
        <div className="top-nav">
            <div className="top-nav-container">
                <Link href="/">
                    <Image src={logo} className="logo" alt="Logo" />
                </Link>
                <input title="checkbox" id="menu-toggle" type="checkbox" name="checkbox" />
                <label className="menu-button-container" htmlFor="menu-toggle">
                    <div className="menu-button"></div>
                </label>
                <ul className="nav-menu">
                    <li>
                        <Link href="/flights">Flights</Link>
                    </li>
                    <li>
                        <Link href="/airport-guide">Airport guide</Link>
                    </li>
                    <li>
                        <Link href="/maps">Maps</Link>
                    </li>
                    <li>
                        <Link href="/shop-and-eat">Shop and Eat</Link>
                    </li>
                    <li>
                        <Link href="/prepare">Prepare</Link>
                    </li>
                    <li>
                        <Link href="/help">Help</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}