module.exports = function(app){
	app.post("/cards/authorize/", function(req,res){
		console.log('Processing payment by card. ');

		var card = req.body;
		console.log("card body:  "+ JSON.stringify(card));
		
		req.assert("number", "Number is mandatory and must have e deve ter 16 characters.").notEmpty().len(16,16);
		req.assert("company", "Company name who operate the card is mandatory.").notEmpty();
		req.assert("yy", "The expiration year is mandatory and must have 2 characters.").notEmpty().len(2,2);
		req.assert("mm", "The expiration month is mandatory and must have 2 characters").notEmpty().len(2,2);
		req.assert("cvv", "CVV code is mandatory and must have 3 characters").notEmpty().len(3,3);

		var error = req.validationErrors();
		if (error){
			console.log("Validation errors were found: "+ JSON.stringify(error));
			res.status(400).send(error);
			return;
		}

		card.status = 'AUTHORIZED';
		var response = {
			data_card: card,
		}

		res.status(201).json(response);
	});
}
