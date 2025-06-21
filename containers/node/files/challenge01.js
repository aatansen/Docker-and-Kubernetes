const readline = require('readline');
const fs = require('fs');

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter file name: ', (name) => {
  rl.question('Enter some text: ', (text) => {
    let filePath = name + '.txt';
    fs.writeFile(filePath,text,(err)=>{
      if (err) throw err
    console.log('File created successfully!');
    rl.close();
    })
  });
});

