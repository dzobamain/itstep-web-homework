// task1

function BookCard({ title, author, genre, pages, cover, reviews }) {
    return (
        <div className="card">
            <img src={cover} alt={title} className="poster" />
            <h2>{title}</h2>
            <p>
                <strong>Author:</strong> {author}
            </p>
            <p>
                <strong>Genre:</strong> {genre}
            </p>
            <p>
                <strong>Number of pages:</strong> {pages}
            </p>

            <div>
                <strong>Reviews:</strong>
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>{review}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BookCard;
