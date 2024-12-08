'use strict';

const logo = document.querySelector('.logo');

const executor = (resolve, reject) => {
  const message = document.createElement('div');

  logo.addEventListener('click', () => {
    message.className = 'message';
    message.textContent = 'Promise was resolved!';
    resolve(document.body.appendChild(message));
  });

  setTimeout(() => {
    message.className = 'message error-message';
    message.textContent = 'Promise was rejected!';
    reject(document.body.appendChild(message));
  }, 3000);
};

// eslint-disable-next-line no-unused-vars
const promise1 = new Promise(executor);
