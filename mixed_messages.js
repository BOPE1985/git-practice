//Deciding what type of message programme will print when it is run by users

let messages = ["To err is human, to forgive is divine", 
    "There is light at the end of the tunnel, do not give up!", 
    "Failure is when you do not try at all"]
//Storing the function that generates random message in a variable named generateMessage
const generateMessage = () => {
        let randNum = Math.floor(Math.random() * messages.length)
        return messages[randNum]
}
//testing code
console.log(generateMessage())
