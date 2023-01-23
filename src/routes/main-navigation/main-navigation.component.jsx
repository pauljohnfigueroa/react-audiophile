import { Link } from "react-router-dom";

const MainNavigation = () => {

    const menuItems = [
        {
            "id": 1,
            "title": "Home",
            "url": "/"
        },
        {
            "id": 2,
            "title": "Headphones",
            "url": "/shop/headphones"
        },
        {
            "id": 3,
            "title": "Speakers",
            "url": "/shop/speakers"
        },
        {
            "id": 4,
            "title": "Earphones",
            "url": "/shop/earphones"
        }
    ];

    return (
        <>
            <nav className="nav-desktop">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default MainNavigation;