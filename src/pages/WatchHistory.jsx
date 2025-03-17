import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { deleteWatchHistory, getHistory } from '../services/allApi';

function WatchHistory() {
  const [allHistory, setallHistory] = useState([])
  
  const getAllHistory = async () => {
    const resp = await getHistory();
    console.log("History");
    const { data } = resp;
    setallHistory(data)
  }
  useEffect(() => {
    getAllHistory()
  }, [])
  const deleteHistory = async(id) =>{
    await deleteWatchHistory(id);
        getAllHistory()
  }
  return (
    <>
      <div className='container mt-5 d-flex justify-content-between'>
        <h3 className='textstyle'>Watch History</h3>
        <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-arrow-left me-3"></i>Back To Home</Link>
      </div>
      <table className='textstyle table mt-5 mb-5 container' data-bs-theme='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>CAPTION</th>
            <th>URL</th>
            <th>TIME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            allHistory.length > 0 ?
              allHistory.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.caption}</td>
                  <td>{item.embededLink}</td>
                  <td>{item.timeStamp}</td>
                  <td><Button variant="danger " onClick={()=>deleteHistory(item.id)}><i class="fa-solid fa-trash"></i></Button></td>
                </tr>
              )) :
              <p>NO History Found</p>
          }

        </tbody>
      </table>
    </>
  )
}

export default WatchHistory