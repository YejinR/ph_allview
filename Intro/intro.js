// 로그인 및 회원가입 버튼 선택
const loginButton = document.querySelector(".login-btn");
const joinButton = document.querySelector(".join-btn");

// 로그인 버튼 클릭 시 login 페이지로 이동
loginButton.addEventListener("click", () => {
  window.location.href = "/Login&Password/login.html"; // login 페이지 경로
});

// 회원가입 버튼 클릭 시 join 페이지로 이동
joinButton.addEventListener("click", () => {
  window.location.href = "/Join/join-1.html"; // join 페이지 경로
});
