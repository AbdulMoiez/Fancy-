


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