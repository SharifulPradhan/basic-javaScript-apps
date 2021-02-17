function getvalue(){
  const number = document.getElementById('number').value;
  const x = parseInt(number);
  const message = document.getElementById('message-area');
  message.innerHTML = '';
  const showMessage = document.createElement('h1');
  message.appendChild(showMessage);
  if (x>90){
    showMessage.style.color = 'Green';
    showMessage.innerHTML = 'You Got AA';
    return;
  }
  else if (x>80 && x<=90){
    showMessage.innerHTML = 'You Got AB';
    return;
  }
  else if (x>70 && x<=80){
    showMessage.innerHTML = `${x}: You Got BB`;
    return;
  }
  else if (x>60 && x<=70){
    showMessage.innerHTML = 'You Got BC';
    return;
  }
  else if (x>50 && x<=60){
    showMessage.innerHTML = 'You Got CC';
    return;
  }
  else if (x>40 && x<=50){
    showMessage.innerHTML = 'You Got CD';
    return;
  }
  else if (x>30 && x<=40){
    showMessage.innerHTML = 'You Got DD';
    return;
  }
  else if ( x<=30){
    showMessage.innerHTML = 'You Got FF';
    return;
  }
  else{
    showMessage.style.color = 'red';
    showMessage.innerHTML = 'PLEASE INPUT A VALID Number';
  }
}
