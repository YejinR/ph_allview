// 번역 데이터
const translations = {
  kor: {
    title: "언어 설정 페이지",
    setting: "설정",
    myPage: "마이 페이지",
    language: "언어",
    display: "디스플레이",
    changeLanguage: "올뷰 내에서 사용되는 언어를 변경합니다.",
  },
  eng: {
    title: "Language Settings Page",
    setting: "Settings",
    myPage: "My Page",
    language: "Language",
    display: "Display",
    changeLanguage: "Change the language used in AllView.",
  },
  chi: {
    title: "语言设置页面",
    setting: "设置",
    myPage: "我的页面",
    language: "语言",
    display: "显示",
    changeLanguage: "更改AllView中使用的语言。",
  },
  jap: {
    title: "言語設定ページ",
    setting: "設定",
    myPage: "マイページ",
    language: "言語",
    display: "ディスプレイ",
    changeLanguage: "AllViewで使用する言語を変更します。",
  },
  rus: {
    title: "Страница настроек языка",
    setting: "Настройки",
    myPage: "Моя страница",
    language: "Язык",
    display: "Дисплей",
    changeLanguage: "Изменить язык, используемый в AllView.",
  }
};

// 언어 변경 함수
function changeLanguage() {
  const selectedLang = document.querySelector('.lang select').value; // 선택된 언어 값 가져오기

  // 번역된 텍스트를 각 요소에 적용
  document.title = translations[selectedLang].title;
  document.querySelector('.header a img').alt = translations[selectedLang].title;
  document.querySelector('.menu li:nth-child(1) a').textContent = translations[selectedLang].myPage;
  document.querySelector('.menu li:nth-child(2) a').textContent = translations[selectedLang].language;
  document.querySelector('.menu li:nth-child(3) a').textContent = translations[selectedLang].display;
  document.querySelector('.content h1').textContent = translations[selectedLang].language;
  document.querySelector('.lang p').textContent = translations[selectedLang].changeLanguage;
}

// 초기 언어 설정 및 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', function() {
  // 페이지가 로드될 때 초기 언어 설정
  changeLanguage();

  // 언어 선택 시 텍스트 변경
  document.querySelector('.lang select').addEventListener('change', changeLanguage);
});
