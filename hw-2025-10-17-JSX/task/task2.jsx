// task2

function BandCard({ name, members, albums }) {
    return (
        <div className="card">
            <h1>{name}</h1>

            <h2>Band Members:</h2>
            <ul>
                {members.map((member, index) => (
                    <li key={index}>
                        <strong>{member.name}</strong> — {member.role}
                    </li>
                ))}
            </ul>

            <h2>Albums:</h2>
            <div className="albums">
                {albums.map((album, index) => (
                    <div key={index} className="album">
                        <img src={album.cover} alt={album.title} className="album-cover" />
                        <p><strong>{album.title}</strong> ({album.year})</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BandCard;
