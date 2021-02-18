
// Main Function for the APP
const getGrade = () => {
  const number = document.getElementById('number').value;
  document.getElementById('number').value = '';
  const x = parseInt(number);
  const message = document.getElementById('message-area');
  message.innerHTML = '';
  const showMessage = document.createElement('h1');
  message.appendChild(showMessage);
  if (x>90){
    showMessage.style.color = 'Green';
    showMessage.innerHTML = 'You Got A+';
    return;
  }
  else if (x>80 && x<=90){
    showMessage.innerHTML = 'You Got A';
    return;
  }
  else if (x>70 && x<=80){
    showMessage.innerHTML = `${x}: You Got A-`;
    return;
  }
  else if (x>60 && x<=70){
    showMessage.innerHTML = 'You Got B';
    return;
  }
  else if (x>50 && x<=60){
    showMessage.innerHTML = 'You Got B-';
    return;
  }
  else if (x>40 && x<=50){
    showMessage.innerHTML = 'You Got C';
    return;
  }
  else if (x>30 && x<=40){
    showMessage.innerHTML = 'You Got D';
    return;
  }
  else if ( x<=30){
    showMessage.style.color = 'red';
    showMessage.innerHTML = 'You Got F';
    return;
  }
  else{
    showMessage.style.color = 'red';
    showMessage.innerHTML = 'PLEASE INPUT A VALID Number';
  }
}
