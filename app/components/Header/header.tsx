import { ModeToggle } from "./mode-toggle"

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <ModeToggle />
        </header>
    </>
  )
}

export default Header