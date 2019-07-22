const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Are you ready to play a game? `, answer => {
  if (answer === 'y') {
    console.log(`Ok lets go`)
    readline.close()
  } else {
    process.exit()
  }
})