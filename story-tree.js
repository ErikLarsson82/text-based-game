module.exports = [
    {
        id: 0,
        question: 'Are you ready to start the game? [y/n]',
        answers: [
            {
                selection: 'y',
                text: 'Ok lets go',
                targetId: 1
            },
            {
                selection: 'n',
                text: 'Game over',
                targetId: -1
            }
        ]
    },
    {
        id: 1,
        question: 'Would you like to eat [fruit] or [berries]?',
        answers: [
            {
                selection: 'fruit',
                text: 'That fills you up good',
                targetId: -1
            },
            {
                selection: 'berries',
                text: 'That tastes good but doesn\'t fill you up',
                targetId: -1
            }
        ]
    }
]