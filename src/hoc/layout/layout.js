import Aux from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import './Layout.css';

const layout = (props) => {
  return (
    <Aux>
      <Header />
      <main className={'Main'}>{props.children}</main>
    </Aux>
  );
};

export default layout;
