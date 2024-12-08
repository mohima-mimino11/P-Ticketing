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

function keepBackgroundColorById(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('bg-[#F7F8F8]')
}

function removeAttributeById(elementId){
   const element = document.getElementById(elementId);
   element.classList.remove('disabled');
}

function getElementTextById(elementId){
   const element = document.getElementById(elementId);
   const elementText = element.innerText;
   const value = parseInt(elementText);
   return value;
 }
 
 function setElementTextById(elementId, value){
   const element = document.getElementById(elementId);
   element.innerText = value;
 }

function hideElementById(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('hidden');
}

function appendElementById(elementId, appendItemId){
   const element = document.getElementById(elementId);
   const appendElement = document.createElement(appendItemId);
   appendElement.innerHTML = `<div  class="flex justify-center items-center gap-20 border-b border-dashed border-[#33030712]">
                  <p class="text-gray-500 font-inter text-base flex">C3</p>
                  <p class="text-gray-500 font-inter text-base">Economy</p>
                  <p id="price-list" class="text-gray-500 font-inter text-base">550</p>
                </div>`
   element.appendChild(appendElement);
} 

