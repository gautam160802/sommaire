import Link from "next/link"

export default function Header() {
    return (
        <nav className="container">
            <div>
                <Link href="/">Sommaire</Link>
            </div>
        </nav>
    )
}