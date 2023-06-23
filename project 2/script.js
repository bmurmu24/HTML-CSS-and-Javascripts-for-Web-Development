function getResults() {
  const userInput = document.getElementById('userInput').value;

  // Send the user input to the server for processing
  fetch('/process', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input: userInput })
  })
  .then(response => response.json())
  .then(data => {
    // Display the combined mind-blowing results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerText = data.results;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
