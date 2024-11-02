function MovieCard({movieCard}){
    return(
        <>
            <p>Name: {movieCard.name}</p>
            <p>Director: {movieCard.director}</p>
        </>
    )
}
export default MovieCard;