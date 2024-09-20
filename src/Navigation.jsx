import { Link, useMatch, useResolvedPath } from "react-router-dom"
function Navigation() {
   return(
    <nav className = "nav">
        <Link to = "/" className = "about-me">
        
        </Link>
        <ul>
            <CustomLink to = "/"> About Me</CustomLink>
            <CustomLink to = "/portfolio">Portfolio</CustomLink>
            <CustomLink to = "/Contact">Contact</CustomLink>
            <CustomLink to = "/Card">Resume</CustomLink>
        </ul>
    </nav>    
   )
}
function CustomLink ({ to, children, ...props }){
 const resolvedPath = useResolvedPath(to)  
 const isActive = useMatch({ path: resolvedPath.pathname, end: true }) 
    return(
        <li className = {isActive ? "active" : ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navigation