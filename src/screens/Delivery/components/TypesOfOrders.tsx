const ordersData = require("../assets/data/orders.json");

import InfoCardList from "./InfoCardList";

function TypesOfOrders()
{
	return <InfoCardList heading="Types of orders" data={ordersData}/>;
}

export default TypesOfOrders;