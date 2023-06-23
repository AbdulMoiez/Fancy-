
let string = 'aA11'

function duplicateCount(text){
let lower = text.toLowerCase()
 console.log(lower);
 let obj = {}
 for (let i = 0; i < lower.length; i++) {
     let char = lower[i]
     if (obj[char]) {
         obj[char]++;
     }else{
         obj[char] = 1
     }
     
 }
console.log(obj); 
    
      }
//duplicateCount(string)
//<<<<<<<<<<<<<<<<<--------------------->>>>>>>>>>>>>>>>>>>>>>>>>>



const array1 = [-1,2,3,4,-5]

function positiveSum(arr) {
  let sum = 0;
 if (arr.length == 0 ) {
    sum = 0
 }
else{
    for (let i = 0; i < arr.length; i++) {
        let first = arr[i];
        if (first > 0) {
            sum += first
        }
  }
}
 
return sum;

}
//positiveSum(array1)
//<<<<<<<<<<<<<<<<<--------------------->>>>>>>>>>>>>>>>>>>>>>>>>>
function makeNegative(num) {
  let negative = ''
  let convert;
  if (num > 0) {
      negative = '-' + num
      convert = parseInt(negative)
      
  }else if(num < 0 ){
    convert = parseInt(num)
  } else if(num = 0 ){
    convert = parseInt(num)
  }
  console.log(convert);
  }

  //makeNegative(-42)


  const string2 = 'aabcdeefghhijjklmnoopqrrstuvvwxyyz'

function RemoveDuplicate(str) {
    let arr = str.split('')
    //console.log(arr);
    let newChar = ''
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] === arr[i+1]) {
            arr.shift(arr[i])
            newChar += arr[i]
        }else{
        newChar += arr[i]
        }
        
        
    }
    //console.log(newChar);
}

 RemoveDuplicate(string2)

 function removeDuplicateWords(str) {
    var words = str.split(" ");
    var uniqueWords = [];
  for (var i = 0; i < words.length; i++) {
      var currentWord = words[i];
    //   console.log(currentWord);
  if (uniqueWords.indexOf(currentWord) === -1) {
        uniqueWords.push(currentWord);
      }
    }
    var result = uniqueWords.join(" ");
  
    return result;
  }
  var inputString = "Sometimes Good things are Good but sometimes its bad and sometimes bad things are bad but sometimes its good too";
//   var outputString = removeDuplicateWords(inputString);
//  console.log(outputString);


// const array3 = [3, 5, 4, 10, 9];
// const array4 = [2, 4, 5, 3, 6, 7];
// const array5 = [8, 6, 9, 5, 10, 3];

// function Fancy(arr) {
//   console.log(arr);

//   for (let i = 0; i < arr.length - 2; i += 2) {
//     if ((arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2])) {
//       return true;
//     } else if ((arr[i] > arr[i + 1] && arr[i + 1] < arr[i + 2])) {
//       return true;
//     } else if (arr[i] === arr[i + 1]) {
//       return false;
//     }
//   }

//   return false;
// }



// let result2 = Fancy(array4);
// console.log(result2);



//<<<<<<<<<<<<<<<<<<<<<------------------------>>>>>>>>>>>>>>>>>>>>
// const array3 = [3, 5, 4, 10,10, 9];
// const array4 = [2, 4, 8, 1, 2];
// const array5 = [8, 6, 9, 2, 10, 3]; 

// function Fancy(arr) {
//   console.log(arr); 

//   for (let i = 1; i < arr.length - 2; i++) {
//     // console.log(arr[i], '+', arr[i + 1], '+', arr[i + 2] );
//     if ((arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2] ) ||
//         (arr[i] > arr[i + 1] && arr[i + 1] < arr[i + 2] )) {
//       return true;
//     }
//   }

//   return false;
// }

// let result2 = Fancy(array4);
// console.log(result2);

// const array4 = [6,7,2,1,8];
// function NonFancy(arr) {
//   console.log(arr);
//   let bool = true;

//   for (let i = 0; i < arr.length - 2; i += 2) {
//     console.log(arr[i], '+', arr[i + 1], '+', arr[i + 2]);
//     // console.log(arr[i + 2]);
//     if (arr[i] >= arr[i + 1] || arr[i + 1] <= arr[i + 2]) {
//       bool = false; 
//     }
//   }

//   return bool;
// }

// let result3 =  NonFancy(array4)
// console.log(result3);



const array3 = [3, 5, 9 ,10, 9,11];
const array4 = [4, 2, 7, 6, 8,3];
const array5 = [8, 6, 9, 2, 10, 3]; 


function Fancy(arr) {
  console.log(arr);

  let allConditionsMet = `(${false}) That is NonFancy Array ` 

  for (let i = 0; i < arr.length - 2; i++) {
    // console.log(arr[i], arr[i + 1], arr[i + 2]);

    if ((arr[i] > arr[i + 1] && arr[i + 1] < arr[i + 2]) ) {
      allConditionsMet = `(${true}) That is Fancy Array `
     
    }
    else if ((arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2]) ) {
      allConditionsMet = `(${true}) That is Fancy Array `
     
    } 
    else{
      console.log('else statement is working');
      allConditionsMet = `(${false}) That is NonFancy Array ` 
      break
    }
  }

  return allConditionsMet;
}

let result2 = Fancy(array5);
console.log(result2);