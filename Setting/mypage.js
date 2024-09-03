// 아이디 수정 모드로 전환하는 함수
function editUserId() {
  const userIdDisplay = document.getElementById('userIdDisplay');
  const userIdInput = document.getElementById('userIdInput');
  const editIcon = document.getElementById('editIcon');
  const saveIcon = document.getElementById('saveIcon');

  // 텍스트 표시를 숨기고, 입력 필드를 보여줍니다.
  userIdDisplay.style.display = 'none';
  userIdInput.style.display = 'inline';
  userIdInput.focus(); // 입력 필드에 포커스 설정

  // 수정 아이콘을 숨기고, 저장 아이콘을 표시합니다.
  editIcon.style.display = 'none';
  saveIcon.style.display = 'inline';
}

// 수정된 아이디를 저장하는 함수
function saveUserId() {
  const userIdDisplay = document.getElementById('userIdDisplay');
  const userIdInput = document.getElementById('userIdInput');
  const editIcon = document.getElementById('editIcon');
  const saveIcon = document.getElementById('saveIcon');
  const message = document.getElementById('message');

  const newUserId = userIdInput.value.trim(); // 입력된 값을 가져와서 공백 제거

  if (newUserId) {
    // 새 아이디가 유효한 경우
    userIdDisplay.textContent = newUserId; // 화면에 새 아이디 표시
    userIdDisplay.style.display = 'inline';
    userIdInput.style.display = 'none'; // 입력 필드를 숨김

    // 수정 아이콘을 다시 표시하고, 저장 아이콘을 숨깁니다.
    editIcon.style.display = 'inline';
    saveIcon.style.display = 'none';

    // 성공 메시지 표시
    message.textContent = 'ID가 성공적으로 수정되었습니다.';
    message.style.color = 'green';
  } else {
    // 새 아이디가 유효하지 않은 경우 (예: 빈 문자열)
    message.textContent = '유효한 ID를 입력하세요.';
    message.style.color = 'red';
  }
}