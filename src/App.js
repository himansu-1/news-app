import React,{useState} from 'react';

import Navbar from './Components/Navbar';
import News from './Components/News';
import SideBar from './Components/SideBar';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Spinner from './Components/Spinner';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// const propTypes = {};

// const defaultProps = {};

const App =()=> {

  const [progress, setprogress] = useState(0)

    return (
      <>
        <Router>

          <div className="container-flex  my-2">
            <Navbar />

            <LoadingBar className='position-absolute'
              height={4}
              color='#f11946'
              progress={progress}
              
            />

            <div className="row mt-6">
              <div className="col-md-2 ml-5 pl-5 pr-0">
                <SideBar />
              </div>
              <div className="col-md-8 m-0 px-3">
                {/* <News pageSize='9' country='in' category='general'/> */}
                <Routes>
                  <Route exact path="/" element={<News setProgress={setprogress} heading='Top General News' key='general' pageSize='9' country='in' category='general' />} />

                  <Route exact path="business" element={<News setProgress={setprogress} heading='Top Business News' key='business' pageSize='9' country='in' category='business' />} />

                  <Route exact path="entertainment" element={<News setProgress={setprogress} heading='Top Entertainment News' key='entertainment' pageSize='9' country='in' category='entertainment' />} />

                  <Route exact path="health" element={<News setProgress={setprogress} heading='Top Health News' key='health' pageSize='9' country='in' category='health' />} />

                  <Route exact path="science" element={<News setProgress={setprogress} heading='Top Science News' key='science' pageSize='9' country='in' category='science' />} />

                  <Route exact path="sports" element={<News setProgress={setprogress} heading='Top Sports News' key='sports' pageSize='9' country='in' category='sports' />} />

                  <Route exact path="technology" element={<News setProgress={setprogress} heading='Top Technology News' key='technology' pageSize='9' country='in' category='technology' />} />

                </Routes>


              </div>
              <div className="col-md-1 m-0 p-0">
                <div>

                  helo
                </div>
              </div>
            </div>
          </div>



        </Router>
      </>)
  
}

// App.propTypes = propTypes;
// App.defaultProps = defaultProps;
// #endregion

export default App;


// This is my news API
// 8e920e1cb8ac45e48776ee2d80ef9970