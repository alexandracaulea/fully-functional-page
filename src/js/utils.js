// Display the response received from the server
function displayResults(response) {
  const modalResultContainer = document.querySelector(".modal__result");
  let dataToDisplay = "";

  for (let msg in response) {
    dataToDisplay += `<p class="modal__result__heading">${response[msg].message}</p>`;
  }
  modalResultContainer.innerHTML = dataToDisplay;
}

export default displayResults;
