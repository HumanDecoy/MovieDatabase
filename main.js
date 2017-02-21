// Module pattern med ES6 Lägg i moviedatabase i denna ! 


const allMovies = (() => {let MovieDatabase = {
	films : [
	{
		title: "Finding Nemo",
		year: 2003,
		genres: ["Horror", "Thriller", "2-spooky-4-me"],
		ratings:[1,5,7,4,2,7,8,9,3]
	},
	{
		title: "Waterworld",
		year: 1995 ,
		genres: ["Action"],
		ratings: [8,7,6,9,8,7,10]
	},
	{
		title: "Stargate",
		year: 1994 ,
		genres: ["Action","Adventure","Sci-Fi"],
		ratings: [10,10,10,9,8,10,8]
	},
	{
		title: "Arrival",
		year: 2016 ,
		genres: ["Action","Sci-Fi"],
		ratings: [5,7,3,7,9]
	},
	{
		title: "The Brothers Lionheart",
		year: 1977 ,
		genres: ["Action", "Adventure"],
		ratings: [5,7,8,2,4,7,9]
	},
	]
};

return {
	Getmovies: () => {return MovieDatabase.films;},
	GetRatings: () => {return MovieDatabase.films[0].ratings;}
};
})();


console.log (allMovies.Getmovies());
console.log (allMovies.GetRatings());

/*   EXEMPEL PÅ ATT TA UT INFORMATION FRÅN MOVIE DATABASE

const onlyEU = allCountries.Getcountries().filter((x) => {
    if (x.continent === "Europe"){
        return x;}
    });

console.log(onlyEU);
*/






/* AVAKTA MED DENNA
const onlyHorror = allMovies.Getmovies().filter((x) => {
	

	if (x.genres === "Action"){
		return x;}
});
console.log(onlyHorror);
*/


/*
const onlyEU = allCountries.Getcountries().filter((x) => {
    if (x.continent === "Europe"){
        return x;}
    });
    */





    /*  DATABASEN I OBJEKT ENDAST.
const MovieDatabase = {
	movies : [
	{
		title: "Finding Nemo",
		year: 2003,
		genres: ["Horror", "Thriller", "2-spooky-4-me"],
		ratings:[1,5,7,4,2,7,8,9,3]
	},
	{
		title: "Waterworld",
		year: 1995 ,
		genres: ["Action"],
		ratings: [8,7,6,9,8,7,10]
	},
	{
		title: "Stargate",
		year: 1994 ,
		genres: ["Action","Adventure","Sci-Fi"],
		ratings: [10,10,10,9,8,10,8]
	},
	{
		title: "Arrival",
		year: 2016 ,
		genres: ["Action","Sci-Fi"],
		ratings: [5,7,3,7,9]
	},
	{
		title: "The Brothers Lionheart",
		year: 1977 ,
		genres: ["Action", "Adventure"],
		ratings: [5,7,8,2,4,7,9]
	},
	]
};
*/