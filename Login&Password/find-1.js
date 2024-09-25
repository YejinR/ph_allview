function checkInputFields() {
    const nickname = document.getElementById('nickname').value.trim();
    const birthday = document.getElementById('birthday').value.trim();
    const nicknameError = document.getElementById('nickname-error');
    const birthdayError = document.getElementById('birthday-error');
    const nextButton = document.querySelector('.nextbutton');

    let allValid = true;

    // 닉네임 체크
    if (!nickname) {
        nicknameError.style.display = 'block'; // 닉네임 에러 메시지 표시
        allValid = false;
    } else {
        nicknameError.style.display = 'none'; // 닉네임 에러 메시지 숨김
    }

    // 생년월일 체크
    if (!birthday) {
        birthdayError.style.display = 'block'; // 생년월일 에러 메시지 표시
        allValid = false;
    } else {
        birthdayError.style.display = 'none'; // 생년월일 에러 메시지 숨김
    }

    // 모든 필드가 유효하면 버튼 활성화, 그렇지 않으면 비활성화
    nextButton.disabled = !allValid;

    return allValid;
}

// 페이지 로드 후 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('.nextbutton');
    const inputs = document.querySelectorAll('#nickname, #birthday');

    // 입력 필드 변경 시마다 유효성 검사
    inputs.forEach(input => {
        input.addEventListener('input', checkInputFields);
    });

    // 버튼 클릭 시 입력 검증
    nextButton.addEventListener('click', function(event) {
        if (!checkInputFields()) {
            event.preventDefault(); // 입력이 비어 있으면 페이지 이동 방지
        } else {
            // 모든 필드가 유효하면 다음 페이지로 이동
            window.location.href = '../Login&Password/id_find-2.html';
        }
    });

    // 초기 상태에서 버튼을 비활성화
    checkInputFields();
});