import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './logo.png'

export default function Navbar() {
    const path = window.location.pathname
    return (
    <nav className="nav">
        <Link to = "/" className="site-title">
            <img src={logo} width={75} height={50}/>
        </Link>
        <ul>
            <CustomLink to="about">About</CustomLink>
            <CustomLink to="/team">Team</CustomLink>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/events">Events</CustomLink>
            <CustomLink to="/sponsors">Sponsors</CustomLink>
        </ul>
    </nav>
    )
}


function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
    </li>
    )
}