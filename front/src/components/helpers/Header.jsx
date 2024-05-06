import { Link } from "react-router-dom";

const Header = ({}) => {
  return (
    <header id="vista-usuario">
      <img src="" alt="Logo" />
      <nav>
        <a href="">Servicios</a>
        <a href="">Contacto</a>
        <a href="">Acerca de</a>
      </nav>
      <div className="usuario-info">
        <span>Bienvenido </span>
        <img src="" />
      </div>
      <button>
        <Link to="/">Cerrar Sesión</Link>
      </button>
    </header>
  );
};


export default Header;