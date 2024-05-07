import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserListView from "./components/UserListView/UserListView";
import UserDetailsView from "./components/UserDetailsView/UserDetailsView";
import { UserProvider } from "./context/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserListView />,
  },
  {
    path: "/user/:userId",
    element: <UserDetailsView />,
  },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
