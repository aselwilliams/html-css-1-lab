const para = document.querySelector("#history");

// const newPara = para.innerText.replaceAll(/\[(.*?)\]/g,"")
let cleanStr = para.innerText.replace(new RegExp("\\[.*?\\]","g"),"");
console.log(cleanStr);

// function remove(str) {
//   let res = "";
//   for(let i = 0; i < str.length; i++) {
//     console.log(str[i])
//     console.log(str.charCodeAt(i))
//     let found=str.charCodeAt(i) === 91
//     if(str[i]===found) {
//       console.log("inside");
//       res = str.splice(i, i + 3);
//       console.log(res);
//     }
//     return res;
//   }
// }
// console.log(remove(para.innerText));
