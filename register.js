window.onload = () => {
  const form = document.getElementById("normal-login");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("identity-info").value;
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;

    alert(`
    로그인 되었습니다.\n
    휴대폰 및 이메일: ${email}
    성명: ${name}
    사용자 이름: ${username}
    `);
    // window.location.replace("./feed.html");
    window.location.href = `./feed.html?id=${username}`;
  });
};
