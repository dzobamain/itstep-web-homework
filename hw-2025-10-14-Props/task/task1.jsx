// task1

function MovieCard({ title, director, year, studio, poster, description }) {
    return (
        <div className="movie-card">
            <img src={poster} alt={title} className="poster" />
            <h2>{title}</h2>
            <p>
                <strong>Director:</strong> {director}
            </p>
            <p>
                <strong>Year:</strong> {year}
            </p>
            <p>
                <strong>Studio:</strong> {studio}
            </p>
            <p>{description}</p>
        </div>
    );
}

export default MovieCard;
