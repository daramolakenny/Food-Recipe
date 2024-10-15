import { createContext, useState } from "react";

export const GlobalContext =  createContext(null);

// https://xd.adobe.com/view/121254c9-532f-4772-a1ba-dfe529a96b39-4741/

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoritesList, setFavoritesList] = useState([])

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);

            const data = await res.json();
            // console.log(data);
            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setSearchParam('')
            }

        }catch(e) {
            console.log(e);
            setLoading(false)
            setSearchParam('')
        }
    }

    // favorite button
    function handleAddToFavorite(getCurrentItem){
        console.log(getCurrentItem);
        let copyFavoritesList = [...favoritesList];
        const index = copyFavoritesList.findIndex(item=> item.id === getCurrentItem.id)

        if(index === -1){
            copyFavoritesList.push(getCurrentItem)
        } else {
            copyFavoritesList.splice(index)
        }

        setFavoritesList(copyFavoritesList)
    }

    console.log(favoritesList, 'favoritesList');
    // console.log(loading, recipeList);

    return (
        <GlobalContext.Provider 
            value={{ 
                searchParam, 
                loading, 
                recipeList, 
                setSearchParam, 
                handleSubmit, 
                recipeDetailsData, 
                setRecipeDetailsData,
                handleAddToFavorite,
                favoritesList
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
} 