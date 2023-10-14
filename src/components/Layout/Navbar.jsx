import { Link, Outlet } from "react-router-dom";
import Cartwidget from "../common/cartwidget/Cartwidget";

function Navbar() {
  return (
    <>
      <div className="bg-indigo-400">
        <nav className="py-4 flex justify-between items-center p-3">
          <Link className="text-white font-bold text-2xl" to="/">
            NOVATECH
          </Link>

          <ul className="text-white flex gap-12 ml-auto">
            <li>
              <Link to="/category/Computadoras">Computadoras</Link>
            </li>
            <li>
              <Link to="/category/Teléfonos">Teléfonos</Link>
            </li>
            <li>
              <Link to="/">Todas</Link>
            </li>
          </ul>
          {/* Cart */}
          <Cartwidget />
        </nav>
      </div>
    </>
  );
}

export default Navbar;
