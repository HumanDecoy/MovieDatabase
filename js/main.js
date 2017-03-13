// Module pattern ; Använde mig av module pattern då det är smididgt att
// binda funktionerna till modulen, inga variabler eller funktioner 
// ligger då i globala scopet och de blir bundna till modulen.
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
	{
		title: "Blade Runner",
		year: 1982,
		genres: ["Sci-Fi", "Thriller"],
		ratings: [9,8,9,7,9,8,9,8,9]
	},

	{
		title: "The Big Lebowski",
		year: 1998,
		genres: ["Comedy",],
		ratings: [9,9,9,9,8,8,7,6,8,5]
	},

	{
		title: "Pulp Fiction",
		year: 1994,
		genres: ["Crime",],
		ratings: [9,5,7,9,8,8,7,6,8,5]
	},

	{
		title: "Fight Club",
		year: 1999,
		genres: ["Action"],
		ratings: [9,9,7,8,6,7,8,8,7,6]
	},
	{
		title: 'The Exorcist',
		year: 1973,
		genres: ['Horror',],
		ratings:[7,8,8,9]
	},
	{
		title: 'Kill Bill vol.2',
		year: 2005,
		genres: ['Action',],
		ratings:[7,8,7,8]
	},
	{
		title: 'Bond',
		year:1957,
		genres: ['Action',],
		ratings: [6,4,8,9]
	},
	{
		title: 'Pulp Fiction',
		year: 1995,
		genres: ['Action',],
		ratings: [7,8,8,9]
	},
	{
		title:'Kill Bill vol.1',
		year:2003,
		genres:['Action',],
		ratings:[8,9,9]
	},
	{
		title:'Django Unchained',
		year:2012,
		genres:['Action'],
		ratings:[7,8,9]

	},
	{
		title:'Inglourious Basterds',
		year:2009,
		genres:['Action',],
		ratings:[8,7,9]
	},
	{
		title:'Sharknado',
		year:2013,
		genres:['Horror','Sci-Fi'],
		ratings:[3,2,2]
	},


	]
};

