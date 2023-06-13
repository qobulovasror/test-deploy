import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container px-4 text-center">
        <div className="row mt-3">
          <Link
            to="/add"
            className="col card p-3 py-4 m-3 text-center bg-primary bg-gradient text-light"
            role="button"
          >
            <i className="bi bi-plus-square-fill fs-3"></i>
            <span className="fs-4 text-decoration-none">
              Yangi so'zlar kiritish
            </span>
          </Link>
          <Link
            to="/repeat"
            className="col card p-3 py-4 m-3 text-center bg-primary bg-gradient text-light"
            role="button"
          >
            <i className="bi bi-arrow-repeat fs-3"></i>
            <span className="fs-4">Takrorlash kerak bo'lgan so'zlar</span>
          </Link>
        </div>
        <div className="row">
          <Link
            to="/test"
            className="col card p-3 py-4 m-3 text-center bg-primary bg-gradient text-light"
            role="button"
          >
            <i className="bi bi-card-checklist fs-3"></i>
            <span className="fs-4">Test orqali so'z yodlash</span>
          </Link>
          <Link
            to="/dictionary"
            className="col card p-3 py-4 m-3 text-center bg-primary bg-gradient text-light"
            role="button"
          >
            <i className="bi bi-list-columns fs-3"></i>
            <span className="fs-4">Lug'at</span>
          </Link>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Word Memorization Program</h5>
                <p className="card-text">
                  Welcome to our Word Memorization Program! This program helps
                  you improve your vocabulary by memorizing words and their
                  meanings.
                </p>
                <a href="/add" className="btn btn-primary">
                  Start Practicing
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">About the Program</h5>
                <p className="card-text">
                  Our Word Memorization Program uses scientifically proven
                  techniques to enhance your memory and retention of words. It
                  provides a structured approach to learning new words and
                  reviewing them periodically.
                </p>
                <a href="/" className="btn btn-secondary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-secondary text-center text-lg-start mt-5 py-3">
        <div className="container">
          <p className="mb-0 text-light">
            Word memorization program &copy; {new Date().getFullYear()} |
            Contact: qobulovasror0@gmail.com
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
