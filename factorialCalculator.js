const factorial = () => {
    const getInput = document.getElementById('input').value;
    const result = getFactorial(getInput);
    const messageDiv = document.getElementById('message-area');
    messageDiv.innerHTML = "";
    const message = document.createElement("h1");
    messageDiv.appendChild(message);
    if (getInput >= 0){
      message.innerHTML = result;
  }
    else if (getInput < 0){
      message.innerHTML = "Please Input a Valid Number";
  }
    else{
      message.style.color = "tomato";
      message.innerHTML = "Please Input a Valid Number";
  }
}


const getFactorial = (n) => {
  let factorial = 1;
  for (let i = 1; i <= n ; i++) {
    factorial = factorial * i;
  }
  return factorial;
}