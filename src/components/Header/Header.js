import Logo from '../Logo/Logo';
import './Header.css';

const header = () => {
  return <header className='Header'>{<Logo />}</header>;
};


export default header