const searchInput = document.getElementById("search-input");

const showSearchResult = () => {
    const searchWord = searchInput.value;
    if (searchWord.trim() !== "") {  // 입력값이 공백이 아닐 경우에만 검색
        window.location.href = `https://google.com/search?q=${encodeURIComponent(searchWord)}`;
        searchInput.value = "";  // 검색 후 입력창 비우기
    }
};

// 'Enter' 키를 누르면 검색을 실행하는 이벤트 리스너 추가
searchInput.addEventListener("keypress", (event) => {
    if (event.code === "Enter") {
        showSearchResult();
    }
});
