module.exports = {
	SIZE_LIMIT: 50, // mentioned in KB
	PORT: process.env.PORT || 3000,
	MONGO_URL: "mongodb+srv://api-point:satyanchal@cluster0.ey0ry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	REQUEST_LIMIT_PER_HOUR: 100,
	ENABLE_DATA_EXPIRY: false, // Once switched on the index will be be set in mongodb. Might need to remove it in order to switch off the behaviour
	DATA_EXPIRY_IN_DAYS: 30,
	FILTER_IP_SET: [], // example ['172.29.0.1']
	FILTER_OPTIONS: { mode: "allow" },
};
