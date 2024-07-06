import React, { useState, useEffect } from 'react';
import './ComponentsCss/CustomCursor.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import CustomCursor from './Components/CustomCursor';
import Home from './Components/Home';
import { DNA } from 'react-loader-spinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return (
      <>
        <div className='loader'>
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      </>
    )
  }

  return (
    <>
      <CustomCursor />
      <Home />
    </>
  );
}

export default App;
