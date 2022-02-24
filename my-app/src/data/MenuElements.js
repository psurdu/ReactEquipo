import Login from "../components/Login";
import Perfil from "../components/Perfil";
import Register from "../components/Register";
import Videos from "../components/Videos";
import Bienvenida from "../components/Bienvenida";

export const MenuElements = [
    {
        id: 0,
        path: '/',
        title: 'Home',
        component: Login,
    },
    {
        id:1,
        path:'/videos',
        title:'Videos',
        component: Videos,
    },
    {
        id:2,
        path:'/perfil',
        title:'Perfil',
        component: Perfil,
    },
    {
        id: 3,
        path: '/register',
        title: 'Register',
        component: Register,
    },
    {
        id: 4,
        path: '/bienvenida',
        title: 'Bienvenida',
        component: Bienvenida,
    }
];