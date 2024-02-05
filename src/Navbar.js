export default function Navbar() {
    return <nav className="nav">
        <a href = "/" className="site-title">Name</a>
        <ul>
            <li className="active">
                <a href="/team">Team</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/events">Events</a>
            </li>
            <li>
                <a href="/sponsors">Sponsors</a>
            </li>
        </ul>
    </nav>
}