import withAuthBeing from "@modules/auth/components/high-order/withAuthBeing";
import Environment from "@modules/environment/environment.page";

export default withAuthBeing(true, Environment)
