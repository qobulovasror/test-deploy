import React, { useState } from "react";

const Dictionary = ()=>{
    const [resData, setResData] = useState(null)
    const fetchHandler = async () => {
        try {
          const response = await fetch(
            `https://eng-uzb-dictionary-app.onrender.com/api/words/`
          );
          const res = await response.json();
    
          if (response.ok) {
            console.log(res);
            setResData(res)
          } else {
            console.log("not ok");
          }
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <>
            <div onClick={fetchHandler} className="btn btn-primary">fetch</div>
        </>
    )
}

export default Dictionary;