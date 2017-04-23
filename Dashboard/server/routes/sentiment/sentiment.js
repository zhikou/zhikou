const requst = require("request")


module.exports = (req,res) => {
	res.status(200).json({sentiment:"success"})
}