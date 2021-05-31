function sum(a,b){
    return a+b;
}

//console.log('sum='+sum(1,2));

function shuffleArray (array) {

    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      console.log(j)
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    console.log(array)
    return array
  }

  shuffleArray([1,2,3,4,5,6,7,8,9]);