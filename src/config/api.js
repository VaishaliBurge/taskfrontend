export const RecepieList = () =>
    `https://apitaskbackend.herokuapp.com/recipes`;

export const RecepieDetail = (title) =>
    "https://apitaskbackend.herokuapp.com/recipe_details?title=" + encodeURIComponent(title);

    
            
            
