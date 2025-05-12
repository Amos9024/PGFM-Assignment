// 0. Initialize the apiKey
const apiKey1 = "d22996b5341f4c90b73730d020ff5713";
console.log("Test test");

// 1. Identify the DOM element to update
const foodImage = document.getElementById("foodImage");
const generateFoodBtn = document.getElementById("generateRecipe");
const learnMore = document.getElementById("learnMore");
const foodName = document.getElementById("foodName");
const foodProtein = document.getElementById("Protein");
const foodFat = document.getElementById("Fat");
const foodCarbs = document.getElementById("Carbs");

// 2. Call the API with the function
const requestOptions = {
    method: "GET"
}
function generateRecipe(){
    console.log("hi")
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey1}&number=1&includeNutrition=true&include-tags=vegetarian`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
        foodImage.src = result.recipes[0].image; 
        learnMore.setAttribute("href",result.recipes[0].sourceUrl) 
        foodName.innerHTML = result.recipes[0].title;
        foodProtein.innerHTML = result.recipes[0].nutrition.caloricBreakdown.percentProtein;
        foodFat.innerHTML = result.recipes[0].nutrition.caloricBreakdown.percentFat;
        foodCarbs = result.recipes[0].nutrition.caloricBreakdown.percentCarbs;

    })
    .catch((error) => console.error(error));
}

// 3. add in event listener to the buton
generateFoodBtn.addEventListener("click",generateRecipe);

