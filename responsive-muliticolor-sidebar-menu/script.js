const sidebar = document.querySelector('.sidebar');
const boxPurple = document.querySelector('.boxes-item.purple');
const boxLight = document.querySelector('.boxes-item.light');
const boxDark = document.querySelector('.boxes-item.dark');

boxPurple.addEventListener('click', () => {
    sidebar.className = 'sidebar';
});

boxLight.addEventListener('click', () => {
    sidebar.className = 'sidebar light';
});

boxDark.addEventListener('click', () => {
    sidebar.className = 'sidebar dark';
});