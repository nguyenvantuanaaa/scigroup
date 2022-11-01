const nameInput = document.getElementsByClassName("name")[0];
const phoneInput = document.getElementsByClassName("phone")[0];
const emailInput = document.getElementsByClassName("email")[0];
const posiInput = document.getElementsByClassName("position")[0];
const fileInput = document.getElementsByClassName("file")[0];

// Create API
function createAPI(name, phone, email, position, cv, description) {
  var raw = `{\r\n \"name\": \"${name}\",\r\n \"phone\": \"${phone}\",\r\n \"email\": \"${email}\",\r\n \"position\": \"${position}\",\r\n \"cv\": \"${cv}\",\r\n \"description\": \"${description}\"\r\n }`;
  // console.log(raw);

  var requestOptions = {
    method: "POST",
    body: raw,
  };

  fetch("https://scigroup.com.vn/app/recruit/api/create", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

document.getElementById("submit").addEventListener("click", () => {
  const key = false;
  switch (key) {
    case nameInput.value !== "":
      modal("Bạn cần điền tên!");
      nameInput.style.border = "1px solid red";
      break;
    case phoneInput.value !== "":
      modal("Bạn cần điền số điện thoại!");
      nameInput.style.border = "1px solid #ccc";
      phoneInput.style.border = "1px solid red";
      break;
    case is_phonenumber(phoneInput.value):
      modal("Số điện thoại của bạn không đúng");
      break;
    case emailInput.value !== "":
      modal("Bạn cần điền email!");
      phoneInput.style.border = "1px solid #ccc";
      emailInput.style.border = "1px solid red";
      break;
    case posiInput.value !== "":
      modal("Bạn cần điền vị trí ứng tuyển!");
      emailInput.style.border = "1px solid #ccc";
      posiInput.style.border = "1px solid red";
      break;
    case fileInput.value !== "":
      modal("Bạn cần điền file đính kèm!");
      posiInput.style.border = "1px solid #ccc";
      fileInput.style.border = "1px solid red";
      break;
    case fileInput.value == "":
      fileInput.style.border = "1px solid #ccc";
    default:
      createAPI(
        nameInput.value,
        phoneInput.value,
        emailInput.value,
        posiInput.value,
        "https://facebook.com/huudinh",
        "Chưa phỏng vấn"
      );

      modal("Bạn đã gửi CV thành công <br> Chúng tôi sẽ liên lạc đến bạn");
      document.getElementById("form").reset();
      break;
  }
});

//modal
function modal(text) {
  html = `
<div class="modal" id="thongbao" style="display:block">
<div id="modal-bg" class="modal-bg"></div>
<div class="modal-box animate-top">
<div class="modal-header">
    <div id="modal-close" class="modal-close">×</div>
    <div class="modal-title">Thông báo</div>
</div>
<div class="modal-body">
    <p>${text}</p>
</div>
</div>
</div>
`;
  document.body.insertAdjacentHTML("afterend", html);
  const closeBg = document.getElementById("modal-bg");
  const close = document.getElementById("modal-close");
  closeBg.addEventListener("click", () => {
    document.getElementById("thongbao").style.display = "none";
  });
  close.addEventListener("click", () => {
    document.getElementById("thongbao").style.display = "none";
  });
}

//checkphone
function is_phonenumber(phonenumber) {
  let phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (phonenumber.match(phoneno)) {
    return true;
  } else {
    return false;
  }
}

// Read API
const getAPI = async () => {
  const response = await fetch("https://scigroup.com.vn/app/recruit/api/read");
  const data = await response.json();
  console.log(data.body);
};
getAPI();
