var a = {} // object
var a = [] // Array

var  movieName = "Avengers"
var  movieRating = 4.5
var movieType = "Action"

var  movieName1 = "Jab we met"
var  movieRating1 = 4.9
var movieType1 = "Romantic"


var movie = {
    name:"Avengers",
    rating:4.5,
    type:'Action'
}
typeof(movie)
'object'
movie.name
'Avengers'
movie.rating
4.5
movie.type
'Action'
movie.lang = "English"
'English'
movie.lang
'English'
movie
{name: 'Avengers', rating: 4.5, type: 'Action', lang: 'English'}

movie.rating = 4.9
4.9
movie
{name: 'Avengers', rating: 4.9, type: 'Action', lang: 'English'}
delete movie.rating
true
movie
{name: 'Avengers', type: 'Action', lang: 'English'}

movie['name']
'Avengers'

var movie = {
    name:"Avengers",
    rating:4.5,
    type:'Action'
}
for (key in movie){
    console.log(key);
}

name
rating
type

for(key in movie){
    console.log(movie[key])
}
Avengers
4.5
Action

//json > JavaScript Object Notation
//way to represent data

var movies = [
    {
        'name': 'Avengers',
        'rating': 4.5,
        'type': 'Action'
    },
    {
        'name': 'Jab We Met',
        'rating': 4.9,
        'type': 'Romantic'
    },
]

movies[1].name
'Jab We Met'

for(data of movies){
    console.log(data.name)
}