// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import DataChart from './DataChart';
import ControlPanel from './ControlPanel';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [refreshInterval, setRefreshInterval] = useState(20000000); // default 10 seconds

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/data");
      const dataResponse = await response.json()
      setData([...data, dataResponse.data.average]); // append new data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, refreshInterval);
    return () => clearInterval(intervalId);
  }, [refreshInterval]);

  return (
    <div className="dashboard">
      <ControlPanel setRefreshInterval={setRefreshInterval} />
      <DataChart data={data} />
    </div>
  );
};

export default Dashboard;