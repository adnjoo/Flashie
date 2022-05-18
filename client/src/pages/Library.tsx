import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Flashcard from '../components/FlashCard';

function Library() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('http://localhost:4001/getcards');
      setApiData(data);
    })();
  }, []);
  return (
    <div>
      <div className="container m-auto mt-5">
        {apiData.length > 0 && apiData?.map((ele) => <Flashcard card={ele} />)}
      </div>
    </div>
  );
}

export default Library;
