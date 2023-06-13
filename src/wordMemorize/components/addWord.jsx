import React from "react";
import { toast } from "react-toastify";

const AddWord = (props) => {
  const {words, setWords} = props;
  const addListHandler = (e)=>{
    e.preventDefault();
    let eng = e.target.eng.value;
    let uzb = e.target.uzb.value;
    if(eng.length<1 || uzb.length<1){
      toast.warn("fields must be filled 🙁")
      return;
    }
    setWords([...words, { eng,uzb }])
    e.target.eng.value = ""
    e.target.uzb.value = ""
  }
  const deleteItemhandler = (delIndex)=>{
    if(confirm("delete this item?")){
      let newWord = [...words];
      newWord.splice(delIndex, 1);
      setWords(newWord)
    }
  }

  const editItemhandler = ()=>{

  }
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <div className="card mt-4 p-3">
          <h3 className="text-center">Word count: {words.length}</h3>
          <form onSubmit={addListHandler}>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="word1" className="form-label">
                    English:
                  </label>
                  <input type="text" name="eng" className="form-control" id="word1" placeholder="e.g.: word" />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="word2" className="form-label">
                    Uzbek:
                  </label>
                  <input type="text" name="uzb" className="form-control" id="word2" placeholder="e.g.: so'z" />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Add
            </button>
          </form>
          <br />
          <div className="card p-2" style={{ maxHeight: "450px", overflow: "hidden auto"}}>
            <ul className="list-group">
              {
                (words && words.length>0)?
                  words.map((item, index)=>(
                    <li className="list-group-item" key={index}>
                      <div className="row">
                          <div className="col p-2 ms-2"><b>Eng: </b> {item.eng}</div>
                          <div className="col p-2"><b>Uzb: </b> {item.uzb}</div>
                          <div className="col f-flex">
                              <div className="btn btn-primary">
                                <i onClick={()=>editItemhandler(item, index)} className="bi bi-pencil-square"></i>
                              </div>
                              <div className="btn btn-danger ms-2">
                                  <i onClick={()=>deleteItemhandler(index)} className="bi bi-trash3"></i>
                              </div>
                          </div>
                      </div>
                    </li>
                  )) :
                  <li className="list-group-item text-center">no items</li>
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default AddWord;
