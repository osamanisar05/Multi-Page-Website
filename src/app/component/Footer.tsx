import Link from "next/link"
export default function Footer(){
    return(
      <div className="footer">
        <ul className="footer-button">
          <Link href="Efforts"> 
          <li>OUR EFFORTS</li>
          </Link>
          <Link href="/Specialist">
          <li>SPECIALIST PROGRAMS</li>
          </Link>
          <Link href="/Terms">
          <li>TERMS & CONDITIONS</li>
          </Link>
          <Link href="/Impact">
          <li>IMPACT</li>
          </Link>
          <Link href="/Privacy">
          <li>PRIVACY POLICY</li>
          </Link>        
        </ul>
      </div>
    )
  } 