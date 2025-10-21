// task2

function PersonCard({ name, phone, email, city, experience, skills, photo }) {
    return (
        <div className="profile-card">
            <img src={photo} alt={name} />
            <h2>{name}</h2>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>City:</strong> {city}</p>
            <p><strong>Experience:</strong> {experience}</p>
            <p><strong>Skills:</strong> {skills.join(", ")}</p>
        </div>
    );
}

export default PersonCard;
