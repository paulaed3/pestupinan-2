import Cart from "../common/Cartwidget"; 

function Navbar() {
  return (
    <div className="bg-indigo-400">
      <nav className="py-4 flex justify-between items-center p-3">
        {/* Logo */}
        <span className="text-white font-bold text-2xl">
          <a href="#home">NOVATECH</a>
        </span>
        {/* Items menu */}
        <ul className="text-white flex gap-12 ml-auto">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* Cart */}
        <Cart />
      </nav>
    </div>
  );
}

export default Navbar;
