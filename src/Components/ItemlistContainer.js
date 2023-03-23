import React, { Fragment } from 'react'
import ItemList from './ItemList';
import Hero from '../Components/Hero'


function ItemlistContainer() {
  return (

    <Fragment>
      <Hero />
      <span id="itemlistcontainer" className=' md:flex md:justify-center md:mb-[50vh]'>
        <br /><br /><br /><br /><br />

        <ItemList />
      </span>

    </Fragment>

  )
}

export default ItemlistContainer;
