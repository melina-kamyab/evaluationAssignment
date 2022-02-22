export function addSpace(e) {
  const {value, id} = e.target;
  let ele = document.getElementById(id);
  if (value.length === 4 || value.length === 9 || value.length === 14)
    ele.value = ele.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
}

export function removeSpecial(e) {
  let regex =   /[A-Za-z}"`~_=.\->\]|<?+*/,;\[:{\\!@#\/'$%^&*()]/g
  let keyPress = e.key
  let regexKeypress = regex.test(keyPress)

  if(regexKeypress === true){
    e.preventDefault();
  }

   // let invalidChars = ['- ', '+',"e", "E",' ', '.'];
  // if (invalidChars.includes(keyPress)) {
  //   e.preventDefault();
  // }
}

export function removeDigits(e) {
  let invalidChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}
