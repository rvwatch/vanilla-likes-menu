// Using vanilla JavaScript, write code for a UI that allows a user to
// select their own skills to show on their profile. A user should be able
// to add and remove skills from a predefined list of skills. (eg: HTML,
// CSS, JS, React, WebRTC) A user must also be able to define their own
// additional custom skills to add to their profile in the same way.

// The user's selected skills should be rendered into a list.

// We're not making any API requests today. This is just the edit view for
// the skills section in a profile. We will not evaluate on how pretty the
// UI is - our primary concern is functionality and usability.


const skills = ['HTML', 'CSS', 'JavaScript']

const createPage = () => {
  const selectionList = document.querySelector('.skillsList');
  const customButton = document.querySelector('.customSkillButton');
  customButton.addEventListener('click', addCustomSkill);
  
  populateSkillsList(selectionList)
}

const populateSkillsList = (list) => {
  for(let skill of skills){
    let listElement = document.createElement('li');
    let listButton = document.createElement('button');
    listButton.setAttribute('class', `${skill} addButton`); // red flag
    listButton.setAttribute('data-skill', skill);
    listButton.classList.add('')
    listButton.innerText = '+'; 

    listElement.innerText = skill; // red flag
    listElement.appendChild(listButton);
    list.appendChild(listElement); 
  }
};


const addCustomSkill = () => {
  const selectionList = document.querySelector('.skillsList');
  selectionList.innerHTML = '';
  // while(selectionList.hasChildNodes){
  //   selectionList.removeChild('li');
  // }
  let customSkill = document.querySelector('.createSkillInput').value;
  skills.push(customSkill);
  populateSkillsList(selectionList);

}

window.addEventListener('load', createPage)