import {useSelector} from 'react-redux';
import { useHistory } from 'react-router';

const withAuth = (WrappedComponent) => {
    return () => {
        const token = useSelector((state ) => state.token);
        const {push} = useHistory();

        if (token) {
            return <WrappedComponent />;
        }else {
            push('/');
            return null;
        }
    }
}

export default withAuth