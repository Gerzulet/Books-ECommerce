import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import wordMark from '../Assets/wordmark.png'
import CartIcon from "../Components/CartWidget"

export default function NavBar() {

  function handleScroll() {
    const event = new CustomEvent('scrollToSection', { detail: 'section-id' });
    window.dispatchEvent(event);

  }

  return (


    <header className="bg-gray-900 border-b border-gray-800">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <div className="flex items-center flex-shrink-0">
            <Link to={'/'} >
              <span className="sr-only"> MyLibrary </span>
              <img className="w-auto h-8" src={wordMark} alt="" />
            </Link>
          </div>

          <div className="hidden lg:flex lg:justify-center lg:space-x-10 xl:space-x-14">

            <NavLink to={`/categoria/desarrolloweb`} onClick={handleScroll} className="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white">Desarrollo Web</NavLink>

            <NavLink to={`/categoria/programacion`} onClick={handleScroll} className="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white">Programacion</NavLink>

            <NavLink to={`/categoria/algorritmos`} onClick={handleScroll} className="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white">Algorritmos</NavLink>




          </div>

          <CartIcon />

        </div>
      </div>
    </header>



  )
}
