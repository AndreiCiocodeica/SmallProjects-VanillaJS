const toggle = document.getElementById('toggle');

toggle.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked);
});

//or
// toggle.addEventListener('change', () => {
//     document.body.classList.toggle('dark');
// });