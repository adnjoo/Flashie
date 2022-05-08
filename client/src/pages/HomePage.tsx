import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Flashcard from '../components/FlashCard';
import Navigation from '../components/Navigation';

function HomePage() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('http://localhost:4001/getcards');
      setApiData(data);
    })();
  }, []);
  return (
    <div>
      <Navigation />
      HomePage
      <div className="container m-auto">
        {apiData.length > 0 && apiData?.map((ele) => <Flashcard card={ele} />)}
      </div>
    </div>
  );
}

export default HomePage;
