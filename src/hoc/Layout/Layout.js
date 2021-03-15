import Aux from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Layout.css';

const layout = (props) => {
  return (
    <Aux>
      <Header />
      <main className={'Main'}>{props.children}</main>
      <Footer/>
    </Aux>
  );
};

export default layout;
