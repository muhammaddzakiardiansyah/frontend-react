import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Carousel from "../../components/carousel";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <h2 className="text-center mt-3">Welcome dzaki!</h2>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Data Siswa</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to={'/dataSiswa'} className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Laporan Kehadiran</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to={'/daftarHadir'} className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Kelas</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Jam Belajar</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
