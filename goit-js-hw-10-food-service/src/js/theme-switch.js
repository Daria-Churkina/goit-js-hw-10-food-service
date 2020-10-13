const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeInput = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const currentTheme = localStorage.getItem('theme');

if (currentTheme === Theme.LIGHT) {
  body.classList.add(Theme.LIGHT);
} else {
  body.classList.add(Theme.DARK);
  themeInput.setAttribute('checked', true);
}

themeInput.addEventListener('change', () => {
  body.classList.toggle(Theme.DARK);
  if (body.classList.contains(Theme.DARK)) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
});
