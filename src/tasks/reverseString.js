// import React from 'react';

// class ReactTasks extends React.Component {
    
//     render() {
//         return (
//                 <div>        
//                 </div>
//         );
//     }
// }

// export default ReactTasks;

function reverse(array){
    var output = [];
    for (var i = array.length; i > 0; i--){   // [0,1,2,3]
        output.push(array.pop());
    }
    return output;
}

reverse([0,1,2,3]);

function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}

function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
  findLongestWord("My name is TejasriNiharika from Vijayawada,AP");

  highAndLow = function(x) {
    // split the string & map function to convert each element to number
    var newArray = x.split(' ').map(function(item) {
      return Number(item)
    })
  
    return {
      max: Math.max(...newArray),
      min: Math.min(...newArray),
    }
  };
  
  console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 12'));


  function getVowels(string) {
    var Vowels = 'aAeEiIoOuU';
    var vowelsCount = 0;
    for(var i = 0; i < string.length ; i++) {
       if (Vowels.indexOf(string[i]) !== -1) {
          vowelsCount += 1;
      }
    }
 return vowelsCount;
}