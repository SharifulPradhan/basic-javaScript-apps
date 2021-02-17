const getvalue = () => {
  const getNumber = document.getElementById('number').value;
  const x = parseInt(getNumber);
  console.log(x%4);
  if(x % 4 === 0 && x > 0){
    creatMessage(x, 'is a Leap Year');
  }
  else if(x > 0){
    creatMessage(x, 'is not a Leap Year');
  }
  else {
    creatMessage('error::', 'Input is invalid');
  }
}

const creatMessage = (year, message) => {
  const textArea = document.getElementById('message-area');
    textArea.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.innerText = `${year} ${message}`;
    textArea.appendChild(h1);
  }
