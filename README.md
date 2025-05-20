# Minding Eating

The purpose of this project is to create/develop a simple web application to educate end users on how to prepare healthy meals including the nutritional information based on the type of food.

# Design Process

The web application is designed to help users to learn how to prepare their meals. Their meals will have the complete nutritional information of the food for example protein, fats and carbohydrates. They are also able to choose the type of food they would like to prepare. For example, chicken, fish, vegetarian and dessert. In the future, we might want to include wine pairings and the cost of wine. We also used Figma to aid with the design and development process to ensure that the user interface is intuitive and user-friendly.

# Features

The main feature of the web application are as follows:

1. User types in the input in the box – chicken, vegetarian, dessert, fish
2. User clicks on the button – generate recipes.
3. This would then trigger a generateReceipe function.
4. Gets the input in the box.
5. Trigger the API to call the latest value.
6. Update the user interface with the latest value.

# Features Left to Implement

There are two feature to implement in the future as follows due to time constraints:
The first is the wine-pairing including the price of each wine for the various recipes generated. This would provide recommendations to the user.
The second is sanitization of user input to prevent user from entering more than one type of food choice.

# Technologies Used

We have learned how to code during this term. As such, we used basic, HTML, CSS and JavaScript with the food API - Spoonacular to design and develop our basic web application. Our basic web application interacts with the Spoonacular food API. This is an official documentation which is used to retrieve food-related information such as recipe, nutritional content and ingredients. Authentication for each request is handled by an API key.
Here is the URL for the food API - https://spoonacular.com/food-api/docs.
Further to add, a couple of technologies were used as follows:

1. Postman – Used to test API endpoints before integrating into the JavaScript.
2. Json Path Finder – Used to identify the exact paths to data elements which is needed to be used in the web application.

# Testing

Upon accessing the web application, the user is given with a single input box. The user enters a single input value. For example, chicken, dessert, fish or vegetarian. After entering the input, the user clicks on the Generate Recipes button. The function processes the input and updates the user interface dynamically. For example, the nutritional value and image. If the user is not satisfied with generate recipe due to the nutritional value or their own preference, they can click the button again or change the food type choice. Users can also click learn more section to redirects the user to a detail break down or the selected recipe/food.

When the user enters multiple inputs in the box. This will cause issues as the API is only expecting a single and clear input. The API would return incorrect or no data. One of the proposed solutions is to introduce a drop-down menu or a button selection that will limits the user input to a predefined set of valid options. This soultion was also implemented in the web application.

# Credits

Content

Most of the data were obtained from the food API – Spoonacular.
The food icon was obtained from – favicon.
Fonts were obtained from Google Fonts.

Media

The photos used in this site were obtained via the food API – Spoonacular.

Acknowledgements

I received inspiration for this project from Mr Malcolm Yam and National Geographic website whereby the article shared that how food could cause impact to the body and brain.
