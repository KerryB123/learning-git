const nameList = ['Kerry', 'Sneha', 'Phoebe', 'Marcelle', 'Vishal']; // our list of names we want to check against
let correctNames = []; // where we will store our name matches
let incorrectNames = []; // where we will store our inputs that don't match

// this function is purely for visuals
function formatNames(names) {
    const joined = names.join(', ') // joins each value in the array with a ", "
    // the variable 'joined' will be a string that has joined all the array values into a single string
    return joined; // returns a string e.g. "Bob, Johnny, David"
}

// our main function to check inputs against master list (nameList) array variable
function checkNames() {
    // collecting text input value from HTML input element with id of 'user-input'
    const input = document.getElementById('user-input').value;
    const filteredName = nameList.filter(name => input.toLowerCase() === name.toLowerCase());
    // filteredName returns an array that either contains a value or doesn't
    // if this returns a value in the array, this will be the match

    // we'll use the presence of this value (or not) as the condition to execute this if/else statement
    if (filteredName[0]) {
        // this means if there is a value in the first index of filteredName
        // (e.g. if it contains a matched name), execute this push
        correctNames.push(filteredName[0])//display the ouput on the page itself
    console.log(filteredName[0])//this displays the output in the console log
        // correctNames is the array we store out matched names so we can render that on the screen
    } else {
        // if there's no match, push the user input value into the incorrectNames array to render on the screen
        //incorrectNames.push(input);//this would display the ouput on the page itself
        console.log(input);//this displays the output in the console log
    }

    // this simply adds a space between the commas and individual names in the array
    // references above formatNames function
    const correctNamesFormatted = formatNames(correctNames);
    const incorrectNamesFormatted = formatNames(incorrectNames);

    // gets the elements on the page and assigns each relevant variable to their innerHTML
    document.getElementById('count-result').innerHTML = 'Awesome Stream Tutor Class:'+ ' 🤩 ' + correctNames.length;
    document.getElementById('correct-names').innerHTML = correctNamesFormatted;
    document.getElementById('incorrect-names').innerHTML = incorrectNamesFormatted;
    // if you ignore the formatNames function, replace correctNamesFormatted and incorrectNamesFormatted
    // with the correctNames and incorrectNames array variables respectively
}

//PRACTISE CODE/IDEAS:
/*//Two ways to capitalize characters in an array

let name=["bob",
"tom",
"johnson",
"kenneth"] // for (let i = 0; i < name.length; i++){
//     console.log(name[i].toUpperCase())
// }

//Second method

name.forEach(function(name) {
        console.log(name.toUpperCase())
    })*/































//PREVIOUS VERSIONS+INITIAL CODE THAT DID NOT WORK FOR ME OR I DID NOT LIKE:

// setInterval(changeColor,4000);
// function changeColor(){
//   let r = Math.random() * 655 ;
//   let g = Math.random() * 655 ;
//   let b = Math.random() * 655 ;
  
//   document.body.style.backgroundColor = `rgb( ${r}, ${g}, ${b} )`;
// }

/*let  correctNames = []
        const nameList = ["Kerryn Ball", "Phoebe Su", "Sneha Choudhary", "Vishal Prakash", "Marcelle Candy"];
let  incorrectNames = []


let names = ["Kerryn Ball", "Phoebe Su", "Sneha Choudhary", "Vishal Prakash", "Marcelle Candy"];
let myName = document.getElementById("myName");
let result = document.getElementById("result");


const buttonElement = document.querySelector('button');
buttonElement.addEventListener('onclick', checkClassNames);



  // document.getElementById('button').addEventListener('onclick, checkClassNames,true')
function checkClassNames(){

    const input = document.getElementById('myName').value;
    console.log (input)
nameList.map(studentName => {
    if (input === studentName) {
        correctNames.push(studentName)
    }else {
        console.log("filteredHere")
        const Array = incorrectNames.filter(individualName => individualName === input)
        console.log ()
        incorrectNames.map(individualName => {
                                            console.log("here")

            if (individualName === input){
                                console.log("here")

               
            }else{
                console.log("here")
                incorrectNames.push(input)

            }
        })
    }
})
document.getElementById('result').innerHTML= "In My Tutor Class 😀 " + correctNames.length

document.getElementById('correctNames').innerHTML=correctNames
document.getElementById('incorrectNames').innerHTML=incorrectNames

// const checkClassNames = document.querySelector('myName').value;
//       if (result === true ) {checkMessage.textcontent = inMyTutorClass
// } else {checkMessage.textcontent = notInMyTutorClass} 
}

  


//})
//for(let index = 0; index < names.length; index++){
 
  // console.log(names [index]);
//}
*/




