import { Link } from "react-router-dom";
import CartIcon from "../Components/CartWidget"
import { NavLink } from "react-router-dom";
import wordMark from '../Assets/wordmark.png'


export default function NavBar() {



  return (


    <header class="bg-gray-900 border-b border-gray-800">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
        <div class="flex items-center justify-between h-16 lg:h-[72px]">
          <div class="flex items-center flex-shrink-0">
            <a href="#" title="" class="inline-flex">
              <span class="sr-only"> MyLibrary </span>
              <img class="w-auto h-8" src={wordMark} alt="" />
            </a>
          </div>

          <div class="hidden lg:flex lg:justify-center lg:space-x-10 xl:space-x-14">
            <a href="#" title="" class="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white"> Web Development </a>

            <a href="#" title="" class="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white"> Programming </a>

            <a href="#" title="" class="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white"> Algorithms </a>

            <a href="#" title="" class="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white"> Search </a>
          </div>

          <div class="flex items-center justify-end space-x-5">
            <button type="button" class="p-2 -m-2 text-white transition-all duration-200 lg:hidden hover:text-gray-200">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <button type="button" class="relative p-2 -m-2 text-white transition-all duration-200 hover:text-gray-200">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>

              <span class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full"> 3 </span>
            </button>
          </div>
        </div>
      </div>
    </header>



  )
}
