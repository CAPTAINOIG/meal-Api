import axios from 'axios'
import React, { useState } from 'react'



const Food = () => {
    const [meal, setmeal] = useState([])
    const [food, setfood] = useState("")
    const [empty, setempty] = useState("")

    let endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
    const getData =()=>{
        axios.get(endpoint)
        .then((response)=>{
            if(food == ""){
                setempty ("Enter your favorite food")
            } else if (!response.data.meals){
                setempty("Food not found")
            } else{
                console.log(response.data.meals);
                setmeal(response.data.meals)
                setfood("")
                setempty("")
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <>
    <div className="col-lg-8 mx-auto">
    <input type="text" placeholder='enter your food' className='form-control mt-5'  onChange={(e) =>setfood(event.target.value)} value={food}/>
    <button className='btn btn-light mt-5 mx-auto fw-bold' onClick={getData}>SEARCH BY FOOD NAME</button>
    <div className='text-danger fs-3'><b>{empty}</b></div>
    </div>

        {
            
            meal.map((item, index)=>(
                <div key={index} className='text-light col-lg-8 mx-auto border my-5 border-light text-center'>
                <img className='mt-5 rounded-3 img-fluid' src={item.strMealThumb} alt="" width={600} height={300} />
                <h1>MEAL: {item.strMeal}</h1>
                <h1>COUNTRY: {item.strArea}</h1>
                <h1>CATEGORY: {item.strCategory}</h1>
                <h1>INGREDIENTS: {item.strIngredient1}, {item.strIngredient2}, {item.strIngredient3}, {item.strIngredient4} {item.strIngredient5}, {item.strIngredient6}, {item.strIngredient7}, {item.strIngredient8}, {item.strIngredient9}, {item.strIngredient10}, {item.strIngredient11}, {item.strIngredient12}</h1>
                <h1> MEAL INSTRUCTION: {item.strInstructions}</h1>                
                </div>
            ))
            
        
        }
    </>
  )
}

export default Food