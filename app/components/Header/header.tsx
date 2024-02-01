import { Link } from "@remix-run/react"
import { ModeToggle } from "./mode-toggle"

const headerLinks = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Contact",
        path: "/contact",
    },
    ]

const Header = () => {
  return (
    <>
        <header className="flex justify-between items-center p-4">
            <div className="flex items-center gap-2">
                <img src="" alt="Logo" />
                <p>Logo</p>
            </div>
            <nav>
                <ul className="flex gap-4 text-lg font-semibold uppercase tracking-wider" role="navigation">
                    {headerLinks.map((link) => (
                        <li key={link.path}>
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <ModeToggle />
        </header>
    </>
  )
}

export default Header