function movie(title, runningTime, year) {
        return {
            title: title,
            runningTime: runningTime,
            year: year
        };
    }

    var movies = [
            ["donny darko", 110, 1979],
            ["the lion king", 120, 1985],
            ["big hero 6", 200, 2001],
           
    ];

    var emptyObj = [
     
   ];

    for (var i = 0; i < movies.length; i++) {
        var movieArr = movies[i];
        var movieObj = movie.apply([], movieArr);
        emptyObj.push(movieObj);
    }

   for (var i = 0; i < emptyObj.length; i++) {
       var movieArr = emptyObj[i];
     
     console.log(movieArr.title);
   }