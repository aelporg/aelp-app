import withAuthBeing from '@modules/auth/components/high-order/withAuthBeing';
import SignIn from 'modules/auth/pages/sign-in';

export default withAuthBeing(false, SignIn);
