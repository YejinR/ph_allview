document.addEventListener('DOMContentLoaded', function() {
    // 현재 년도를 가져옵니다.
    const currentYear = new Date().getFullYear();

    // select 요소들을 가져옵니다.
    const yearSelect = document.getElementById("year");
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("day");

    // select 요소들이 존재하는지 확인합니다.
    if (!yearSelect || !monthSelect || !daySelect) {
        console.error("One or more select elements not found");
        return;
    }

    // 년도 옵션을 생성합니다 (현재 년도부터 100년 전까지).
    for (let year = currentYear; year >= currentYear - 100; year--) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    // 월 옵션을 생성합니다.
    for (let month = 1; month <= 12; month++) {
        const option = document.createElement("option");
        option.value = month.toString().padStart(2, '0');
        option.textContent = month;
        monthSelect.appendChild(option);
    }

    // 일 옵션을 생성하는 함수입니다.
    function populateDays(month, year) {
        // 이전에 있던 옵션들을 모두 제거합니다.
        while (daySelect.firstChild) {
            daySelect.removeChild(daySelect.firstChild);
        }

        // 해당 월의 일 수를 계산합니다.
        let daysInMonth;
        if (month === 2) {
            // 윤년 계산
            daysInMonth = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
        } else if ([4, 6, 9, 11].includes(parseInt(month))) {
            daysInMonth = 30;
        } else {
            daysInMonth = 31;
        }

        // 일 옵션을 생성합니다.
        for (let day = 1; day <= daysInMonth; day++) {
            const option = document.createElement("option");
            option.value = day.toString().padStart(2, '0');
            option.textContent = day;
            daySelect.appendChild(option);
        }
    }

    // 초기 일 옵션을 생성합니다.
    populateDays(monthSelect.value, yearSelect.value);

    // 년도나 월이 변경될 때 일 옵션을 업데이트합니다.
    yearSelect.addEventListener("change", () => populateDays(monthSelect.value, yearSelect.value));
    monthSelect.addEventListener("change", () => populateDays(monthSelect.value, yearSelect.value));

    console.log("Date selector script loaded successfully");
});