const accordion = document.querySelector('.accordion');
const items = accordion.querySelectorAll('li');

items.forEach((item) => {
  const title = item.querySelector('.accordion__title');
  const content = item.querySelector('.accordion__content');

  title.addEventListener('click', () => {
    content.classList.toggle('active');
  });
});



/////////////////////////////



function addMatchingElementsToArray(str, arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (str.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
const str = "Manqalin ustunde yaxsi ciger kabab cekdim";
const arr = ["manqal" , "ciger", "kabab", "lule"];
const newArr = addMatchingElementsToArray(str, arr);
console.log(newArr); 

/////////////////////////////////////

function arrangeArray(arr) {
  arr.sort(function(a, b) {
    if (a.number < b.number) {
      return -1;
    } else if (a.number > b.number) {
      return 1;
    } else {
      return 0;
    }
  });
  return arr;
}

console.log(arr);