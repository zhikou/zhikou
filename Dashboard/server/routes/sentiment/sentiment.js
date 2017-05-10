const request = require("request")



module.exports = (req,res) => {
	let body = req.body;
	request.post({
		url:"http://9.186.91.141:5000/api/sentiment/v1",
		json:true,
		body:body
	},function (err,response,body) {
		if (err) {
			return console.log(err)
		}
		res.status(200).json(body)
	})
	
}