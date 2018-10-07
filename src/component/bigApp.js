import React from 'react'
import './../index'

const BigApp = ({ data, deleteData }) => {
  const contain = data.map((dataArr) => {

    return (

      <div className="bodd" key={dataArr.id}>

        <div>Name:<span>{dataArr.username}</span></div>
        <div>Age:<span>{dataArr.age}</span></div>
        <div>Designation:<span>{dataArr.designation}</span></div>
        <div><button className="btn-delete" onClick={() => { deleteData(dataArr.id) }}>Delete</button></div>
      </div>
    )
  })
  return (
    <div>
      <div>{contain}</div>
    </div>
  )

}

export default BigApp;