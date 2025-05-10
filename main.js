// 0. Initialize the apiKey
const apiKey1 = "d22996b5341f4c90b73730d020ff5713";
console.log("Test test");

// 1. Identify the DOM element to update
const foodImage = document.getElementById("foodImage");
const generateFoodBtn = document.getElementById("generateRecipe");

// 2. call the API
const requestOptions = {
    method: "GET"
}
function generateRecipe(){
    console.log("hi")
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey1}&number=1&includeNutrition=true&include-tags=vegetarian, dessert`, requestOptions)
    .then((response) => response.json())
    .then((result) => foodImage.src = result.recipes[0].image)
    .catch((error) => console.error(error));
}


// 3. add in event listener to the buton
generateFoodBtn.addEventListener("click",generateRecipe);

