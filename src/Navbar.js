import { Link } from "react-router-dom"

export default function Navbar() {
    const path = window.location.pathname
    return (
    <nav className="nav">
        <Link to = "/" className="site-title">
            Name
        </Link>
        <ul>
            <CustomLink to="/team">Team</CustomLink>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/events">Events</CustomLink>
            <CustomLink to="/sponsors">Sponsors</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname

    return (
    <li className={path === to ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
    </li>
    )
}