import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Flashcard from '../components/FlashCard';
import Navigation from '../components/Navigation';

function HomePage() {
  const [apiData, setApiData] = useState([]);
  const f = async () => {
    const { data } = await axios.get('http://localhost:4001/getcards');
    setApiData(data);
  };
  useEffect(() => {
    f();
  }, []);
  useEffect(() => {
    console.log(apiData);
  }, [apiData]);
  return (
    <div>
      <Navigation />
      HomePage
      hi
      {apiData.length > 0 && apiData?.map((ele) => <Flashcard card={ele} />)}
    </div>
  );
}

export default HomePage;
