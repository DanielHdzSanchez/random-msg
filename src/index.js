const messages = [
    "Daniel",
    "Ana",
    "Mike",
    "Isis",
    "Fernando",
    "Roberto",
    "Perla"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = {randomMsg}