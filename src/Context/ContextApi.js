import { createContext, useEffect, useState } from "react";
import {fetchDataFromApi} from "../utils/api";

const context=createContext()

export const ContextApi=(props)=>{

    const [loading,setLoading]=useState(false)
    const [searchResult,setSearchResult]=useState([])
    const [selectedCategory,setSelectedCategory]=useState("New")
    const [mobileMenu,setMobileMenu]=useState(false)
    const [menuForVideoDetails,setMenuForVideoDetails]=useState(false)

    console.log(selectedCategory)

    useEffect(()=>{
        getData(selectedCategory)
    },[selectedCategory])

    const getData=(query)=>{
        setLoading(true)
        fetchDataFromApi(`search?query=${query}`).then(
            ({data})=> {
                setSearchResult(data)
                setLoading(false)
            }
        )
    }

    return(
        <context.Provider value={{
            loading,
            setLoading,
            searchResult,
            setSearchResult,
            selectedCategory,
            setSelectedCategory,
            mobileMenu,
            setMobileMenu,
            menuForVideoDetails,
            setMenuForVideoDetails
        }}
        >
            {props.children}

        </context.Provider>
    )

}


export {context}