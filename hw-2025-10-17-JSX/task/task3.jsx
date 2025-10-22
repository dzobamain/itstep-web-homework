// task3

function RecipeCard({ title, ingredients, steps, image }) {
    return (
        <div className="card">
            <h1>{title}</h1>
            <img src={image} alt={title} className="recipe-image" />

            <h2>Ingredients:</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.name} — {ingredient.amount}
                    </li>
                ))}
            </ul>

            <h2>Cooking Steps:</h2>
            <ol>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
}

export default RecipeCard;
