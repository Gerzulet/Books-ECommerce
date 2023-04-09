import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import wordMark from '../Assets/wordmark.png'


export default function NavBar() {



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

            <NavLink to={`/categoria/desarrolloweb`} className="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white">Desarrollo Web</NavLink>

            <NavLink to={`/categoria/programacion`} className="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white">Programacion</NavLink>

            <NavLink to={`/categoria/algorritmos`} className="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white">Algorritmos</NavLink>




          </div>

          <div className="flex items-center justify-end space-x-5">
            <button type="button" className="p-2 -m-2 text-white transition-all duration-200 lg:hidden hover:text-gray-200">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <button type="button" className="relative p-2 -m-2 text-white transition-all duration-200 hover:text-gray-200">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>

              <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full"> 3 </span>
            </button>
          </div>
        </div>
      </div>
    </header>



  )
}
