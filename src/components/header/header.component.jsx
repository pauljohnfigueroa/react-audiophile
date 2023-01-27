//import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { ReactComponent as AudiophileLogo } from '../../assets/images/logo.svg';
import { ReactComponent as MobileNavIcon } from '../../assets/images/icon-hamburger.svg';

// import { CartContext } from '../../contexts/cart.context';
// import { UserContext } from '../../contexts/user.context';
import { selectCurrentUser } from '../../store/user/user.selector';

import CartIcon from "../../components/cart/cart-icon/cart-icon.component";
import CartDropDown from '../cart/cart-dropdown.component';
import MainNavigation from "../../routes/main-navigation/main-navigation.component";

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Header = () => {

    //const { currentUser } = useContext(UserContext);
    const currentUser = useSelector(selectCurrentUser);
    // const { isCartOpen } = useContext(CartContext);
    const isCartOpen = useSelector(selectIsCartOpen);

    // replaced by onAuthStateChanged()

    // const signOutHandler = async () => {
    //     await signOutUser();
    //     setCurrentUser(null);
    // }

    return (
        <>
            <header>
                <div className="header-container">
                    <div className="hamburger-icon">
                        <MobileNavIcon />
                    </div>
                    <div className="logo">
                        <Link to="/">
                            <AudiophileLogo />
                        </Link>
                    </div>
                    <MainNavigation />
                    <CartIcon />
                    <div className='login-icon'>
                        {
                            currentUser ?
                                <Link onClick={signOutUser} >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0V6H4v12h9v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm15.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 13H9a1 1 0 1 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414z" fill="#FFF" fill-rule="nonzero" /></svg>
                                </Link> :
                                <Link to="/authenticate">
                                    <svg fill="#ffffff" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13 16 5-4-5-4v3H4v2h9z" /><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z" /></svg>
                                </Link>
                        }
                    </div>
                </div>
            </header>
            {isCartOpen && <CartDropDown />}
            <Outlet />

        </>

    );
}
export default Header;