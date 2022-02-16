import Login from "../components/Login";
import Register from "../components/Register";

export const MenuElements = [
    {
        id: 1,
        path: '/',
        title: 'Login',
        component: Login,
    },
    {
        id: 2,
        path: '/register',
        title: 'Register',
        component: Register,
    }
]