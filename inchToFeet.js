// Function for the Hide Divs

function inchToFeet() {
  const div = document.getElementById('welcome-message');
  const div2 = document.getElementById('welcome-message2');
  if (div.style.diplay === 'block' && div2.style.diplay === 'block') {
    div.style.display = 'none';
    div2.style.display = 'none';
    createInchArea();
  }
  else {
    div.style.display = 'block';
    div2.style.display = 'block';
    createInchArea();
  }
}

const createInchArea = () => {
  const inputField = document.getElementById('input-field');
  inputField.innerHTML = `
  <label for="role"><h1>Enter Inch here<br> ▼</h1></label>
    <br>
    <input type="text" name="role" id="number" autocomplete="off">
    <button id="submit" onclick="inch()">Submit</button>
  `
}


// Main Function for the APP
const inch = () => {
  const getNumber = document.getElementById('number').value;
  const x = parseInt(getNumber);
  if ( x > 0 ) {
    const result = getFeet(x).toFixed(4);
    const textArea = document.getElementById('message-area');
    textArea.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.innerText = `Feet = ${result}`;
    textArea.appendChild(h1);
  }
  else {
    const textArea = document.getElementById('message-area');
    textArea.innerHTML = '';
    const p = document.createElement('p');
    p.style.color = 'red'
    p.innerText = `PLEASE INPUT A VALID NUMBER`;
    textArea.appendChild(p);
  }
  
}

const getFeet = (feet) => feet / 12;
