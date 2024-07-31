// 전체 동의 체크박스
const checkAll = document.getElementById('checkbox1');
// 모든 체크박스
const checkboxes = document.querySelectorAll('input[type="checkbox"]:not(#checkbox1)');

// 전체 동의 체크박스 이벤트 리스너
checkAll.addEventListener('change', function() {
    checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
    });
});

// 개별 체크박스 이벤트 리스너
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        let allChecked = true;
        checkboxes.forEach(cb => {
            if (!cb.checked) {
                allChecked = false;
            }
        });
        checkAll.checked = allChecked;
    });
});

function validateAndProceed() {
    var requiredCheckboxes = document.querySelectorAll('input[type="checkbox"][required]');
    var allChecked = Array.from(requiredCheckboxes).every(checkbox => checkbox.checked);
    var errorMessage = document.getElementById('error-message');

    if (allChecked) {
        // 모든 필수 항목이 체크되었을 때
        location.href = '../Join/join-1.html';
    } else {
        // 필수 항목이 체크되지 않았을 때
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
// 여기서부터는 join-1

function validateForm() {
    const requiredFields = document.querySelectorAll('input[required], select[required]');
    let isValid = true;
  
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        showError(field.id, "입력 필수 항목입니다.");
      } else {
        hideError(field.id);
      }
    });
  
    const pw = document.getElementById('pw');
    const pwConfirm = document.getElementById('pw-confirm');
    if (pw.value !== pwConfirm.value) {
      isValid = false;
      showError('pw-confirm', "비밀번호가 일치하지 않습니다.");
    } else {
      hideError('pw-confirm');
    }
  
    const birth = document.getElementById('birth');
    if (birth.value.length !== 8) {
      isValid = false;
      showError('birth', "올바른 생년월일을 입력하세요.");
    } else {
      hideError('birth');
    }
  
    if (isValid) {
      window.location.href = '../Join/join-finish.html';
    }
  }
  
  function showError(fieldId, message) {
    const errorDiv = document.getElementById(`${fieldId}-error`);
    if (errorDiv) {
      errorDiv.textContent = message;
      errorDiv.style.display = 'block';
    }
  }
  
  function hideError(fieldId) {
    const errorDiv = document.getElementById(`${fieldId}-error`);
    if (errorDiv) {
      errorDiv.style.display = 'none';
    }
  }

  const hintSelect = document.getElementById('hintDomain');
  const customHint = document.getElementById('customHint');
  if (hintSelect.value === '직접입력' && !customHint.value.trim()) {
      isValid = false;
      showError('customHint', "힌트를 입력하세요.");
  } else {
      hideError('customHint');
  }

function checkDuplicate(field) {
  // 실제로는 서버와 통신하여 중복 체크를 해야 합니다.
  showPopup("확인되었습니다.");
}

function showPopup(message) {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.textContent = message;
  popup.style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

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
        customInput.removeAttribute('required');
    }
}