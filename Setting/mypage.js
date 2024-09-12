// 필드 수정 기능을 활성화하는 함수
function editField(field) {
  const displayElement = document.getElementById(`${field}Display`);
  const inputElement = document.getElementById(`${field}Input`);
  const editIcon = document.getElementById(`${field}EditIcon`);

  if (displayElement && inputElement && editIcon) {
    // 기존 텍스트를 입력 필드에 복사
    inputElement.value = displayElement.innerText;

    // 텍스트 요소를 숨기고 입력 필드를 표시
    displayElement.style.display = 'none';
    inputElement.style.display = 'inline-block';
    inputElement.focus();

    // 수정 아이콘을 숨김
    editIcon.style.display = 'none';

    // 입력 필드의 크기를 키움
    inputElement.style.width = '250px';  // 너비 조정
    inputElement.style.height = '30px';  // 높이 조정
    inputElement.style.fontSize = '16px'; // 폰트 크기 조정
  }
}

// 필드 업데이트 함수 (Enter 키를 누르면 호출)
function updateField(field) {
  const displayElement = document.getElementById(`${field}Display`);
  const inputElement = document.getElementById(`${field}Input`);
  const editIcon = document.getElementById(`${field}EditIcon`);

  if (displayElement && inputElement && editIcon) {
    // 입력 필드의 값을 텍스트에 반영
    displayElement.innerText = inputElement.value;

    // 텍스트 요소를 다시 표시하고 입력 필드를 숨김
    displayElement.style.display = 'block';
    inputElement.style.display = 'none';

    // 수정 아이콘을 다시 보이게 함
    editIcon.style.display = 'inline-block';

    // 입력 필드 크기 초기화
    inputElement.style.width = '';  // 크기를 기본값으로 초기화
    inputElement.style.height = '';  // 크기를 기본값으로 초기화
    inputElement.style.fontSize = ''; // 폰트 크기 기본값으로 초기화
  }
}

// 엔터 키를 눌렀을 때 변경 사항 저장
function setupEnterKey(field) {
  const inputElement = document.getElementById(`${field}Input`);
  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      updateField(field);
    }
  });
}

// 각 입력 필드에 대한 엔터 키 설정 (페이지 로드 후 실행)
document.addEventListener('DOMContentLoaded', function() {
  setupEnterKey('nickname');
  setupEnterKey('userId');
  setupEnterKey('password');
  setupEnterKey('birth');
});

// 검색 기록 상태를 저장하는 변수 (true: 기록 켜짐, false: 기록 꺼짐)
let isSearchHistoryEnabled = true;

// 검색 기록 스위치 상태를 변경하는 함수
function toggleSearchHistory() {
  const searchSwitch = document.getElementById('searchHistorySwitch');

  // 스위치가 켜져 있는지 꺼져 있는지 확인
  if (searchSwitch.checked) {
    isSearchHistoryEnabled = true;  // 검색 기록 켜짐
    console.log("검색 기록이 켜졌습니다.");
  } else {
    isSearchHistoryEnabled = false;  // 검색 기록 꺼짐
    console.log("검색 기록이 꺼졌습니다.");
    clearSearchHistory();  // 검색 기록을 초기화
  }
}

// 검색 기록을 초기화하는 함수
function clearSearchHistory() {
  // 검색 기록을 저장하는 방식에 따라 여기서 기록을 삭제
  // 예를 들어, 검색 기록이 로컬 스토리지에 저장되어 있으면 이를 삭제:
  localStorage.removeItem('searchHistory');
  console.log("검색 기록이 삭제되었습니다.");
}

// 검색 기록을 저장하는 함수 (검색이 발생했을 때 호출)
function saveSearch(query) {
  if (isSearchHistoryEnabled) {
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    searchHistory.push(query);  // 검색어 추가
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    console.log("검색 기록 저장됨: " + query);
  } else {
    console.log("검색 기록이 꺼져있어 기록되지 않습니다.");
  }
}

// 스위치 상태 변경 시 toggleSearchHistory 함수 실행
document.getElementById('searchHistorySwitch').addEventListener('change', toggleSearchHistory);

// 페이지 로드 시 스위치 초기 상태 확인
document.addEventListener('DOMContentLoaded', function() {
  const searchSwitch = document.getElementById('searchHistorySwitch');
  searchSwitch.checked = isSearchHistoryEnabled;  // 초기 상태 설정
});
