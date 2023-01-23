import { Link } from "react-router-dom";

const userId = 10

const HomePage = () => {
  return (
    <>
      <h1>
        <h1>application</h1>
        {/* link es similar a Navlink, pero se usa si es que no se necesita la propiedad isActive, tambioen se pueden poner valores concatenados */}
        <Link to={`/users/${userId}`}>usuarios</Link>
      </h1>
    </>
  );
};

export default HomePage;
