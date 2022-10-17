export const RecepieList = () =>
    `https://apitaskbackend.herokuapp.com/Recepies`;

export const RecepieDetail = (title) =>
    "https://apitaskbackend.herokuapp.com/RecepieDetail?title=" + encodeURIComponent(title);

    
            
            