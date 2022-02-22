import Login from "../components/Login";
import Perfil from "../components/Perfil";
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
    },
    {
        id:4,
        path:'/perfil',
        title:'Perfil',
        component: Perfil,
    }
]