const genreIn = document.getElementById("genreInput")
const titleIn = document.getElementById("title")
const releaseIn = document.getElementById("Relasey")
const ratingIn = document.getElementById("Rating")

var test = document.getElementById("test");

// Funktion för att adda en film : 
const addMovie = function (title, year, genres, ratings) {
	this.title = title;
	this.year = year;
	this.genres = [genres];
	this.ratings = [ratings];

}

// Module pattern med ES6 Lägg i moviedatabase i denna ! 
const allMovies = (() => {let MovieDatabase = {
	films : [
	{
		title:"Finding Nemo",
		year:2003,
		genres:["Horror"],
		ratings:[1,5,7,4,2,7,8,9,3]
	},
	{
		title:"Waterworld",
		year:1995 ,
		genres:["Action"],
		ratings:[8,7,6,9,8,7,10]
	},
	{
		title:"Stargate",
		year:1994 ,
		genres:["Action","Adventure","Sci-Fi"],
		ratings:[10,10,10,9,8,10,8]
	},
	{
		title:"Arrival",
		year:2016 ,
		genres:["Action","Sci-Fi"],
		ratings:[5,7,3,7,9]
	},
	{
		title:"The Brothers Lionheart",
		year:1977 ,
		genres:["Action","Adventure"],
		ratings:[5,7,8,2,4,7,9]
	},
	]
};

return {
	// Get movie array function
	Getmovies: () => {return MovieDatabase.films;},
	// Get prop of film array
	GetTitle: (x) => {return MovieDatabase.films[x].title;},
	GetYear: (x) => {return MovieDatabase.films[x].year;},
	Getratings:(x) => {return MovieDatabase.films[x].ratings;},
	GetGenre:(x) => {return MovieDatabase.films[x].genres;},
	//Sort Ratings
    ratingCal: (arr) => {
	let length = arr.length
	console.log(length);
	let sum = arr;
	let calc = 0
	for (var i = 0; i < arr.length; i++) {
		calc +=sum[i];
		console.log(sum);
	}
	let calcy = calc/length;
	let fixed = calcy.toFixed(2)
	return fixed;
},
	//Add movie to array
	AddMovie:(movie) => { MovieDatabase.films.push(movie)},
	// Posting movies to html function
	postMovies: () => {
	test.innerHTML="";
	for (var i = 0; i < allMovies.Getmovies().length; i++) {
		var filmBlock = 
		`<ul id=film${i}>
		${i+1}. -------------------------------------------------
		<li>Title : ${allMovies.GetTitle(i)}</li>
		<li>Release Year : ${allMovies.GetYear(i)} </li>
		<li>Genres :${allMovies.GetGenre(i)} </li>
		<li>Rating: ${allMovies.ratingCal(allMovies.Getratings(i))} </li>
		</ul>`;
		test.innerHTML += filmBlock;
	};
}

};

})();


testObj = {
	title: "tettete",
	year: 1977 ,
	genres: ["Action", "Adventure"],
	ratings: [5,7,8,2,4,7,9]
}

//allMovies.AddMovie(testObj);

allMovies.postMovies();


// http://jsbin.com/ufanep/2/edit?html,js,output FÖR FORM


/*   ratingCal: (arr) => {
	let length = arr.length
	console.log(length);
	let sum = arr;
	let calc = 0
	for (var i = 0; i < arr.length; i++) {
		calc +=sum[i];
		console.log(sum);
	}
	return Math.floor(calc/length);
}
*/







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



