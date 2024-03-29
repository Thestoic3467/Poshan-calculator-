function calculatePoshan() {
    var age = parseInt(document.getElementById("age").value);
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        alert("Please enter valid values for age, height, and weight.");
        return;
    }

    if (age <= 0 || height <= 0 || weight <= 0) {
        alert("Values for age, height, and weight must be greater than zero.");
        return;
    }

    var recommendations = getNutritionalRecommendations(age, height, weight);
    displayResult(recommendations);
}

function getNutritionalRecommendations(age, height, weight) {
    var nutrients = {
        "Calories": calculateCalories(age, weight),
        "Protein": calculateProtein(weight),
        "Carbohydrates": calculateCarbohydrates(weight),
        "Fat": calculateFat(weight),
    };

    var foodItems = {
        "Calories": "Healthy sources of carbohydrates like whole grains, fruits, and vegetables.",
        "Protein": "Lean protein sources such as poultry, fish, beans, and eggs.",
        "Carbohydrates": "Complex carbohydrates from whole grains, fruits, and vegetables.",
        "Fat": "Healthy fats from sources like avocados, nuts, and olive oil.",
    };

    return { nutrients, foodItems };
}

function calculateCalories(age, weight) {
    // Adjust calorie calculation based on age and weight
    var baseCalories = (age < 12) ? (weight * 110) : (weight * 100);
    return Math.round(baseCalories);
}

function calculateProtein(weight) {
    // Adjust protein calculation based on weight
    return Math.round(weight * 1.2);
}

function calculateCarbohydrates(weight) {
    // Adjust carbohydrates calculation based on weight
    return Math.round(weight * 2.5);
}

function calculateFat(weight) {
    // Adjust fat calculation based on weight
    return Math.round(weight * 0.4);
}

function displayResult(data) {
    var resultTableBody = document.querySelector("#result tbody");
    resultTableBody.innerHTML = ""; // Clear existing rows

    for (var nutrient in data.nutrients) {
        var row = document.createElement("tr");
        var cellNutrient = document.createElement("td");
        var cellQuantity = document.createElement("td");
        var cellFoodItems = document.createElement("td");

        cellNutrient.textContent = nutrient;
        cellQuantity.textContent = data.nutrients[nutrient] + " grams";
        cellFoodItems.textContent = data.foodItems[nutrient];

        row.appendChild(cellNutrient);
        row.appendChild(cellQuantity);
        row.appendChild(cellFoodItems);

        resultTableBody.appendChild(row);
    }
}


