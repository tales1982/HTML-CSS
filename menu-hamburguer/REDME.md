### Cria o deslocamento do menu 

## 1° na div do menu com os items fasso minha configuracao norma e adciono a propriedade
# left: -120px; /* Inicialmente, o menu está fora da tela */ 
# transition: transform .5s ease; /* Use transform para criar um efeito de deslize suave */

## 2° na mesma div adcionor mais uma clase exe: visivel. e adciono estas propriedades.
# transform: translateX(120px); /* Desloca o menu para dentro da tela */

### deste jeito minha div vai inicializar com -120 de deslocamento da tela, escondida
e quando eu aplicar a clase visivel pelo javascript ela vai abri lentamente, segue o modelo do javascript abaixo.

## document.querySelector(".container--menu").addEventListener("click", function() {
  
    const itemMenu = document.querySelector(".container--items");
    
    itemMenu.classList.toggle("visivel")

  });