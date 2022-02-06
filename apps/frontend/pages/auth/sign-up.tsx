import withAuthBeing from '@modules/auth/components/high-order/withAuthBeing';
import SignUp from '@modules/auth/pages/sign-up';

export default withAuthBeing(false, SignUp);
