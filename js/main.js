// Module pattern 
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
		year:1995,
		genres:["Action"],
		ratings:[8,7,6,9,8,7,10]
	},
	{
		title:"Stargate",
		year:1994,
		genres:["Action","Adventure","Sci-Fi"],
		ratings:[10,10,10,9,8,10,8]
	},
	{
		title:"Arrival",
		year:2016,
		genres:["Action","Sci-Fi"],
		ratings:[5,7,3,7,9]
	},
	{
		title:"The Brothers Lionheart",
		year:1977,
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
	//Constructor
	constructMovie: function (title, year, genres, ratings) {
		this.title = title;
		this.year = year;
		this.genres = [genres];
		this.ratings = [ratings];
	},
	//Räknar ut medelvärdet
	ratingCal: (arr) => {
		let length = arr.length;
		let sum = arr;
		let calc = 0
		for (var i = 0; i < arr.length; i++) {
			calc +=sum[i];
		}
		let calcy = calc/length;
		let fixed = calcy.toFixed(2);
		return fixed;
	},
	//Add movie to array
	AddMovie:(movie) => { MovieDatabase.films.push(movie);
	},
	// Postar filmer i html med template litteralls från orginal-arrayen
	postMovies: () => {
		var test = document.getElementById("test");
		test.innerHTML="";
		for (var i = 0; i < allMovies.Getmovies().length; i++) {
			var filmBlock = 
			`<div class="movieDot">
			<ul id=film${i}>
			${i+1}. -----------------
			<li>Title : ${allMovies.GetTitle(i)}</li>
			<li>Release Year : ${allMovies.GetYear(i)} </li>
			<li>Genres :${allMovies.GetGenre(i)} </li>
			<li>Rating: ${allMovies.ratingCal(allMovies.Getratings(i))} </li>
			</ul></div>`;
			test.innerHTML += filmBlock;
		}
	},
	//Sort After Ratings
	sortByRating: (sortByHigh) => {
		let sortedArr = [];

		for (let i = 0; i < MovieDatabase.films.length; i++) {
			sortedArr.push(MovieDatabase.films[i]);
		}
		let compareNumbers = (a, b) =>   {
			let arr1 = parseFloat(allMovies.ratingCal(a.ratings));
			let arr2 = parseFloat(allMovies.ratingCal(b.ratings));
			if(arr1 < arr2) {
				return - 1;
			}
			if (arr1 > arr2) {
				return 1;
			}
			return 0;
		};
		if (sortByHigh) {
			sortedArr.sort(compareNumbers).reverse();
		}
		else {
			sortedArr.sort(compareNumbers);
		}
		return allMovies.SearchResults(sortedArr);  
	},
	 //Function that checks if you chosen to sort by Highest rating or not.
	 sortByHighRating: () => {
	 	allMovies.sortByRating(true);
	 },
     //Function that checks if you chosen to sort by Lowest rating or not.
     sortByLowRating: () => {
     	allMovies.sortByRating(false);
     },
	//Sort after Year
	sortYear: () => {
		let yearS = document.getElementById("yearSearch").value;
		yearS= parseFloat(yearS);
		let sortedYear =[];
		for (let i = 0; i < allMovies.Getmovies().length; i++) {
			if(allMovies.Getmovies()[i].year === yearS){
				sortedYear.push(allMovies.Getmovies()[i]);
				

			}	
		}

		allMovies.SearchResults(sortedYear);
	},
	//Tar in en array och postar resultatet i html med template litteralls
	SearchResults: (films) => {
		var test = document.getElementById("test");
		test.innerHTML="";
		for (var i = 0; i < films.length; i++) {
			var filmBlock = 
			`<div class="movieDot">
			<ul id=film${i}>
			${i+1}. -----------------
			<li>Title : ${films[i].title}</li>
			<li>Release Year : ${films[i].year} </li>
			<li>Genres :${films[i].genres} </li>
			<li>Rating: ${allMovies.ratingCal(films[i].ratings)} </li>
			</ul></div>`;
			test.innerHTML += filmBlock;
		}
	},
	//Genre Sort
	genreSort: () => {
		
	},
	// Edit movie selector
	editMovieSelect: () => {
		var editFilm = document.getElementById("selectEle");
		editFilm.innerHTML="";
		for (let i = 0; i < allMovies.Getmovies().length; i++) {
			var anOption = `<option value="${allMovies.Getmovies()[i].title}">${allMovies.Getmovies()[i].title}</option>`;
			editFilm.innerHTML += anOption;
		}
	},
	// Edit Movie Functions
	addRating: () => {
		let selectedMovie = document.getElementById("selectEle");
		let newRating = document.getElementById("newRating");
		let themovie;

		for (let i = 0; i < allMovies.Getmovies().length; i++) {
			if (selectedMovie.value === allMovies.Getmovies()[i].title){
				themovie = allMovies.Getmovies()[i];
			}
		}
		if(newRating.value > 10){
			newRating.value = 10;
		}
		if(newRating.value < 0){
			newRating.value = 0;
		}
		themovie.ratings.push(parseFloat(newRating.value));
		allMovies.postMovies();
	},
	addnewGenre: () => {
		let selectedMovie = document.getElementById("selectEle");
		let addGenre = document.getElementById("newgenreInput").value;
		let themovie;

		for (let i = 0; i < allMovies.Getmovies().length; i++) {
			if (selectedMovie.value === allMovies.Getmovies()[i].title){
				themovie = allMovies.Getmovies()[i];
			}

		}
		
		for (let i = 0; i < themovie.genres.length; i++) {
			if (addGenre === themovie.genres[i]){
				return;
			}
			
		}
		themovie.genres.push(addGenre);
		allMovies.postMovies();
	},
	removeGenre: () => {
		let selectedMovie = document.getElementById("selectEle");
		let removeGenre = document.getElementById("removeGenre").value;
		let themovie;

		for (let i = 0; i < allMovies.Getmovies().length; i++) {
			if (selectedMovie.value === allMovies.Getmovies()[i].title){
				themovie = allMovies.Getmovies()[i];
			}
		}
		for (let x = 0; x < themovie.genres.length; x++) {
			if (removeGenre === themovie.genres[x]){
				themovie.genres.splice(x,1);

			}
			allMovies.postMovies();

		}
	},
	// Construct new movie from HTML form --> to html and array
	newMovieFromForm: () => {
		let genreIn = document.getElementById("genreInput").value;
		let titleIn = document.getElementById("title").value;
		let releaseIn = document.getElementById("Relasey").value;
		let ratingIn = document.getElementById("Rating").value;
		if (ratingIn > 10){
			ratingIn = 10;
		}
		if(ratingIn < 0){
			ratingIn = 0;
		}

		releaseIn = parseFloat(releaseIn);
		let newfilm = new allMovies.constructMovie(titleIn, releaseIn, genreIn, parseFloat(ratingIn));
		allMovies.AddMovie(newfilm);
		allMovies.postMovies();
		allMovies.editMovieSelect();
	},
};
})();


// init functions
allMovies.postMovies();
allMovies.editMovieSelect();






//FÖR ATT KOPIERA EN ARRAY :::
// var k = movies.slice()


//------------------------------------------------------------------------



