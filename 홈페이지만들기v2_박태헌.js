const playList = [
  "아지캉 - 구르는 바위, 너에게 아침이 내린다",
  "요아소비 - 무대에 서서",
  "타카하시 유우 - 무지개",
  "마시따밴드 - 돌멩이",
  "백넘버 - 높은 산의 하나코씨"
];

const cheerBtn = document.getElementById("cheerBtn");
const cheerMessage = document.getElementById("cheerMessage");

cheerBtn.addEventListener("click", () => {
  const idx = Math.floor(Math.random() * playList.length);
  cheerMessage.textContent = playList[idx];
});

// 관리자 로그인 기능
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const adminIdInput = document.getElementById("adminId");
const adminPwdInput = document.getElementById("adminPwd");
const loginMessage = document.getElementById("loginMessage");
const adminProjects = document.getElementById("admin-projects");

const semiProjectRow = document.getElementById("semiProjectRow");
const finalProjectRow = document.getElementById("finalProjectRow");

const saveProjectsBtn = document.getElementById("saveProjectsBtn");

const openLoginBtn = document.getElementById("openLoginBtn");
const loginModal = document.getElementById("loginModal");
const closeLoginBtn = document.getElementById("closeLoginBtn");

// 관리자 메시지 보기 관련 요소
const adminMessages = document.getElementById("adminMessages");
const messageTableBody = document.getElementById("messageTableBody");

const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactMessage = document.getElementById("contactMessage");
const contactSubmit = document.getElementById("contactSubmit");

// 메시지 저장 배열
const messageList = [];

function showAdminMessages() {
  messageTableBody.innerHTML = "";
  messageList.forEach((msg) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${msg.name}</td>
      <td>${msg.email}</td>
      <td>${msg.message}</td>
    `;
    messageTableBody.appendChild(tr);
  });
}

// 간단한 관리자 아이디, 비번(하드코딩)
const ADMIN_ID = "admin";
const ADMIN_PWD = "1234";

loginBtn.addEventListener("click", () => {
  const id = adminIdInput.value.trim();
  const pwd = adminPwdInput.value.trim();

  if (id === ADMIN_ID && pwd === ADMIN_PWD) {
    loginMessage.textContent = "로그인 성공!";
    loginMessage.style.color = "green";

    adminProjects.style.display = "block";
    logoutBtn.style.display = "inline-block";
    loginBtn.style.display = "none";

    adminMessages.style.display = "block";  // 메시지 테이블 보이기
    showAdminMessages();                    // 메시지 출력
  } else {
    loginMessage.textContent = "아이디 또는 비밀번호가 틀렸습니다.";
    loginMessage.style.color = "red";
  }
});

logoutBtn.addEventListener("click", () => {
  loginMessage.textContent = "";
  adminProjects.style.display = "none";
  adminMessages.style.display = "none";
  logoutBtn.style.display = "none";
  loginBtn.style.display = "inline-block";

  // 입력 폼 초기화
  adminIdInput.value = "";
  adminPwdInput.value = "";
});

// 프로젝트 정보 저장 (테이블 내용 변경)
saveProjectsBtn.addEventListener("click", () => {
  const semiName = document.getElementById("semiProjectName").value.trim();
  const semiDesc = document.getElementById("semiProjectDesc").value.trim();
  const semiTech = document.getElementById("semiProjectTech").value.trim();

  const finalName = document.getElementById("finalProjectName").value.trim();
  const finalDesc = document.getElementById("finalProjectDesc").value.trim();
  const finalTech = document.getElementById("finalProjectTech").value.trim();

  if (!semiName || !semiDesc || !semiTech || !finalName || !finalDesc || !finalTech) {
    alert("모든 프로젝트 정보를 입력해 주세요.");
    return;
  }

  semiProjectRow.innerHTML = `
    <td>${semiName}</td>
    <td>${semiDesc}</td>
    <td>${semiTech}</td>
  `;

  finalProjectRow.innerHTML = `
    <td>${finalName}</td>
    <td>${finalDesc}</td>
    <td>${finalTech}</td>
  `;

  alert("프로젝트 정보가 저장되었습니다.");
});

// 로그인 모달창 열고 닫기
openLoginBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});

closeLoginBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});

// 연락하기 메시지 전송
contactSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const name = contactName.value.trim();
  const email = contactEmail.value.trim();
  const message = contactMessage.value.trim();

  if (!name || !email || !message) {
    alert("모든 항목을 입력해주세요.");
    return;
  }

  messageList.push({ name, email, message });

  if (adminMessages.style.display === "block") {
    showAdminMessages();
  }

  contactName.value = "";
  contactEmail.value = "";
  contactMessage.value = "";

  alert("메시지가 성공적으로 전송되었습니다.");
});
