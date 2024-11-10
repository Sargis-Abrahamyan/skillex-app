import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { SideBarProvider } from './context/sideBarContext';
import Header from './components/specefic/header';
import ProductList from './components/specefic/products/ProductList';
import MainLayout from './components/layout/MainLayout';
import Footer from './components/specefic/footer';
import Loading from './components/ui/loading/Loading';

const App = () => {
  const { loading } = useSelector((state) => state.fitlers);

  const isProducts = useMemo(() => {
    return loading ? <Loading loading={loading} /> : <ProductList />;
  }, [loading]);

  return (
    <>
      <SideBarProvider>
        <Header />
      </SideBarProvider>
      <MainLayout>{isProducts}</MainLayout>
      <Footer />
    </>
  );
};

export default App;
