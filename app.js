const url = 'https://api.adviceslip.com/advice';

const renderTxtContent = (elId, text) => {
  const el = document.getElementById(elId);
  el.textContent = text;
};

const renderAdvice = async () => {
  // show loading texts by default
  renderTxtContent('advice-id', 'loading...');
  renderTxtContent('advice-quote', 'Please wait a moment...');

  try {
    const response = await fetch(url);
    const data = await response.json();
    // show error if response status is not ok
    if (!response.ok) {
      renderTxtContent('advice-id', 'error');
      renderTxtContent('advice-quote', 'Something went wrong! Please try again later.');
    } else {
      renderTxtContent('advice-id', data.slip.id);
      renderTxtContent('advice-quote', data.slip.advice);
    }
  }
  catch (error) {
    const errMsg = error.message + '. Please try again later.'
    renderTxtContent('advice-quote', errMsg);
    renderTxtContent('advice-id', 'error');
  }
};
// render a advice on page load;
renderAdvice()

// render new advice on button click
document.querySelector('#btn-advice').addEventListener('click', renderAdvice);