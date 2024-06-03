import { createMenuContent } from './menu';
import { createHomeContent } from './home';
import { createAboutContent, cleanContent } from './about';
import './style.css';



const MenuButtonElement = document.getElementById("menu"); 
const HomeButtonElement = document.getElementById("home"); 
const AboutButtonElement = document.getElementById("about"); 


MenuButtonElement.addEventListener('click', function (){
    cleanContent();
    createMenuContent(); 

}); 

HomeButtonElement.addEventListener('click', function(){
    cleanContent();
    createHomeContent(); 
})

AboutButtonElement.addEventListener('click', function(){
    cleanContent();
    createAboutContent(); 
})

initializeLandingPage(); 

function initializeLandingPage(){

const ContentElement = document.getElementById("content");
const BlockElement = document.createElement('div');
BlockElement.classList.add("LandingBlock");

const BlockTitleElement = document.createElement('div');
BlockTitleElement.classList.add("LandingTitle")
BlockTitleElement.textContent = "Venez manger à la Belette qui chantonne"; 

BlockElement.appendChild(BlockTitleElement);
ContentElement.appendChild(BlockElement); 
}
