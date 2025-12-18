const paymentData = require("../assets/data/payment.json");

import InfoCardList from "./InfoCardList";

function PaymentOptions()
{
	return <InfoCardList heading="Payment Options" data={paymentData}/>;
}

export default PaymentOptions;