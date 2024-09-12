// 글씨 크기 변경 함수
function changeFontSize() {
  const fontSize = document.getElementById('fontSizeRange').value; // 슬라이더에서 값 가져오기
  const allTextElements = document.querySelectorAll('body, body *'); // body와 그 안의 모든 요소 선택
  
  // 모든 텍스트 요소의 글씨 크기를 슬라이더 값으로 변경
  allTextElements.forEach(element => {
    element.style.fontSize = fontSize + 'px';
  });
}

// 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
  const fontSizeSlider = document.getElementById('fontSizeRange');
  fontSizeSlider.addEventListener('input', changeFontSize); // 슬라이더의 값이 변경될 때마다 실행
});
