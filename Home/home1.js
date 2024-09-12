const ul = document.querySelector(".pop_rel_keywords");
const searchInput = document.querySelector(".search_input");
const relContainer = document.querySelector(".rel_search");
let cache = '';


const checkInput = () => {
    const beforeInput = searchInput.value;
    timer(beforeInput);
}


const timer = (beforeInput) => {
  setTimeout(() => {

    if(searchInput.value === beforeInput) {
      console.log("입력멈춤");
      loadData(searchInput.value);
      checkInput();
      
    } else {
      console.log("입력변함");
      checkInput();
    }
   
    if(searchInput.value === "") {
      relContainer.classList.add("hide");
    } else {
      relContainer.classList.remove("hide");
    }
  }, 500);
}
  


const loadData = (input) => {
  const url = `https://completion.amazon.com/api/2017/suggestions?session-id=135-3077052-6015425&customer-id=&request-id=DMRETXPQ3PZJQ5TKYSWX&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=undefined&prefix=${input}&event=onFocusWithSearchTerm&limit=11&fb=1&suggestion-type=KEYWORD&suggestion-type=WIDGET&_=1615280967091`;
  
  if(cache === url) return;
  else {
 cache = url;
fetch(url)
.then((res) => res.json())
.then(res => fillSearch(res.suggestions))
  }
}

const fillSearch = (suggestArr) => {
  ul.innerHTML = "";
  suggestArr.forEach((el, idx) => {
    const li = document.createElement("li");
    li.innerHTML = el.value;
    ul.appendChild(li);
  }) 
     
   const liList = document.querySelectorAll(".pop_rel_keywords li");

  
}

const highlightText = () => {


}

checkInput();