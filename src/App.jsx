import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoutes from "./Routes/PublicRoutes";

const App = () => (
  <>
    <PrivateRoute/>
    <PublicRoutes />
  </>
);

export default App;
