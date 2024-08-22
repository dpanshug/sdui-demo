import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Banner from './components/Banner';

const componentMap = {
  header: Header,
  'product-list': ProductList,
  footer: Footer,
  banner: Banner,
};

export default function DynamicComponent({ type, props }) {
  const Component = componentMap[type];
  return Component ? <Component {...props} /> : null;
}
