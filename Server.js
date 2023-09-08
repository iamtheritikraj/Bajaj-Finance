const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const userId = 'Ritik_Raj/02/02/2002';

app.post('/bfhl', (req, res) => {
  try {
 
    const inputData = req.body.data;

    const status = true;
    const collegemail = 'rs2441@srmist.edu.in';
    const RollNumber = 'RA2011027020051';
    const numbers = inputData.filter(item => !isNaN(item)); // Filter out non-numeric items
    const alphabets = inputData.filter(item => typeof item === 'string' && /^[A-Za-z]$/.test(item)); // Filter alphabets
    const highestAlpha = findHighestAlpha(alphabetsArray);

    const response = {
      is_success: status,
      user_id: userId,
      email: collegemail,
      roll_number: RollNumber,
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highestAlpha,
    };


    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/bfhl', (req, res) => {

  const getResponse = { operation_code: 1 };
  res.status(200).json(getResponse);
});


function findHighestAlpha(alphabetsArray) {
  if (alphabetsArray.length === 0) {
    return [];
  }

  alphabetsArray.sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base' }));


  const highestAlpha = [alphabetsArray[0]]; 

  
  for (let i = 1; i < alphabetsArray.length; i++) {
    if (alphabetsArray[i].localeCompare(alphabetsArray[0], undefined, { sensitivity: 'base' }) === 0) {
      highestAlpha.push(alphabetsArray[i]);
    } else {
      break; 
    }
  }

  return highestAlpha;
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
