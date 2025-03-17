import React, { useState } from 'react'
import Add from '../components/Add'
import {Link} from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'
import { ToastContainer , toast } from 'react-toastify';
 

function Home() {
  const [uploadVideoStatus ,setuploadVideoStatus] = useState({})
  return (
   <>
   {/* first section */}
   <div className='container d-flex align-items-center mt-5 justify-content-between'>
    <Add setuploadVideoStatus={setuploadVideoStatus}/>
    <Link style={{textDecoration: 'none'}} to={'/watch'}>
    <span className='fs-5 fw-bold textstyle'>Watch History <i class="fa-solid fa-clock"></i></span>
    </Link>
   </div>
   {/* Second Section */}
   <div className='container-fluid mt-5 w-100 mb-5 '>
    <div className='row'>
        <div className='col-md-9 textstyle'>
          <View uploadVideoStatus={uploadVideoStatus}/>
        </div>
        <div className='col-md-3 textstyle'>
          <Category/>
        </div>
    </div>
   </div>
   </>
  )
}

export default Home