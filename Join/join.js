// 전체 동의 체크박스
const checkAll = document.getElementById('checkbox1');

// 모든 체크박스 (전체 동의 체크박스를 제외한 나머지)
const checkboxes = document.querySelectorAll('input[type="checkbox"]:not(#checkbox1)');

// 전체 동의 체크박스 이벤트 리스너
checkAll.addEventListener('change', function() {
    // 전체 동의 체크박스의 상태에 따라 모든 개별 체크박스를 체크 또는 해제
    checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
    });
});

// 개별 체크박스 이벤트 리스너
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        let allChecked = true;
        // 모든 개별 체크박스가 체크되었는지 확인
        checkboxes.forEach(cb => {
            if (!cb.checked) {
                allChecked = false;
            }
        });
        // 전체 동의 체크박스의 상태를 개별 체크박스들의 상태에 따라 설정
        checkAll.checked = allChecked;
    });
});

// 필수 체크박스들이 모두 체크되었는지 확인하고 페이지 이동
function validateAndProceed() {
    var requiredCheckboxes = document.querySelectorAll('input[type="checkbox"][required]');
    var allChecked = Array.from(requiredCheckboxes).every(checkbox => checkbox.checked);
    var errorMessage = document.getElementById('error-message');

    if (allChecked) {
        // 모든 필수 항목이 체크되었을 때, 다음 페이지로 이동
        location.href = '../Join/join-1.html';
    } else {
        // 필수 항목이 체크되지 않았을 때, 오류 메시지 표시
        errorMessage.textContent = "필수 항목을 체크하셔야 합니다.";
        errorMessage.style.display = 'block';
    }
}

// 체크박스 상태가 변경될 때마다 에러 메시지 숨기기
document.addEventListener('DOMContentLoaded', function() {
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            document.getElementById('error-message').style.display = 'none';
        });
    });
});

// 여기서부터는 join-1 페이지 관련

// 회원가입 폼 유효성 검사
function validateForm() {
    const requiredFields = document.querySelectorAll('input[required], select[required]');
    let isValid = true;
  
    requiredFields.forEach(field => {
      // 필수 입력 필드가 비어있는지 확인
      if (!field.value.trim()) {
        isValid = false;
        showError(field.id, "입력 필수 항목입니다.");
      } else {
        hideError(field.id);
      }
    });
  
    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    const pw = document.getElementById('pw');
    const pwConfirm = document.getElementById('pw-confirm');
    if (pw.value !== pwConfirm.value) {
      isValid = false;
      showError('pw-confirm', "비밀번호가 일치하지 않습니다.");
    } else {
      hideError('pw-confirm');
    }
  
    // 생년월일 입력이 8자리인지 확인 (예: YYYYMMDD)
    const birth = document.getElementById('birth');
    if (birth.value.length !== 8) {
      isValid = false;
      showError('birth', "올바른 생년월일을 입력하세요.");
    } else {
      hideError('birth');
    }
  
    // 모든 유효성 검사를 통과하면 다음 페이지로 이동
    if (isValid) {
      window.location.href = '../Join/join-finish.html';
    }
}
  
// 특정 필드에 오류 메시지를 표시
function showError(fieldId, message) {
    const errorDiv = document.getElementById(`${fieldId}-error`);
    if (errorDiv) {
      errorDiv.textContent = message;
      errorDiv.style.display = 'block';
    }
}
  
// 특정 필드의 오류 메시지를 숨김
function hideError(fieldId) {
    const errorDiv = document.getElementById(`${fieldId}-error`);
    if (errorDiv) {
      errorDiv.style.display = 'none';
    }
}

// 힌트 선택 시 "직접입력"을 선택하면 커스텀 입력 필드를 표시
const hintSelect = document.getElementById('hintDomain');
const customHint = document.getElementById('customHint');
if (hintSelect.value === '직접입력' && !customHint.value.trim()) {
    isValid = false;
    showError('customHint', "힌트를 입력하세요.");
} else {
    hideError('customHint');
}

// 중복 확인 팝업을 띄우는 함수 (실제 중복 확인은 서버와 통신해야 함)
function checkDuplicate(field) {
  showPopup("확인되었습니다.");
}

// 팝업을 표시하는 함수
function showPopup(message) {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.textContent = message;
  popup.style.display = 'block';
}

// 팝업을 닫는 함수
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// 페이지 로드 후 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
  const pwConfirm = document.getElementById('pw-confirm');
  if (pwConfirm) {
    pwConfirm.addEventListener('input', function() {
      const pw = document.getElementById('pw').value;
      if (this.value !== pw) {
        showError('pw-confirm', "비밀번호가 일치하지 않습니다.");
      } else {
        hideError('pw-confirm');
      }
    });
  }

  const birth = document.getElementById('birth');
  if (birth) {
    birth.addEventListener('input', function() {
      if (this.value.length !== 8) {
        showError('birth', "올바른 생년월일을 입력하세요.");
      } else {
        hideError('birth');
      }
    });
  }

  // 모든 필수 입력 필드에 대해 blur 이벤트 리스너 추가
  document.querySelectorAll('input[required], select[required]').forEach(field => {
    field.addEventListener('blur', function() {
      if (!this.value.trim()) {
        showError(this.id, "이 필드는 필수입니다.");
      } else {
        hideError(this.id);
      }
    });
  });


  const hintSelect = document.getElementById('hintDomain');
  if (hintSelect) {
      hintSelect.addEventListener('change', toggleHintInput);
  }
});

// 힌트 입력 선택 시 관련 UI를 토글하는 함수
function toggleHintInput() {
    const select = document.getElementById('hintDomain');
    const customInput = document.getElementById('customHint');
    
    if (select.value === '직접입력') {
        select.style.display = 'none';
        customInput.style.display = 'block';
        customInput.setAttribute('required', '');
        select.removeAttribute('required');
    } else {
        select.style.display = 'block';
        customInput.style.display = 'none';
        select.setAttribute('required', '');
        // customInput.removeAttribute('required');
    }

}

//입력 시 색 변경 부분 수정하기 
