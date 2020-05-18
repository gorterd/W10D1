
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const childrens = Array.from(htmlElement.children);
    
    if (childrens.length){
        htmlElement.innerHTML = "";
    }

    const newEl = document.createElement("p");

    newEl.innerHTML = string;
    htmlElement.append(newEl);
};

htmlGenerator('Party Time.', partyHeader);

