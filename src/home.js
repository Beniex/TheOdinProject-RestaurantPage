import { createBlockElement } from './menu';

function createHomeContent () {
    const contentElement = document.getElementById("content");

    const OpeningTitle ="Horaires de fonctionnement"
    const OpeningDescription = "Lundi au Vendredi de 03h à 7h30"; 
    contentElement.appendChild(createBlockElement(OpeningTitle, OpeningDescription)); 

    const LocationTitle = "Où nous trouver?"; 
    const LocationDescription = "67 Avenue de la petite Grinchière, 61347 Roubaix sur Marne"; 
    contentElement.appendChild(createBlockElement(LocationTitle, LocationDescription)); 

    const PreparationTitle = "Que préparer?"; 
    const PreparationDescription = "ça dépend de ce que vous mangez mais probablement un anorak et de quoi faire du feu"; 
    contentElement.appendChild(createBlockElement(PreparationTitle, PreparationDescription)); 
}





export { createHomeContent };