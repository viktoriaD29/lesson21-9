export const finishForm = () => {
  const elem = document.createElement('input');
  elem.setAttribute('type', 'text');
  elem.setAttribute('name', 'login');
  const elem2 = document.querySelector('form');
  elem2.prepend(elem);

  const arr = Array.from(document.querySelectorAll('input[type]'));
  arr[1].setAttribute('type', 'password');
};

