import { createBlockElement } from './menu';


function createAboutContent () {
    const contentElement = document.getElementById("content");

    const CookTitle ="Qui cuisine?"
    const CookDescription = "Hervé dit véver"; 
    contentElement.appendChild(createBlockElement(CookTitle, CookDescription)); 

    const TestTitle = "Qui goute?"; 
    const TestDescription = "ça dépend qui est là"; 
    contentElement.appendChild(createBlockElement(TestTitle, TestDescription)); 

    const BossTitle = "Qui tient la barque?"; 
    const BossDescription = "Jean-Michel dit Jean-Mi la vie rapide"; 
    contentElement.appendChild(createBlockElement(BossTitle, BossDescription)); 

}

function cleanContent(){
    const contentElement = document.getElementById("content");
    while (contentElement.firstChild){
        contentElement.removeChild(contentElement.firstChild); 
    }
}

export { createAboutContent, cleanContent };