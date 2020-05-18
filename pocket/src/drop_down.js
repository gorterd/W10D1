import { htmlGenerator } from './warmup';

const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

export const dogLinkCreator = function(){
  const dogLinks = [];
  Object.keys(dogs).forEach( (dog) => {
    let dogLi = document.createElement("li");
    let dogA = document.createElement("a");
    dogA.innerHTML = dog;
    dogA.href = dogs[dog];
    dogLi.append(dogA);
    dogLi.className = "dog-link";
    dogLinks.push(dogLi);
  });

  return dogLinks;
}

const attachDogLinks = function(){
  const dogLinks = dogLinkCreator();
  const dogUl = document.querySelector(".drop-down-dog-list");

  dogLinks.forEach( (dogLi) => {
    dogUl.append(dogLi);
  });
}

export const handleEnter = function(){
  const dogLinks = document.getElementsByClassName("dog-link");
  let arr = Array.from(dogLinks);

  arr.forEach(dog => {
    dog.classList.remove("hidden");
  })
}

export const handleLeave = function(){
  const dogLinks = document.getElementsByClassName("dog-link");
  let arr = Array.from(dogLinks);

  arr.forEach(dog => {
    dog.classList.add("hidden");
  })
}



attachDogLinks();

