import Login from "../components/Login";
import Register from "../components/Register";
import Videos from "../components/Videos";

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
    },
    {
        id:3,
        path:'/videos',
        title:'Videos',
        component: Videos,
    }
]