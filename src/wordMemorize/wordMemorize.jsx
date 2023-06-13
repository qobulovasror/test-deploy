import { Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./assets/style.css";

const Home = lazy(() => import("./components/home"));
const AddWord = lazy(() => import("./components/addWord"));
const RepeatWord = lazy(() => import("./components/RepeatWord"));
const Test = lazy(() => import("./components/Test"));
const Dictionary = lazy(() => import("./components/dictionary"));

const WordMemorize = () => {
  const [words, setWords] = useState([]);
  
  return (
    <>
      <Suspense
        fallback={
        <div className="p-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        }
      >
        <BrowserRouter>
          <div className="navbar-cus p-3 bg-body-secondary">
            <div className="container">
              <div className="d-flex justify-content-between">
                <Link className="logo" to="/">
                  Word Memorize
                </Link>
                <ul className="nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/add">Add Word</Link>
                  </li>
                  <li>
                    <Link to="/repeat">Word Pepeat</Link>
                  </li>
                  <li>
                    <Link to="/test">Test</Link>
                  </li>
                </ul>
                <Link to="/dictionary" className="btn btn-primary text-light">Dictionary</Link>
              </div>
            </div>
          </div>

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={
                <AddWord 
                  words={words} 
                  setWords={setWords}/>
              } />
              <Route path="/repeat" element={
                <RepeatWord 
                  words={words} 
                  setWords={setWords}/>
              } />
              <Route path="/test" element={
                <Test 
                  words={words}/>
              } />
              <Route path="/dictionary" element={<Dictionary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default WordMemorize;

// import React from "react";
// import AddWord from "./components/addWord";
// import RepeatWord from "./components/RepeatWord";
// import Test from "./components/Test";

// const WordMemorize = () => {
//   return (
//       <div className="row">
//         <div className="col-md-4"></div>
//         <div className="col-md-4">
//             <div className="card p-2 mt-4">

//                 <button className="btn btn-primary mb-1"> Add Word</button>
//                 <button className="btn btn-primary mb-1"> Repeat Word</button>
//                 <button className="btn btn-primary mb-1"> Test</button>
//             </div>
//         </div>
//         <div className="col-md-4"></div>
//       </div>
//   );
// };
// export default WordMemorize;
