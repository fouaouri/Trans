console.log(1001);

const users = ['user1', 'user2', 'user3', 'user4'];
const personSelector = document.getElementById('person-selector');

users.forEach(user =>{
    console.log(100);
    const button = document.createElement('button');
    button.classList.add('button', 'person-selector-button');
    button.textContent = user;
    button.id = `$user-selector`;
    personSelector.appendChild(button);
});