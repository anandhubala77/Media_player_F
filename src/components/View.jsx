import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllVideos } from '../services/allApi'


function View({uploadVideoStatus}) {
  const [deleteVideoStatus,setdeleteVideoStatus] = useState({})

  const [allVideos, setAllVideos] = useState([])
  const getVideos = async () => {
    const resp = await getAllVideos();
    const { data } = resp;
    setAllVideos(data)
  }
  useEffect(() => {
    getVideos()
  }, [uploadVideoStatus,deleteVideoStatus])

  return (
    <>
      <Row style={{gap:'30px'}}>
        {
      allVideos?.map((item =>(
        <Col sm={12} md={6} lg={4} xl={3}>
        <Videocard displayVideo={item} setdeleteVideoStatus={setdeleteVideoStatus}/>
        </Col>
        )))
      }
      </Row>
    </>
  )
}
export default View
