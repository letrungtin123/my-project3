import Content from './content';
import Footer from './footer';
import Header from './header';

const LayoutDefault = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Content />
			<Footer />
		</div>
	);
};

export default LayoutDefault;