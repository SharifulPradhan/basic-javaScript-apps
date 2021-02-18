const leapYear = () => {
  const getNumber = document.getElementById('number').value;
  const year = parseInt(getNumber);
  if((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))){
    creatMessage(year, 'is a Leap Year');
  }
  else if(year > 0){
    creatMessage(year, 'is not a Leap Year');
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
