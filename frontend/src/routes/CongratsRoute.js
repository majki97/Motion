import { Link } from 'react-router-dom';
import  Congrats  from "../components/CongratsPage";

export const CongratsRoute = () => {
    return (
        <div>
            <Link to="/">sign in</Link>
            <Congrats />
        </div>
    );
};