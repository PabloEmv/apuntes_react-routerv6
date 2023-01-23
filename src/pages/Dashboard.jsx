// en versiones anteriores se llamaba use history
import { useNavigate, Link, Outlet } from "react-router-dom";
const Dashboard = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to='welcome'>to welcome</Link><br />
      <Link to='bye'>to bye</Link><br />
      <button onClick={handleClick}>
        logout
      </button>
      {/* outlet nos sirve para indicar donde iran los sub componentes de las rutas */}
      <Outlet />
      
    </div>
  );
};

export default Dashboard;
