function callAPI() {
    var typed = document.getElementById("textBox").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${typed}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data.meals));
}



callAPI();

function showData(data) {
    console.log(data);

    var content = document.getElementById('d-data');
    content.innerHTML = '';


    for (var i = 0; i <data.length; i++) {
        



        var newDiv = document.createElement("div",);
        newDiv.style.display.CanvasGradient;

        newDiv.classList.add("api-data-style");



        newDiv.innerHTML = `
      <div class="row" style="width: 18rem;"><div class="shadow-lg p-3 mb-0 bg-body rounded">
    
    <div class="card-body ">
      <img src="${data[i].strMealThumb}" class="card-img-top" alt="">
      <h5 class="card-title">Category: ${data[i].strMeal}</h5>
      <p class="card-text"> Meal ID: ${data[i].idMeal} </p>
      <p class="card-text"> Instructions: ${data[i].strInstructions.slice(0, 100)} </p>
      <a href="#" class="btn btn-primary">Recipe</a>
    </div></div>
  </div>`;
        content.appendChild(newDiv);
        


    }
}








