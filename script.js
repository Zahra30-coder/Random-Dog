//stuff that you dont have to wait for
console.log('run 1st')

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

//stuff that you have to wait for
const getNewDog = () => {

    console.log('run 1st')
    fetch('https://dog.ceo/api/breeds/image/random')
    //data return from the data, then dealt by .then, asynchronous program, then json turns the data into an object.

    //asynchronous programming = stuff that you have to wait for
  
    .then ( response => response.json())
    .then(json => {
    console.log(json.message)

    //notice the backtick
    dogImageDiv.innerHTML = `<img src= '${json.message}' height=300 width=300'/>`
    })
}


dogButton.onclick = () => getNewDog()
console.log('run 3rd')

