import { Routes, Route } from "react-router-dom";
import RouteGuard from "../components/Auth";
import { routes } from './routes'

export function Router() {
  return (
    <RouteGuard>
      <Routes>
        {routes.map((route) => <Route path={route.path} element={<route.component />} />)}
      </Routes>
    </RouteGuard>
  );
}