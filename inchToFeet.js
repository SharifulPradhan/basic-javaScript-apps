// Function for the Hide Divs

// Main Function for the APP
const inchToFeet = () => {
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
