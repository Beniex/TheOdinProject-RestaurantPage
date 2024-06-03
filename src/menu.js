function createMenuContent (){
    const contentElement = document.getElementById("content");

    const EntreeTitle = "Salade Lyonnaise"; 
    const EntreeDescription = "Délicieuse entrée réalisée à partir de salade, lardons, oeufs pochés et gratons de porc";   
    contentElement.appendChild(createBlockElement(EntreeTitle, EntreeDescription)); 

    const PlatTitle = "Tablier de Sapeur"; 
    const PlatDescription = "La milanaise à la lyonnaise, ne demandez pas ce que c'est"; 
    contentElement.appendChild(createBlockElement(PlatTitle, PlatDescription)); 

    const DessertTitle = "Cervelle de Canut"; 
    const DessertDescription ="Fromage blanc, ciboulette sur de belles patates"
    contentElement.appendChild(createBlockElement(DessertTitle, DessertDescription)); 
}
function createBlockElement(titlecontent, descriptioncontent){
    const blockElement = document.createElement('div');
    blockElement.classList.add("block");

    const blockTitleElement = document.createElement('div');
    blockTitleElement.classList.add("title")
    blockTitleElement.textContent = titlecontent; 
    blockElement.appendChild(blockTitleElement);

    const blockParagraphElement = document.createElement('div');
    blockParagraphElement.textContent = descriptioncontent; 
    blockParagraphElement.classList.add("paragraph"); 
    blockElement.appendChild(blockParagraphElement);
 
    return blockElement;   
}




export { createMenuContent, createBlockElement };