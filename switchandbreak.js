function getvalue(){
  const number = document.getElementById('number').value;
  const x = parseInt(number);
  const message = document.getElementById('message-area');
  message.innerHTML = '';
  const showMessage = document.createElement('h1');
  message.appendChild(showMessage);

  switch(x){
    case 1: case 8: case 15: case 23:
      showMessage.innerHTML = 'Today is Monday';
    break;
    case 2: case 9: case 16: case 24:
      showMessage.innerHTML = 'Today is Tuesday';
    break;
    case 3: case 10: case 17: case 25:
      showMessage.innerHTML = 'Today is Wednesday';
    break;
    case 4: case 11: case 18: case 23:
      showMessage.innerHTML = 'Today is Thrusday';
    break;
    case 5: case 12: case 19: case 24:
      showMessage.innerHTML = 'Today is Friday';
    break;
    case 6: case 13: case 20: case 25:
      showMessage.innerHTML = 'Today is Saturday';
    break;
    case 7: case 14: case 21: case 26:
      showMessage.style.color = 'green';
      showMessage.innerHTML = 'Today is Sunday';
    break;
    default:
      showMessage.style.color = 'red';
      showMessage.innerHTML = 'PLEASE INPUT A VALID NUMBER';
  }
}