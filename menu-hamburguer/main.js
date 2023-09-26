document.querySelector(".container--menu").addEventListener("click", function() {
  
    const itemMenu = document.querySelector(".container--items");
    
    itemMenu.classList.toggle("visivel")

  });

  document.querySelector(".container--menu2").addEventListener("click", function() {
    const itemMenu2 = document.querySelector(".container--items2");
    itemMenu2.classList.toggle("visivel2");
});