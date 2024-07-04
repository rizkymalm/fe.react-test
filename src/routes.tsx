import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function Router() {
  // const authState = useSelector((state: any) => state.auth);
  return useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: "Login",
    },
  ]);
}
