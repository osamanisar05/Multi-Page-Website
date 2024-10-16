import Link from "next/link";
import Image from "next/image"; // Import Image if you're using it

export default function Header() {
    return (
        <>
          <div className="homecontainer">
                <div className="childcontainer">
                <b>ACE Fitness® & Healthy Lifestyle Blog </b> <br /> Elevate Your Life: Fitness Tips for Every Journey! <span className="BlueColour">Get Fit, Feel Fabulous: Join the Fun!</span> <br />
                <span className="RedColour">Support, Inspire, Achieve: Your Fitness Community</span>
                    <br /> <span className="colour">Nourish Your Body, Fuel Your Life </span><br />
                </div>
                <div className="childcontainer">
                    <Image className="Picture" src="/header.png" alt="Picture" width={200} height={200} />
                </div>
            </div>
            <header className="header">
                <nav>
                    <ul className="header-button">
                        <li>
                            <Link href="/">HOME</Link>
                        </li>
                        <li>
                            <Link href="/About">ABOUT US</Link>
                        </li>
                        <li>
                            <Link href="/Contact">CONTACT US</Link>
                        </li>
                        <li>
                            <Link href="/Resources">RESOURCES</Link>
                        </li>
                        <li>
                            <Link href="/CareerSupport">CAREER SUPPORT</Link>
                        </li>
                    </ul>
                </nav>
            </header>
          
        </>
    );
}
