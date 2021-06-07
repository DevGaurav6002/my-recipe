let searchBtn=document.querySelector('.search-btn');
let recipeDisplayContainer=document.querySelector('.recipe-display-container');




function displayRecipe(){
  let searchInput=document.querySelector('.search-input').value.trim();
  console.log(searchInput);


let recipePromise= fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);

    recipePromise.then((res)=>res.json())
    .then((data)=>{


        console.log(data);
        
        let {meals}=data;
        console.log(meals);
        
        let[strMeal]=meals;
        console.log(strMeal);
     console.log(meals.includes('Corba'));
     
     recipeDisplayContainer.innerHTML='';
     meals.forEach(element => {
      
        let image=document.createElement('img');
        image.src=element.strMealThumb;
        let div=document.createElement('div');
        let heading4=document.createElement('h6');
        let heading4Text=document.createTextNode(element.strMeal);
        // let strImage=document.createTextNode(element.strMealThumb);

      heading4.append(heading4Text);
      div.append(heading4);
      div.append(image)
      div.classList.add('recipe-display-div');
        // recipeDisplayContainer.append(image);
        recipeDisplayContainer.append(div);

        // console.log(element.strMeal);
         
        // console.log(meals);
     });

     //  console.log(strMeal);
     
     
    });
   


  }








searchBtn.addEventListener('click',displayRecipe);
  
  // console.log(recipeName);

  
    



