const widrawAmount=()=>{
let enteredAmount =Number(document.getElementById("amount").value);
console.log(enteredAmount);
let preferedNotes = Number(document.getElementById("prefferedNotes").value);
console.log(preferedNotes);
if(enteredAmount<=100000){
let revMaxNotes;
let limitMaxNotes;
let remaningAmount = 0;
let reserve = {
  thousand: 1000000,
  fiveHundred: 100000,
  hundred: 1000000,
  fifty: 100000,
  twenty: 100000,
  ten: 100000,
  five: 100000,
  two: 100000,
  one: 100000,
};
let widraw = {
  thousand: 0,
  fiveHundred: 0,
  hundred: 0,
  fifty: 0,
  twenty: 0,
  ten: 0,
  five: 0,
  two: 0,
  one: 0,
};
const updateHtml=()=>{
  document.getElementById("fiveHundred").innerHTML=widraw.fiveHundred;
  document.getElementById("Hundred").innerHTML=widraw.hundred;
  document.getElementById("Fifty").innerHTML=widraw.fifty;
  document.getElementById("Twenty").innerHTML=widraw.twenty;
  document.getElementById("Ten").innerHTML=widraw.ten;
  document.getElementById("Five").innerHTML=widraw.five;
  document.getElementById("One").innerHTML=widraw.one;
  let total=(widraw.thousand*1000)+(widraw.fiveHundred*500)+(widraw.hundred*100)+(widraw.fifty*50)+(widraw.twenty*20)+(widraw.ten*10)+(widraw.five*5)+(widraw.one);
  console.log(total);
}
function remainingAmount(ammountRequired) {
   if (widraw.fiveHundred != 0) {
    var availableNotes = [ 100, 50, 20, 10, 5, 1]
      result = [];
  } else if (widraw.hundred != 0) {
    var availableNotes = [500, 50, 20, 10, 5, 1]
      result = [];
  }
  else if (widraw.fifty != 0) {
    var availableNotes = [500, 100,20, 10, 5, 1]
      result = [];
  }
  else if (widraw.twenty != 0) {
    var availableNotes = [500, 100, 50,10, 5, 1]
      result = [];
  }
  else if (widraw.ten != 0) {
    var availableNotes = [500, 100, 50, 20,  5, 1]
      result = [];
  }
  else if (widraw.five != 0) {
    var availableNotes = [500, 100, 50, 20, 10, 1]
      result = [];
  }
  else if (widraw.one != 0) {
    var availableNotes = [ 500, 100, 50, 20, 10, 5],
      result = [];
  }
  else{
    var availableNotes = [ 500, 100, 50, 20, 10, 5,  1 ], 
    result = [];
  }
  if ( ammountRequired > 0) {
    while (ammountRequired > 0) {
      for (var i = 0; i < availableNotes.length; i++) {
        var note = availableNotes[i];
        if (ammountRequired - note >= 0) {
          ammountRequired -= note;
          result.push(note);
           if (note === 500) {
            reserve.fiveHundred = reserve.fiveHundred - 500;
            widraw.fiveHundred = widraw.fiveHundred + 1;
          } else if (note === 100) {
            reserve.hundred = reserve.hundred - 100;
            widraw.hundred = widraw.hundred + 1;
          } else if (note === 50) {
            reserve.fifty = reserve.fifty - 50;
            widraw.fifty = widraw.fifty + 1;
          } else if (note === 20) {
            reserve.twenty = reserve.twenty - 20;
            widraw.twenty = widraw.twenty + 1;
          } else if (note === 10) {
            reserve.ten = reserve.ten - 10;
            widraw.ten = widraw.ten + 1;
          } else if (note === 5) {
            reserve.five = reserve.five - 5;
            widraw.five = widraw.five + 1;
          } else if (note === 1) {
            reserve.one = reserve.one - 1;
            widraw.one = widraw.one + 1;
          }
          break;
        } else if (i === availableNotes.length - 1 && ammountRequired > 0) {
          console.log( "NoteUnavailableException");
          break;
        }
      }
    }
  } else if (ammountRequired <= 0) {
    console.log("InvalidArgumentException");
  }

  return result;
}
const prefFirst=()=>{
if (preferedNotes) {
  //For FiveHundred
  if (preferedNotes === 500) {
    let maxNotes = Math.floor(enteredAmount / preferedNotes);
    enteredAmount = enteredAmount - maxNotes * 500;
    reserve.fiveHundred = reserve.fiveHundred - maxNotes * 500;
    widraw.fiveHundred = widraw.fiveHundred + maxNotes;

  }
  //For FiveHundred End

  //For Hundred
  if (preferedNotes === 100) {
    let maxNotes = Math.floor(enteredAmount / preferedNotes);
    if (maxNotes <= 200) {
      enteredAmount = enteredAmount - maxNotes * 100;
      reserve.hundred = reserve.hundred - maxNotes * 100;
      widraw.hundred = widraw.hundred + maxNotes;

    } else if (maxNotes > 200) {
      limitMaxNotes = maxNotes - 200;
      revMaxNotes = maxNotes - limitMaxNotes;
      enteredAmount = enteredAmount - revMaxNotes * 100;
      reserve.hundred = reserve.hundred - revMaxNotes * 100;
      widraw.hundred = widraw.hundred + revMaxNotes;

    }
  }
  //For Hundred End

  //For Fifty
  if (preferedNotes === 50) {
    let maxNotes = Math.floor(enteredAmount / preferedNotes);
    if (maxNotes <= 200) {
      enteredAmount = enteredAmount - maxNotes * 50;
      reserve.fifty = reserve.fifty - maxNotes * 50;
      widraw.fifty = widraw.fifty + maxNotes;

    } else if (maxNotes > 200) {
      limitMaxNotes = maxNotes - 200;
      revMaxNotes = maxNotes - limitMaxNotes;
      enteredAmount = enteredAmount - revMaxNotes * 100;
      reserve.fifty = reserve.fifty - revMaxNotes * 100;
      widraw.fifty = widraw.fifty + revMaxNotes;

    }
  }
  //For Fifty End

  //For Twenty
  if (preferedNotes === 20) {
    let maxNotes = Math.floor(enteredAmount / preferedNotes);
    if (maxNotes <= 200) {
      enteredAmount = enteredAmount - maxNotes * 20;
      reserve.twenty = reserve.twenty - maxNotes * 20;
      widraw.twenty = widraw.twenty + maxNotes;

    } else if (maxNotes > 200) {
      limitMaxNotes = maxNotes - 200;
      revMaxNotes = maxNotes - limitMaxNotes;
      enteredAmount = enteredAmount - revMaxNotes * 20;
      reserve.twenty = reserve.twenty - revMaxNotes * 20;
      widraw.twenty = widraw.twenty + revMaxNotes;

    }
  }
  //For Twenty End

  //For Ten
  if (preferedNotes === 10) {
    let maxNotes = Math.floor(enteredAmount / preferedNotes);
    if (maxNotes <= 200) {
      enteredAmount = enteredAmount - maxNotes * 10;
      reserve.ten = reserve.ten - maxNotes * 10;
      widraw.ten = widraw.ten + maxNotes;
;
    } else if (maxNotes > 200) {
      limitMaxNotes = maxNotes - 200;
      revMaxNotes = maxNotes - limitMaxNotes;
      enteredAmount = enteredAmount - revMaxNotes * 10;
      reserve.ten = reserve.ten - revMaxNotes * 10;
      widraw.ten = widraw.ten + revMaxNotes;
   
    }
  }
  //For Ten End

  //For Five
  if (preferedNotes === 5) {
    let maxNotes = Math.floor(enteredAmount / preferedNotes);
    if (maxNotes <= 200) {
      enteredAmount = enteredAmount - maxNotes * 5;
      reserve.five = reserve.five - maxNotes * 5;
      widraw.five = widraw.five + maxNotes;
 
    } else if (maxNotes > 200) {
      limitMaxNotes = maxNotes - 200;
      revMaxNotes = maxNotes - limitMaxNotes;
      enteredAmount = enteredAmount - revMaxNotes * 5;
      reserve.five = reserve.five - revMaxNotes * 5;
      widraw.five = widraw.five + revMaxNotes;
 
    }
  }
  //For Five End

  //For One
  if (preferedNotes === 1) {
    let maxNotes = Math.floor(enteredAmount / preferedNotes);
    if (maxNotes <= 200) {
      enteredAmount = enteredAmount - maxNotes;
      reserve.one = reserve.one - maxNotes;
      widraw.one = widraw.one + maxNotes;

    } else if (maxNotes > 200) {
      limitMaxNotes = maxNotes - 200;
      revMaxNotes = maxNotes - limitMaxNotes;
      enteredAmount = enteredAmount - revMaxNotes;
      reserve.one = reserve.one - revMaxNotes;
      widraw.one = widraw.one + revMaxNotes;

    }
  }
}
}
if(preferedNotes){
  prefFirst();
  console.log(remainingAmount(enteredAmount));

 
}
if (enteredAmount && preferedNotes===0) {
  console.log(remainingAmount(enteredAmount));
 
}
console.log(widraw);
updateHtml();
}
if(enteredAmount>100000){
  alert("Enter Amount Within Range of 1 to 100000");
}
}

