import React, { useEffect, useState } from "react";
import RecordCard from "./RecordCard";
import { Spin } from "antd";
import "./App.scss";
import axios from "axios";

function App() {
  const [pharmaRecords, setPharmaRecords] = useState([]);
  const [addedRecord, setAddedRecord] = useState("");
  const [loading, setLoading] = useState(true);
  const [count, setCount]= useState(15);
const date = new Date().toLocaleDateString();
  const handleAddedRecord = (e) => {
    const { value } = e.target;
    setAddedRecord(value);
  };

  const addRecord = (e) => {
    e.preventDefault();
    setCount(c => c + 1)
    const newRecord = {
      id: count,
      name: addedRecord,
      prices: [
        {
          id: 1,
          price: "",
          date: date,
        },
        {
          id: 2,
          price: "",
          date: "",
        },
      ],
    };
    const newRecordList = [newRecord, ...pharmaRecords];
    setPharmaRecords(newRecordList);
  };

  const handleDelete = (id) => {
    const filtered = pharmaRecords.filter((d) => {
      return d.id !== id;
    });
    setPharmaRecords(filtered);
  };
  useEffect(() => {
    const fetchRecords = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://www.mocky.io/v2/5c3e15e63500006e003e9795"
      );
      setPharmaRecords(res.data.products);
      setLoading(false);
    };
    fetchRecords();
  }, []);
  return (
    <div className="App">
      <h1>Pharma Records</h1>
      <form onSubmit={addRecord} className="addrecord-form">
        <input
          type="text"
          value={addedRecord}
          placeholder="Add records here..."
          className="add-input"
          onChange={handleAddedRecord}
        />
        <button className="add-btn">Add</button>
      </form>
      {loading ? (
        <Spin />
      ) : (
        <div className="record-container">
          {pharmaRecords.map((record) => {
            return (
              <RecordCard
                key={record.id}
                recordCardData={record}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
