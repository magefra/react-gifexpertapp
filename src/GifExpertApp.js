import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   // const categorias = ["One punch", "Samurai X", "Dragon ball"];

const [catagories, setCatagories] =  useState(["One punch"]);




    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCatagories = {setCatagories}/> 
            <hr/>

        

            <ol>
                {
                    catagories.map( catagory => (
                         <GifGrid
                            key = {catagory} 
                            category = {catagory} 
                         />
                    ))
                    
                }
            </ol>
        </>
    )
}
