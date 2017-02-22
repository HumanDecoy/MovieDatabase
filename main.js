var test = document.getElementById("test");
// Funktion för att räkna ut medelvärdet : 
const ratingCal = (obj) => {
	let length = obj.ratings.length
	let sum = obj.ratings[i]
	sum+=sum;
	return sum/length;
}

// Funktion för att adda en film : 
const addMovie = function (title, year, genres, ratings) {
	this.title = title;
	this.year = year;
	this.genres = [genres];
	this.ratings = [ratings];
	//storeMovie();
}

// Module pattern med ES6 Lägg i moviedatabase i denna ! 
const allMovies = (() => {let MovieDatabase = {
	films : [
	{
		title: "Finding Nemo",
		year: 2003,
		genres: ["Horror"],
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
	GetTitle: (x) => {return MovieDatabase.films[x].title;},
	GetYear: (x) => {return MovieDatabase.films[x].year;},
	Getratings:() => {return MovieDatabase.films;}


};
})();


console.log (allMovies.Getmovies());
console.log (allMovies.Getratings());

const postMovies= () =>{
	for (var i = 0; i < allMovies.Getmovies().length; i++) {
var filmBlock = 
`<ul id="">
<li>Title : ${allMovies.GetTitle(i)}</li>
<li>Release Year : ${allMovies.GetYear(i)} </li>
<li>Genres : </li>
<li>Rating:  </li>
</ul>`;
test.innerHTML += filmBlock;
};
}

postMovies();


















//------------------------------------------------------------------------

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



