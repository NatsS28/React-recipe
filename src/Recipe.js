import React from 'react';
import Style from "./Recipe.module.css"


const Recepie = ({ title, calories, image, ingredients }) => {
    return (
        <div className={Style.card}>
            <h1 className={Style.recipe}>{title}</h1>

            <ol>
                {ingredients.map(ingredient => (

                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className={Style.recipe}>Calories: {calories}</p>
            <img src={image} alt="" className={Style.imgt} />

        </div>
    )
}

export default Recepie;