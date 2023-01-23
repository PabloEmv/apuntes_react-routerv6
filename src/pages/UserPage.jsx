import { useParams } from "react-router-dom";

const UserPage = () => {
  //useParams nos trae los parametros que tengamos en nuestra urls, como el :id definido en App.js
  const params = useParams();
  // tambien se puede poner de esta forma
  // const {id} = useParams();
  console.log(params);
  return (
    <div>
      User <h1>{params.id}</h1>
    </div>
  );
};

export default UserPage;
