import Button from './Button'

function Navbar() {
  return (
    <div>
        <nav className='flex bg-slate-500 px-4 mx-4'>
            <ul className='flex gap-3 focus:bg-red-500'>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/services">Services</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
            </ul>
        </nav>
        <Button/>
    </div>
  )
}

export default Navbar