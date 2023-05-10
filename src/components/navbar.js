import { Link } from "react-router-dom";

const Navbar = ({ title = "smksa.com" }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <b>{title}</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to={'/'}>
              Home
            </Link>
            <Link className="nav-link" to={'/dataSiswa'}>
              Data Siswa
            </Link>
            <Link className="nav-link" to={'/daftarHadir'}>
              Laporan Kehadiran
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
