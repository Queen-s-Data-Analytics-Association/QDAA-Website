export default function Navbar() {
    return <nav className="nav">
        <a href = "/" className="site-title">Name</a>
        <ul>
            <li>
                <a href="/team">Team</a>
                <a href="/projects">Projects</a>
                <a href="/events">Events</a>
                <a href="/sponsors">Sponsors</a>
            </li>
        </ul>
    </nav>
}