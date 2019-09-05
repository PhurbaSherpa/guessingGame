const target = Math.floor(Math.random() * 100) + 1;
let count = 0;
console.log(target);

function game(event) {
  guess = Number(event.target.value);

  if (guess < 1 || guess > 100) {
    document.querySelector('#current').innerHTML = 'Invalid';
    document.querySelector(
      '#numberGuessed'
    ).innerText = `Enter a number from 1-100`;
    event.target.value = '';
    return;
  }
  var node = document.createElement('p');
  var textNode = document.createTextNode(guess);
  node.appendChild(textNode);
  document.getElementById('list').appendChild(node);
  document.querySelector('#current').innerHTML = guess;

  if (target === guess) {
    document.querySelector('#numberGuessed').innerText = `You win`;
    event.target.value = guess;
    setTimeout(() => {
      location.reload();
    }, 2500);
  } else if (Math.abs(target - guess) < 10) {
    document.querySelector('#numberGuessed').innerText = `You are really hot`;
    event.target.value = '';
  } else {
    document.querySelector('#numberGuessed').innerText = `You are really cold`;
    event.target.value = '';
  }
}

document.querySelector('#guess').addEventListener('change', game);

document.querySelector('#submission').addEventListener('click', game);

document.querySelector('#reset').addEventListener('click', event => {
  location.reload();
});

document.querySelector('#hint').addEventListener('click', () => {
  count++;
  let evenOrOdd = target % 2 === 0 ? 'even' : 'odd';
  let higherOrLower = target < 50 ? 'less than 50' : 'larger than 50';

  if (count === 1) {
    document.querySelector(
      '#numberGuessed'
    ).innerText = `The target number is ${higherOrLower}`;
  }
  if (count === 2) {
    document.querySelector(
      '#numberGuessed'
    ).innerText = `The target number is ${higherOrLower} and is ${evenOrOdd} \n no more hints`;
  }
});
