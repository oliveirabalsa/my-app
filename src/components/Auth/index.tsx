import { useEffect, useState } from "react";
import { guardedRoutes } from "./guardedRoutes";
import Unauthorized from "./Unauthorized";
import { useLocation } from "react-router-dom";


const RouteGuard = ( { children }: { children: React.ReactElement } ): React.ReactElement => {
    const location = useLocation()
    const [isAuthorized, setIsAuthorized] = useState(false);
	useEffect(() => {
        const currentRoute = location.pathname;
        const routeNeedAuthorization = guardedRoutes.find(({route}) => route === currentRoute)
        if(!routeNeedAuthorization) {
            return setIsAuthorized(true);
        }
        const token = localStorage.getItem('token');
        if(!token) {
            return setIsAuthorized(false)
        }
        return setIsAuthorized(true)
    }, 
    [location.pathname])
	return isAuthorized ? children : <Unauthorized />;
};

export default RouteGuard;
