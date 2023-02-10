import HomePage from '../pages/HomePage';
import FoodPage from '../pages/FoodPage';
import CardPage from '../pages/CardPage';
import ContactPage from '../pages/ContactPage';
import Login from '../components/Login/index';
import Register from '../components/Register/index';
import Product from '../components/Product/index';


export const navbar = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
    element: <HomePage />,
    isPrivate: false,
    hidden: false,
  },
  {
    id: 2,
    title: 'Food',
    path: '/food',
    element: <FoodPage />,
    isPrivate: true,
    hidden: false,
  },
  {
    id: 3,
    title: 'Cart',
    path: '/cart',
    element: <CardPage />,
    isPrivate: true,
    hidden: false,
  },
  {
    id: 4,
    title: 'Contact',
    path: '/contact',
    element: <ContactPage />,
    isPrivate: false,
    hidden: false,
  },
  {
    id: 5,
    title: 'Login',
    path: '/login',
    element: <Login />,
    isPrivate: true,
    hidden: true,
  },
  {
    id: 6,
    title: 'Register',
    path: '/register',
    element: <Register />,
    isPrivate: false,
    hidden: true,
  },
  {
    id: 7,
    title: 'Product',
    path: '/food/:id',
    element: <Product />,
    isPrivate: true,
    hidden: true,
  },
]