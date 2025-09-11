function getShippingMessage(country, price, deliveryFee){
	let totalPrice=price+deliveryFee;
	return console.log(`'Shipping to country ${country} will cost ${totalPrice} credits'`);
}
