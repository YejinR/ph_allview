function checkInputFields() {
    const answer = document.getElementById('answer').value.trim();
    const answerError = document.getElementById('answer-error');
    const nextButton = document.querySelector('.nextbutton');

    let allValid = true;

    // 답변 체크
    if (!answer) {
        answerError.style.display = 'block'; // 답변 에러 메시지 표시
        allValid = false;
    } else {
        answerError.style.display = 'none'; // 답변 에러 메시지 숨김
    }

    // 모든 필드가 유효하면 버튼 활성화, 그렇지 않으면 비활성화
    nextButton.disabled = !allValid;

    return allValid; // 모든 입력이 유효한지 여부 반환
}

// 페이지 로드 후 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('.nextbutton');
    const inputs = document.querySelectorAll('#answer');

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
            window.location.href = '../Login&Password/id_find-finish.html';
        }
    });

    // 초기 상태에서 버튼을 비활성화
    checkInputFields();
});