import React from "react";

const RepeatWord = (props) => {
  const {words, setWords} = props;
  const changeHandler = ()=>{

  }
  return (
    <>
      <div className="modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Start</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="card mt-3 p-3">
            <h3 className="text-center">Word repeat</h3>
            <form className="bordered p-1">
              <div className="row">
                <div className="col">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="uz-en"
                      value="uz-en"
                    />
                    <label className="form-check-label" htmlFor="uz-en">
                      Uzb-Eng
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="en-uz"
                      value="en-uz"
                      checked
                      onChange={changeHandler}
                    />
                    <label className="form-check-label" htmlFor="en-uz">
                      Eng-Uzb
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="checked"
                    />
                    <label className="form-check-label" htmlFor="checked">
                      checked
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="ordered"
                    />
                    <label className="form-check-label" htmlFor="ordered">
                      ordered
                    </label>
                  </div>
                </div>
              </div>
            </form>
            <div className="card p-2">
                  <div className="d-flex justify-content-around my-1">
                      <div className="col"></div>
                      <h3 className="m-2 col">Word</h3>
                      <button type="button" className="btn btn-secondary">
                          <i className="bi bi-volume-up"></i>
                      </button>
                  </div>
              <div className="d-flex justify-content-around">
                  <div className="col mx-2">
                      <input type="text" placeholder="Enter the word translation" className="form-control text-center" />
                  </div>
                  <button type="button" className="btn btn-primary col-2">
                      <i className="bi bi-check2-square"></i>
                  </button>
              </div>
            </div>
            <div className="card p-2 m-2">
              <div className="row">
                  <div className="col">All: 10</div>
                  <div className="col">Present: 10</div>
                  <div className="col">Current: 10</div>
                  <div className="col">Incorrent: 0</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default RepeatWord;