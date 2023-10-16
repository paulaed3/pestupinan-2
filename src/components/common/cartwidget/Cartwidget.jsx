import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cartwidget() {
  return (
    <Link to="/cart">
      <div className="mx-12 relative">
        <span className="absolute -top-3 text-xs -right-4 bg-violet-50 text-violet-500 rounded-xl h-4 w-4 flex items-center justify-center">
          2
        </span>
        <AiOutlineShoppingCart className="text-white w-6 h-auto" />
      </div>
    </Link>
  );
}

export default Cartwidget;
