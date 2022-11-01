const nameInput = document.getElementsByClassName("name")[0];
const phoneInput = document.getElementsByClassName("phone")[0];
const emailInput = document.getElementsByClassName("email")[0];
const posiInput = document.getElementsByClassName("position")[0];
const fileInput = document.getElementsByClassName("file")[0];

document.getElementById("submit").addEventListener("click", () => {
  const key = false;
  switch (key) {
    case nameInput.value !== "":
      modal("Bạn cần điền tên!");
      break;
    case phoneInput.value !== "":
      modal("Bạn cần điền số điện thoại!");
      break;
    case is_phonenumber(phoneInput.value):
      modal("Số điện thoại của bạn không đúng");
      break;
    case emailInput.value !== "":
      modal("Bạn cần điền email!");
      break;
    case posiInput.value !== "":
      modal("Bạn cần điền vị trí ứng tuyển!");
      break;
    case fileInput.value !== "":
      modal("Bạn cần điền file đính kèm!");
      break;
    default:
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
