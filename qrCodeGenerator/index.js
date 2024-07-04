/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
  .prompt([
    {
    message: "Type your URL here: ",
    name: "URL",
    },
  ])
  .then((answers) => {
    let url = answers.URL;
    let qrImg = qr.image(url);
    qrImg.pipe(fs.createWriteStream('qrImg.png'));
    fs.writeFile('URL.txt', url, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('URL saved successfully.');
        }
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });