import React from 'react'

const RecipeItem = (props) => (
    props.recipe && props.recipe.map((value,i) => (
        <div className="col-sm-3 mt-4" key={i}>
            <div className="card">
                <img className="card-img-top img-fluid" src={value.thumbnail} alt={value.title} />
                <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">
                        <strong>Ingredients: </strong>{value.ingredients}
                    </p>
                </div>
            </div>
        </div>
    ))
)

export default RecipeItem;