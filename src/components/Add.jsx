import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
    const [data,setData]= useState(
        {
            "title":"",    
        "desc":"",
        "date":"",
        "duration":"",
        "venue":"",
        "tname":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readvalue=()=>{
        axios.post("http://localhost:1010/add",data).then(
            (response)=>{
                console.log(data)
                setData(response.data)
                if(response.data.status=="success")
                    {
                        alert("ADDED")
                    }
                    else{
                        alert("error")
                    }
            }
        ).catch().finally()
    }
  return (
    <div>
<NavBar/>
<div className="container">
    <div className="row g-4">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">TITLE</label>
                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler}/>
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">DESCRIPTION</label>
                <input type="text" className="form-control"  name='desc' value={data.desc} onChange={inputHandler}/>
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">DATE</label>
                <input type="date" name="date" id="" className="form-control"  value={data.date} onChange={inputHandler}/>
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">DURATION</label>
                <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler} />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">VENUE</label>
                <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler} />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">TRAINER NAME</label>
                <input type="text" className="form-control" name='tname' value={data.tname} onChange={inputHandler}/>
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-primary" onClick={readvalue}>CLICK HERE </button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Add