import { randomuserAPI } from './fetchService.js';

// users table functional
const usersTableBody = document.getElementById('usersTableBody');
const modal = document.getElementById('myModal');
const closeButton = document.getElementById('closeButtonForUserModal');
    

(async () => {
    const { results, info } = await randomuserAPI.get('?results=10');

    console.log(results, 'results');
    results.forEach(element => {
        const { id, name, location } = element;
        usersTableBody.innerHTML += `
            <tr class="${id.name}">
                <td>${name.first} ${name.last}</td>
                <td>${location.country}</td>
            </tr>
        `
    });
})();

(() => {
    usersTableBody.addEventListener('click', (event) => {
        modal.style.display = 'block';
        const tr = event.target.parentNode //tr
        const userId = tr.getAttribute('class');
    })
})();



closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});



