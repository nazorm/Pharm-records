import React, { useState } from "react";
import { Input, DatePicker } from "antd";
import "./App.scss";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const RecordCard = ({recordCardData, handleDelete}) => {
  const { id, name, prices } = recordCardData;
  const [productName, setProductName] = useState(name)
  const [oldPrice, setOldPrice] = useState(prices[1].price)
  const [newPrice, setNewPrice] = useState(prices[0].price)
  const [date, setDate] = useState(prices[0].date)
  const [disabled, setDisabled] = useState(true)
  const handleEdit=()=>{
    setDisabled(false)
  }
  const handleName=(e)=>{
      const {value} = e.target
    setProductName(value)
  }
  const handleOldPrice=(e)=>{
    const {value} = e.target
    setOldPrice(value)
  }
  const handleNewPrice=(e)=>{
    const {value} = e.target
    setNewPrice(value)
  }
  const handleDate=()=>{
  }
  return (
    <div className="record-card">
        <Input className="drug-name" value= {productName} disabled={disabled} onChange={handleName}/>
        <Input key = {prices[1].id} className="old-price" value= {oldPrice} disabled={disabled} onChange={handleOldPrice}/>
        <Input  key = {prices[0].id}className="new-price" value= {newPrice} disabled={disabled} onChange={handleNewPrice}/>
        <DatePicker onChange={handleDate}  />
      <FiEdit2 className = "record-card-edit-icon" onClick={handleEdit}/>
      <MdDelete className = "record-card-delete-icon"  onClick={()=>handleDelete(id)}/>
    </div>
  );
};

export default RecordCard;
