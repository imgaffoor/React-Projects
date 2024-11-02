import MovieCard from "./MovieCard";

function MovieGrid(){
    const movies = [
        {name:"chatrapati",director:"rajamouli"},
        {name:"mirchi",director:"koratala Siva"},
        {name:"Rebel",director:"Ragava Lawrence"},
        {name:"Saaho",director:"Sujeeth"},
        {name:"Salaar",director:"Prashanth Neel"}        
    ];
    return(
        <>
            {movies.map((movie,index)=> <MovieCard key={index} movieCard={movie}/>)}
        </>
    )
}
export default MovieGrid;