return {
	// Get movie array function
	getMovies: () => {return MovieDatabase.films;},
	// Get prop of film array
	getTitle: (x) => {return MovieDatabase.films[x].title;},
	getYear: (x) => {return MovieDatabase.films[x].year;},
	getRatings:(x) => {return MovieDatabase.films[x].ratings;},
	getGenre:(x) => {return MovieDatabase.films[x].genres;},
	//Constructor, skapar alla objekt och har då samma prototyper, 
	// valde att använda en vanlig construktor då jag inte hade något 
	//behov av att binda några prototyper specefikt till objekten
	//hade jag behövt det så hade jag istället använt mig av ett 
	//factory pattern.
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
		let calc = 0;
		for (var i = 0; i < arr.length; i++) {
			calc +=sum[i];
		}
		let calcy = calc/length;
		// toFixed ser till att endast ta med 2 decimaler
		let fixed = calcy.toFixed(2);
		return fixed;
	},
	//Lägger till film i array
	addMovie:(movie) => { MovieDatabase.films.push(movie);
	},
	// Postar filmer i html med template litteralls från orginal-arrayen
	postMovies: () => {
		var test = document.getElementById("test");
		test.innerHTML="";
		for (var i = 0; i < allMovies.getMovies().length; i++) {
			var filmBlock = 
			`<div class="movieDot">
			<ul id=film${i}>
			${i+1}. -----------------
			<li>Title : ${allMovies.getTitle(i)}</li>
			<li>Release Year : ${allMovies.getYear(i)} </li>
			<li>Genres :${allMovies.getGenre(i)} </li>
			<li>Rating: ${allMovies.ratingCal(allMovies.getRatings(i))} </li>
			</ul></div>`;
			test.innerHTML += filmBlock;
		}
	},
	//Sorterar efter ratings
	sortByRating: (sortByHigh) => {
		let sortedArr = [];
		// Tar ut orginal arrayen och lägger in i nya
		for (let i = 0; i < MovieDatabase.films.length; i++) {
			sortedArr.push(MovieDatabase.films[i]);
		}
		// Bubble sort funktion, förklara för sort() hur den skall agera
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
		// Kontrollerar om sortbyrating är TRUE/FALSE, om TRUE:
		if (sortByHigh) {
			sortedArr.sort(compareNumbers).reverse();
		}
		// Om false :
		else {
			sortedArr.sort(compareNumbers);
		}
		return allMovies.seartchResult(sortedArr);  
	},
	 //Funktion sorterar efter Högst rating.
	 sortByHighRating: () => {
	 	allMovies.sortByRating(true);
	 },
     //Funktion som sorterar efter Lägst rating
     sortByLowRating: () => {
     	allMovies.sortByRating(false);
     },
	//Sorterar efter release år
	sortYear: () => {
		let yearS = document.getElementById("yearSearch").value;
		yearS= parseFloat(yearS);
		let sortedYear =[];
		for (let i = 0; i < allMovies.getMovies().length; i++) {
			if(allMovies.getMovies()[i].year === yearS){
				sortedYear.push(allMovies.getMovies()[i]);
				

			}	
		}
		allMovies.seartchResult(sortedYear);
	},
	//Tar in en array och postar resultatet i html med template litteralls
	seartchResult: (films) => {
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
	//Genre Sortering
	genreSort: () => {
		let genreS = document.getElementById("genreSearch").value;
		let sortedGenre =[];
		for (let i = 0; i < allMovies.getMovies().length; i++) {
			for (var x = 0; x < allMovies.getMovies()[i].genres.length; x++) {
				if(allMovies.getMovies()[i].genres[x] === genreS){
					sortedGenre.push(allMovies.getMovies()[i]);

				}
			}	
		}

		allMovies.seartchResult(sortedGenre);
	},
	// Lägger till namn i select elementet
	editMovieSelect: () => {
		var editFilm = document.getElementById("selectEle");
		editFilm.innerHTML="";
		for (let i = 0; i < allMovies.getMovies().length; i++) {
			var anOption = `<option value="${allMovies.getMovies()[i].title}">${allMovies.getMovies()[i].title}</option>`;
			editFilm.innerHTML += anOption;
		}
	},
	//Olika funktioner för att editera filmerna i arrayen
	addRating: () => {
		let selectedMovie = document.getElementById("selectEle");
		let newRating = document.getElementById("newRating");
		let themovie;

		for (let i = 0; i < allMovies.getMovies().length; i++) {
			if (selectedMovie.value === allMovies.getMovies()[i].title){
				themovie = allMovies.getMovies()[i];
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

		for (let i = 0; i < allMovies.getMovies().length; i++) {
			if (selectedMovie.value === allMovies.getMovies()[i].title){
				themovie = allMovies.getMovies()[i];
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

		for (let i = 0; i < allMovies.getMovies().length; i++) {
			if (selectedMovie.value === allMovies.getMovies()[i].title){
				themovie = allMovies.getMovies()[i];
			}
		}
		for (let x = 0; x < themovie.genres.length; x++) {
			if (removeGenre === themovie.genres[x]){
				themovie.genres.splice(x,1);

			}
			allMovies.postMovies();

		}
	},
	// Skapar nya filmer i arrayen från HTML form/inputs
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
		allMovies.addMovie(newfilm);
		allMovies.postMovies();
		allMovies.editMovieSelect();
	},

	initFunction: () => {
		document.getElementById("newmoviedatabase").addEventListener("click",allMovies.newMovieFromForm);
		document.getElementById("ratingSearch").addEventListener("click",allMovies.sortByHighRating);
		document.getElementById("ratingLow").addEventListener("click", allMovies.sortByLowRating);
		document.getElementById("showMovies").addEventListener("click",allMovies.postMovies);
		document.getElementById("newRatingButton").addEventListener("click",allMovies.addRating);
		document.getElementById("newGenreButton").addEventListener("click",allMovies.addnewGenre);
		document.getElementById("removeGenreButton").addEventListener("click",allMovies.removeGenre);
			}
		};

	})();


// init functions
allMovies.postMovies();
allMovies.editMovieSelect();
allMovies.initFunction();
