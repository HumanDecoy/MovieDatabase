const MovieDatabase = {
	movies : [
	{
		title: "Example Film",
		year: 1915,
		genres: ["Horror", "ExampleStyle"],
		ratings:[1,5,7,4,2,7,8,9,3]
	},
	{},
	{},
	{},
	{},
	]
};


// Module pattern med ES6 Lägg i moviedatabase i denna ! 
const allCountries = (() => {let countries = countryDatabase.countries;
	return {
		Getcountries: () => {return countries;}
	};
})();




/*   EXEMPEL PÅ ATT TA UT INFORMATION FRÅN MOVIE DATABASE

const onlyEU = allCountries.Getcountries().filter((x) => {
    if (x.continent === "Europe"){
        return x;}
    });

console.log(onlyEU);
*/