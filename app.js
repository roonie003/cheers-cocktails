const randDrink = document.getElementById('random-drink'),
      showDrink =document.getElementById('drinks'),
      displayHeading = document.getElementById('display-heading');
      


function getCocktail(){

    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data =>{
        console.log(data);

            displayHeading.innerHTML = data.drinks.map(drink =>

                `
                <div class="card text-center card-body mt-3 mx-auto" style="width:40rem;">
                    <div class="row">
                        <div class="col-md">
                            <h2 class="mt-3">Get inspired by : <stong>${drink.strDrink}<stong> </h2>
                        <div>
                            <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}"class="img-fluid mb-5 rounded"/>
                        </div>
                    </div>
                </div>
                `)
        })
        .catch(function(err) {
            console.log(err);
        });
             
    }


randDrink.addEventListener('click', getCocktail);






