import { Contact } from "../components/Contact/Contact";
import DarkContext from "../components/DarkContext";
import { Home } from "../components/Home";

export const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/contact',
        component: Contact,
        exact: true
    },
    {
        path: '/dark',
        component: DarkContext,
        exact: true
    },
]