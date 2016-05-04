var country = require ("./json-file-reader")
var countryname = process.argv[2];

country.info("./countries.json", function(jsondata) {
	jsondata.forEach(function(country)
	{
		if (country.name == countryname)
		{
			console.log('Country: ' + country.name)
			console.log('Top Level Domain: ' + country.topLevelDomain)
		}
	})
})