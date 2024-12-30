import {Link, NavLink} from 'react-router-dom'


function Navbar() {
    return (
        <nav className='flex bg-slate-500 px-4 mx-4'>
            <ul className='flex gap-3 focus:bg-red-500'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                {/* We can Add class in nav link */}
                <li>
                    <NavLink to="/about" className={(e)=> {return e.isActive ? "bg-red-500" : ""}} >About</NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar