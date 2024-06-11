import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data,changedData]= useState([])
    const fetchData=()=>{
        axios.get("http://localhost:1010/view").then(
            (response)=>{
changedData(response.data)
            }
        ).catch().finally()
    }
        
    useEffect(()=>{fetchData()},[])
  return (
    <div><NavBar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div className="row g-4">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">TITLE</th>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">DATE</th>
      <th scope="col">DURATION</th>
      <th scope="col">VENUE</th>
      <th scope="col">TRAINER NAME</th>

    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,index)=>{
            return <tr>
            <th scope="row">1</th>
          <td>{value.title}</td>
          <td>{value.desc}</td>
          <td>{value.date}</td>
          <td>{value.duration}</td>
          <td>{value.venue}</td>
          <td>{value.tname}</td>
        </tr>
        }
    )}
  
  </tbody>
</table>

            </div>
        </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default ViewAll