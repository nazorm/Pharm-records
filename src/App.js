import React, { useEffect, useState } from "react";
import RecordCard from "./RecordCard";
import { Input, Button, Spin } from "antd";
import "./App.scss";
import axios from "axios";
const { Search } = Input;

function App() {
  const [pharmaRecords, setPharmaRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const addRecord = () => {
    alert("record added");
  };

  const handleDelete = (id)=>{
    const filtered = pharmaRecords.filter((d)=>{
      return d.id !== id
    })
    setPharmaRecords(filtered)
  }
  useEffect(() => {
    const fetchRecords = async () => {
      setLoading(true);
      const res = await axios.get(
        "http://www.mocky.io/v2/5c3e15e63500006e003e9795"
      );
      setPharmaRecords(res.data.products)
      setLoading(false)
    };
    fetchRecords();
  }, []);
  return (
    <div className="App">
      <h1>Pharma Records</h1>
      <form onSubmit={addRecord} className="addrecord-form">
        <Search
          placeholder="Add records here"
          allowClear
          enterButton="Add"
          size="large"
          onSearch={addRecord}
        />
      </form>
      {loading ? <Spin /> : 
      <div className="record-container">
        {pharmaRecords.map((record)=>{
          return <RecordCard
          key = {record.id}
          recordCardData = {record}
          handleDelete = {handleDelete}
          />
        })}
        
        </div>
      
      }
    </div>
  );
}

export default App;
