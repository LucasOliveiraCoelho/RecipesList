import React from 'react'
import Highlighter from 'react-highlight-words'

const RecipeItem = ({title,thumbnail,ingredients,search = ''}) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={thumbnail} alt={title} />
            <div className="card-body">
                <h5 className="card-title">
                    <Highlighter
                            highlightClassName="YourHighlightClass"
                            searchWords={[search]}
                            autoEscape={true}
                            textToHighlight={title}
                        />
                </h5>
                
                <p className="card-text">
                    <strong>Ingredients: </strong>
                    <Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={[search]}
                        autoEscape={true}
                        textToHighlight={ingredients}
                    />
                </p>
            </div>
        </div>
    </div>
)

export default RecipeItem;