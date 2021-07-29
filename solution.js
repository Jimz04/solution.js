// solution.js 1.0 //

// others 
function version() {
  
  const version = 1.0; // version
  
  console.warn("solution.js version : " + (version + '.0'));
  
}

const cal = (compute) => {
  
  console.warn("calculator: " + compute);
  
}

function typeOf(data) {

  console.warn(typeof data + " type ");

}


// variable
const size = undefined;
const first = "66 69 72 73 74";
const last = "6C 61 73 74";
const all = "61 6C 6C";


// outputs and inputs
function print(output) {
  
  console.log(output);
  
}

function warning(output) {
  
  console.warn(output);
  
}

function error(output) {
  
  console.error(output);
  
}

function write(output) {
  
  document.write(output);
  
}

function writeLine(output) {
  
  document.writeln(output);
  
}

function input(input) {
  
  const inputValue = prompt(input);
  
  return inputValue;
}

// id, class, tags and text
function id(id) {
  
  const getId = document.getElementById(id);
  
  return getId;
}

function classes(name) {
  
  const getClass = document.getElementsByClassName(name);
  
  return getClass;
}

function tags(name) {
  
  const getTag = document.getElementsByTagName(name);
  
  return getTag;
}

function value(select) {
  
  const value = document.querySelector(select).value;
  
  return value;
}

function upperCase(text) {
  
  const upperCase = text.toLocaleUpperCase(text);
  
  return upperCase;
}

function lowerCase(text) {
  
  const lowerCase = text.toLocaleLowerCase(text);
  
  return lowerCase;
}

function select(select) {
  
  const querySelect = document.querySelector(select);
  
  return querySelect;
}

function selectAll(select) {
  
  const querySelectAll = document.querySelectorAll(select);
  
  return querySelectAll;
}

// HTML DOM 
function style(select) {
  
  const style = document.querySelector(select).style;
  
  return style;
}

function addElement(element, id) {
  
  const addElement = document.createElement(element);
 
  addElement.setAttribute("id",id);
  
  return addElement;
}

function addAttribute(select, name, value) {
  
  const selector = document.querySelector(select);
  
  const setAttribute = selector.setAttribute(name,value);
  
  return setAttribute;
}

function addText(select, text) {
  
  const selector = document.querySelector(select);
  
  const addText = selector.innerText = text;
  
  return addText;
}

function addTo(select, element) {
  
  const selector = document.querySelector(select);
  
  const append = selector.appendChild(element);
  
  return append;
}

function remove(select, index) {
  
  const selector = document.querySelector(select);
  
  if (index === "66 69 72 73 74") {
    
    const removeElementFirst = selector.firstElementChild.remove();
    
    return removeElementFirst;
    
  } else if (index === "6C 61 73 74") {
    
    const removeElementLast = selector.lastElementChild.remove();
    
    return removeElementLast;
    
  } else {
    
    index = parseInt(index);
    
    const removeElement = selector.children[index].remove();
    
    return removeElement;
    
  }
  
}

function replace(select, index, replace) {
  
  const selector = document.querySelector(select);
  
  if (index === "66 69 72 73 74") {
    
    const replaceElementFirst = selector.firstElementChild;
    
    replaceElementFirst.innerHTML = replace;
    
    return replaceElementFirst;
    
  } else if (index === "6C 61 73 74") {
    
    const replaceElementLast = selector.lastElementChild;
    
    replaceElementLast.innerHTML = replace;
    
    return replaceElementFirst;
    
  } else {
    
    index = parseInt(index);
    
    const replaceElement = selector.children[index];
    
    replaceElement.innerHTML = replace;
    
    return replaceElement;
    
  }
  
}

function createElement(element, id, addTo, text, attributeName, attributeValue) {
  
  const createElement = document.createElement(element);
  
  createElement.setAttribute("id",id);
  
  const addToSelector = document.querySelector(addTo);
  
  addToSelector.appendChild(createElement);
  
  createElement.innerHTML = text;
  
  createElement.setAttribute(attributeName,attributeValue);
  
  return createElement;
}

// array 

function put(array, value, index) {

if (index === "66 69 72 73 74") {

  const putFirts = array.unshift(value);

  return putFirts;

} else if (index === "6C 61 73 74") {

  const putLast = array.push(value);

  return putLast;

} else {
  
  const put = array[index] = value;
  
  return put;
}
  
}

function del(array, index) {
    
  if (index === "66 69 72 73 74") {
    
    const removeFirts = array.shift();
    
    return removeFirts;
    
  } else if (index === "6C 61 73 74") {
    
    const removeLast = array.pop();
    
    return removeLast;
    
  } else if (index === "61 6C 6C") {
    
    let removeAll;
    
    for (let i = 0; i < array.length; i++) {
      
      for (let i = 0; i < array.length; i++) {
        
        removeAll = array.pop();
        
      }
      
    }
   
   return removeAll;
    
  } else {
    
    const remove = array.splice(index);
    
    return remove;
  }
  
}

// converts
function str(convert) {
  
  const convertToString = String(convert);
  
  return convertToString;
}

function int(convert) {
  
  const convertToInt = parseInt(convert);
  
  return convertToInt;
}

function float(convert) {
  
  const convertToFloat = parseFloat(convert);
  
  return convertToFloat;
}

