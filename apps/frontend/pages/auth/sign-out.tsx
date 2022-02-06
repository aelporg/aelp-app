import withAuthBeing from "@modules/auth/components/high-order/withAuthBeing";
import SignOut from "@modules/auth/pages/sign-out";

export default withAuthBeing(true, SignOut);
