import { Link } from 'react-router-dom';
import  SignIn  from "../components/SignInPage";

export const SignInRoute = () => {
    return (
        <div>
            <Link to="/Congrats">Congrats</Link>
            <SignIn />
        </div>
    );
};

