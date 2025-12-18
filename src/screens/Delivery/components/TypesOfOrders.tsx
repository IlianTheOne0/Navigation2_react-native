import InfoCardList from "./InfoCardList";

const ordersData =
[
	{ title: "Standard Delivery", description: "Delivery within 3-5 business days. Free for orders over $50", icon: { uri: 'https://img.icons8.com/color/96/delivery.png' } },
	{ title: "Express Delivery", description: "Delivery within 1-2 business days. Additional fee applies", icon: { uri: 'https://img.icons8.com/color/96/shipped.png' } },
	{ title: "In-Store Pickup", description: "Pick up your order at the nearest store. Ready within 2 hours", icon: { uri: 'https://img.icons8.com/color/96/shop.png' } }
];

function TypesOfOrders()
{
	return <InfoCardList heading="Types of orders" data={ordersData} />;
}

export default TypesOfOrders;