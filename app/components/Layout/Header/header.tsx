import { Link } from "@remix-run/react"
import { ModeToggle } from "./mode-toggle"
import Logo from '../../../assets/pokemon.svg';

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
            <Link 
                to="/"
            className="flex items-center gap-2">
                <img src={Logo} alt="Logo" className="w-20"/>
            </Link>
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