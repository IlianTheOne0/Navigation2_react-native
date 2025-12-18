import InfoCardList from "./InfoCardList";

const paymentData =
[
	{ title: "Credit Card", description: "Pay with your credit card securely", icon: { uri: 'https://img.icons8.com/color/96/visa.png' } },
	{ title: "Apple Pay", description: "Pay quickly with Apple Pay", icon: { uri: 'https://img.icons8.com/color/96/apple-pay.png' } },
	{ title: "Cash", description: "Pay with cash upon delivery", icon: { uri: 'https://img.icons8.com/color/96/cash-in-hand.png' } }
];

function PaymentOptions()
{
	return <InfoCardList heading="Payment Options" data={paymentData} />;
}

export default PaymentOptions;