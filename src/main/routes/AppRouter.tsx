import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useRouteError,
} from "react-router-dom";
import Post from "../../presentation/pages/post/Post";
import Home from "../../presentation/pages/home/Home";

const AppLayoutFactoryLazy = lazy(
  () => import("../factories/layouts/app-layout/app-layout.factory")
);

export const AppRouter = () => {
  console.log("AppRouter");
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<AppLayoutFactoryLazy />}>
            <Route
              index
              path="/"
              element={<Navigate to="/blog" />}
              ErrorBoundary={ErrorBoundary}
            />
            <Route
              path="/blog"
              element={<Home />}
              ErrorBoundary={ErrorBoundary}
            ></Route>
            <Route
              path="/blog/:slug"
              element={<Post />}
              ErrorBoundary={ErrorBoundary}
            />
            <Route
              path="*"
              element={<Navigate to="/blog" />}
              ErrorBoundary={ErrorBoundary}
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return <div>Dang!</div>;
}
