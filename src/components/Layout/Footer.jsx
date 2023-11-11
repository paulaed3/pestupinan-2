import {
  AiOutlineShoppingCart,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="bg-violet-500 text-white  p-1     flex flex-col items-center mt-10 "
    >
      <Link to="/" className="text-lg font-bold mb-1 ">
        NOVATECH
      </Link>

      <div className="flex space-x-4">
        <AiOutlineTwitter className="text-lg cursor-pointer" />
        <AiOutlineFacebook className="text-lg cursor-pointer" />
        <AiOutlineInstagram className="text-lg cursor-pointer" />
      </div>

      <p className="mt-4 text-sm">
        &copy; {currentYear} NOVATECH. Todos los derechos reservados.
      </p>
    </div>
  );
}

export default Footer;
