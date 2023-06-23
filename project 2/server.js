const express = require('express');
const app = express();
const { createInterface } = require('readline');
const { exec } = require('child_process');

app.use(express.json());
app.use(express.static('public'));

app.post('/process', (req, res) => {
  const userInput = req.body.input;

  // Process the user input to get the 10 best results (example using 'grep' command)
  const grepCommand = `grep -r "${userInput}" /path/to/search/directory | head -n 10`;
  exec(grepCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      // Combine the results into one mind-blowing result
      const results = stdout.split('\n').filter(Boolean).join(' ');

      res.json({ results });
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
