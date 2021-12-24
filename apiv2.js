function callAPI2() {
    
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data.meals));
}



callAPI2();

function showData(data) {
    console.log(data);

    var content = document.getElementById('mealdata');
    content.innerHTML = '';


    for (var i = 0; i <data.length; i++) {
        



        var newDiv1 = document.createElement("div");
        

        newDiv1.classList.add("style");



        newDiv1.innerHTML = `
      <div class="row" style="width: 18rem;"><div class="shadow-lg p-3 mb-0 bg-body rounded">
    
    <div class="card-body ">
      <img src="${data[i].strMealThumb}" class="card-img-top" alt="">
      <h5 class="card-title">Category: ${data[i].strMeal}</h5>
      <p class="card-text"> Meal ID: ${data[i].idMeal} </p>
      <p class="card-text"> Instructions: ${data[i].strInstructions.slice(0, 100)} </p>
      <a href="#" class="btn btn-primary">Recipe</a>
    </div></div>
  </div>`;
        content.appendChild(newDiv1);
        


    }
}