function getTheElementById(elementId){
   const element = document.getElementById(elementId)
   // const elementText = element.innerText;
   return element;
}

function addBackgroundColorById(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('bg-[#1DD100]');
}

function removeBackgroundColorById(elementId){
   const element = document.getElementById(elementId);
   element.classList.remove('bg-[#F7F8F8]');
}