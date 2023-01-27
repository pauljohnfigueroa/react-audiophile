//import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { ReactComponent as AudiophileLogo } from '../../assets/images/logo.svg';
import { ReactComponent as MobileNavIcon } from '../../assets/images/icon-hamburger.svg';
import SignInIcon from '../../assets/images/signin-icon-white.png';
import SignOutIcon from '../../assets/images/signout-icon-white.png';

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
                                    <img src={SignInIcon} alt="fireSpot" width="24" height="24" />
                                </Link> :
                                <Link to="/authenticate">
                                    <img src={SignOutIcon} alt="fireSpot" width="24" height="24" />
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