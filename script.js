// initial reference 
// 

let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// Function to fetch data from API
let getMovie = ()=> {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    // if input field is empty
    if(movieName.length <= 0){
       result.innerHTML = `<h3 class="msg">Please Enter A Movie Name </h3>` ;
    }
    else{
       fetch(url)
       .then((resp) => resp.json())
       .then((data) => {
// if movie exist in data base
        if(data.Response == "True"){
            console.log(data);
            console.log(data.Poster);
            console.log(data.Title);
            console.log(data.imdbRating);
            console.log(data.Rated);
            console.log(data.Plot);
            console.log(data.Year);
            console.log(data.Runtime);
            console.log(data.Genre);
            console.log(data.Actors);
    
            result.innerHTML = `
            <div class="info">
                <img src=${data.Poster} class="poster">
                <br>
                <div id="bigDiv">
                    <h2>${data.Title} </h2>
                    <div class = "rating">
                        <img src="https://freesvg.org/img/1289679474.png" width="25px">
                        <h4>${data.imdbRating} </h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated} </span>
                        <span>${data.Year} </span>
                        <span>${data.Runtime} </span>
                    </div>
                    <div class="genre">
                        <div> ${data.Genre.split(",").join("</div><div>")} </div>
                    </div>
                </div>
            </div>
    
     <div class="downDiv">
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast:</h3>
            <p>${data.Actors}</p>
     </div>
            `;

        }
    // if movie does not exist
    else{
        result.innerHTML = `<h3 class="msg">${data.Error} </h3>`;
    }
       })

.catch(()=>{
    result.innerHTML=`<h3 class="msg">Error</h3>`
});


    }

};

searchBtn.addEventListener("click",getMovie)
document.body.addEventListener("keypress", (e)=>{
    getMovie();
});

    window.addEventListener("load", getMovie);

