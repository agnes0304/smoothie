import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/Root";
import ErrorPage from "../pages/Error";

import Main from "../pages/main/Main";

// import Mypage from "../pages/mypage/Mypage";

import UserList from "../pages/userList/UserList";
import NewCard from "../pages/userList/NewCard";
import EditCard from "../pages/userList/EditCard";

import ProjectList from "../pages/projectList/ProjectList";
import Detail from "../pages/projectList/Detail";
import NewPost from "../pages/projectList/NewPost";
import EditPost from "../pages/projectList/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Main /> },

      /*** 📌 로그인/회원가입 ***/
      {
        path: "/",
        children: [
          {
            path: "login",
            // element: <Login />,
            // children: [{ path: "findpassword", element: <PAGE /> }],
          },
          {
            path: "signup",
            // element: <Signup />,
          },
        ],
      },

      /*** 📌 마이페이지 ***/
      {
        path: "mypage",
        // element: <Mypage />,
        /*
        children: [
          {
            path: "profile",
            // element: <PAGE />,
            children: [
              {
                path: ":id",
                // element: <PAGE />,
              },
              {
                path: "edit",
                // element: <PAGE />,
              },
            ],
          },
          {
            path: "summary",
            // element: <PAGE />,
          },
          {
            path: "review",
            // element: <PAGE />,
          },
        ],
        */
      },

      /*** 📌 팀찾기 ***/
      {
        path: "userlist",
        children: [
          { index: true, element: <UserList /> },
          { path: "new", element: <NewCard /> },
          { path: "edit/:usercardId", element: <EditCard /> },
        ],
      },

      /*** 📌 팀원찾기 ***/
      {
        path: "projectlist",
        children: [
          { index: true, element: <ProjectList /> },
          { path: ":projectId", element: <Detail /> },
          { path: "new", element: <NewPost /> },
          { path: "edit/:projectId", element: <EditPost /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
