const url = 'https://api.adviceslip.com/advice';

const renderAdviceId = (dataSlip) => {
  const test = document.querySelector('#advice-id');
  test.textContent = dataSlip.id;
}

const renderAdviceQuote = (dataSlip) => {
  const test = document.querySelector('#advice-quote');
  test.textContent = dataSlip.advice;
}

const renderAdviceEls = (dataSlip) => {
  renderAdviceId(dataSlip);
  renderAdviceQuote(dataSlip);
}
fetch(url)
.then(response => response.json())
.then(data => data.slip)
.then(renderAdviceEls)
.catch((err) => console.log(err));