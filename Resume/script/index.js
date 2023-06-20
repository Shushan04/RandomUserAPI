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


// ---saerch name functional----------------
const myInput = document.getElementById('myInput');

myInput.addEventListener('input', () => {
    const filter = document.getElementById('myInput').value.toUpperCase();
    const rows = document.querySelectorAll('#myTable tbody tr');
    rows.forEach(row => {
      row.style.display = row.textContent.toUpperCase().includes(filter) ? '' : 'none';
    });
});