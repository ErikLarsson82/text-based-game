const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const storyTree = require('./story-tree')

let questionIndex = 0

function processQuestion() {

  if (questionIndex === -1)
    process.exit()
    
  const questionObj = storyTree[questionIndex]
  const answers = questionObj.answers

  readline.question(`\n\n${questionObj.question}\n: `, answerInput => {
    
    const answer = answers.find(x => x.selection === answerInput.trim())
    if (answer !== undefined) {
      console.log(`${answer.text}\n`)
      questionIndex = answer.targetId
    } else {
      console.log('Please input a valid answer\n')
    }
    readline.question('Press any key to continue', processQuestion)
  })

}

processQuestion()
