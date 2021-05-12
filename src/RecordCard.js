import React, { useState } from "react";
import { DatePicker } from "antd";
import "./App.scss";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const RecordCard = ({ recordCardData, handleDelete }) => {
  const { id, name, prices } = recordCardData;
  const [productName, setProductName] = useState(name);
  const [oldPrice, setOldPrice] = useState(prices[1].price);
  const [newPrice, setNewPrice] = useState(prices[0].price);
  const [disabled, setDisabled] = useState(true);
  const handleEdit = () => {
    setDisabled(false);
  };
  const handleName = (e) => {
    const { value } = e.target;
    setProductName(value);
  };
  const handleOldPrice = (e) => {
    const { value } = e.target;
    setOldPrice(value);
  };
  const handleNewPrice = (e) => {
    const { value } = e.target;
    setNewPrice(value);
  };
  const dateAdded = new Date(`${prices[0].date}`).toLocaleDateString();
  return (
    <div className="record-card">
      <input
        className={disabled? "drug-name": "drugname-edit"}
        value={productName}
        disabled={disabled}
        onChange={handleName}
      />
      <span>
        ${" "}
        <input
          key={prices[1].id}
          className={disabled? "old-price" : "oldprice-edit" }
          value={oldPrice}
          disabled={disabled}
          onChange={handleOldPrice}
        />
      </span>
      <span>
        ${" "}
        <input
          key={prices[0].id}
          className={disabled? "new-price" : "newprice-edit" }
          value={newPrice}
          disabled={disabled}
          onChange={handleNewPrice}
        />
      </span>
  <span>{dateAdded=== ""? <DatePicker/> :dateAdded}</span>
  {/* <span><DatePicker/></span> */}
      <FiEdit2 className="record-card-edit-icon" onClick={handleEdit} />
      <MdDelete
        className="record-card-delete-icon"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
};

export default RecordCard;
