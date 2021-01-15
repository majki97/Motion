import { Link } from 'react-router-dom';
import  Home  from "../components/HomePage";

export const HomeRoute = () => {
    return (
        <div>
            <Link to="/">sign in</Link>
            <Home />
        </div>
    );
};