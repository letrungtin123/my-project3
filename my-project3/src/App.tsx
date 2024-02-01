import 'react-toastify/dist/ReactToastify.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AddProductPage from './pages/add-product-page';
import DashboardPage from './CSSTEST/dashboard-page';
import EditProductPage from './pages/edit-product-page';
import LayoutDefault from './layouts/LayoutDefault';
import ListProductPage from './pages/list-product-page';
import LoginPage from './CSSTEST/login-page';
import { ToastContainer } from 'react-toastify';

const App = () => {
	// cách 2
	const router = createBrowserRouter([
		{
			path: '/',
			element: <LayoutDefault />,
			children: [
				{
					path: '/',
					element: <ListProductPage />,
				},
				{
					path: '/add-product',
					element: <AddProductPage />,
				},
				{
					path: '/edit-product/:id',
					element: <EditProductPage />,
				},
				{
					path: '/login',
					element: <LoginPage />,
				},
				{
					path: '/dashboard',
					element: <DashboardPage />,
				},
				
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
			<ToastContainer />
		</>
	);
};

export default App;