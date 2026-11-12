// HTML의 id 속성으로 요소를 찾습니다.
const themeButton = document.querySelector("#theme-button");
const helloButton = document.querySelector("#hello-button");
const helloMessage = document.querySelector("#hello-message");
const year = document.querySelector("#year");

// 버튼을 누를 때마다 밝은 화면과 어두운 화면을 전환합니다.
themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  themeButton.textContent = isDark ? "라이트 모드" : "다크 모드";
  themeButton.setAttribute("aria-pressed", String(isDark));
});

// 인사말을 원하는 문장으로 바꿔 보세요.
const messages = [
  "반가워요! 제 첫 웹사이트에 오신 걸 환영합니다.",
  "오늘도 작은 배움 하나를 발견하는 하루가 되길 바라요.",
  "들러주셔서 고마워요. 다음에 또 만나요!"
];
let messageIndex = 0;

helloButton.addEventListener("click", () => {
  helloMessage.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
});

// 하단 연도를 현재 연도로 표시합니다.
year.textContent = new Date().getFullYear();
