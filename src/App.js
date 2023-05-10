import { Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import DataSiswa from "./pages/data siswa";
import LaporanKehadiran from "./pages/laporan kehadiran";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dataSiswa" element={<DataSiswa />} />
      <Route path="/daftarHadir" element={<LaporanKehadiran />} />
    </Routes>
  );
}

export default App;
