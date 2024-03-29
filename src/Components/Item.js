import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import "../Assets/Item.css"

export default function Item(props) {

  useEffect(() => {
    const handleScrollToSection = (event) => {
      if (event.detail === 'section-id') {
        const section = document.getElementById('section-id');
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('scrollToSection', handleScrollToSection);
    return () => {
      window.removeEventListener('scrollToSection', handleScrollToSection);
    };
  }, []);


  return (

    <div id="section-id" className='card md:mx-5 my-5 '>
      <div className="w-full max-w-sm bg-[#262626] rounded-md shadow-md  hover:border-4 border-yellow-500">


        <img className="p-8 rounded-t-lg" src={props.img} alt="product" />

        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-white">{props.nombre}</h5>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="bg-blue-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 text-blue ml-3">Calificacion: {props.calificacion}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-1xl font-bold text-white">{props.autor}</span>


            <NavLink to={`/${props.categoria}/${props.id}`} className="text-white bg-blue-700 transition ease-in-out  hover:-translate-y-2  hover:scale-110 hover:bg-indigo-500 duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Me interesa!</NavLink>
          </div>
        </div>
      </div>

    </div>

  )

}
