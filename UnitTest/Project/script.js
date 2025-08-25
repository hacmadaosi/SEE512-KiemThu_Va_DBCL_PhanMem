import { giai_PhuongTrinh } from "./feature.js";

let _controllerType = 1;

document.addEventListener("DOMContentLoaded", () => {
  // Khai báo các biến đối tượng giao diện
  let inputA = document.getElementById("input_a");
  let inputB = document.getElementById("input_b");
  let inputC = document.getElementById("input_c");

  let radioType = document.getElementsByName("type");
  let titleType = document.getElementById("container_type_title");
  let ulHistory = document.getElementById("history");
  let history_title = document.getElementById("history_title");

  let btn_Clear = document.getElementById("btn_clear");
  let btn_Refresh = document.getElementById("btn_refresh");
  let btn_Submit = document.getElementById("btn_submit");
  let lbe_Result = document.getElementById("result");

  let _controllerType = 1;
  let list_History = [];

  /* Thiết lập mặc định */
  history_title.style.color = "transparent"; // ẩn tiêu đề lịch sử
  btn_Clear.style.display = "none"; // ẩn nút xóa tất cả
  // Kiểm tra ratio input người dùng chọn - thay đổi giao diện

  for (let ratio of radioType) {
    ratio.addEventListener("change", () => {
      if (ratio.value == 1) {
        _controllerType = 1;
      } else {
        _controllerType = 2;
      }
      titleType.textContent =
        _controllerType == 1 ? "Dạng ax + b = 0" : "Dạng ax² +bx +c = 0";
      inputC.style.display = _controllerType == 1 ? "none" : "block";
      inputC.previousElementSibling.style.display =
        _controllerType == 1 ? "none" : "block";
    });
  }

  /* Xử lý sự kiện trên giao diện */
  // Xử lý sự kiện người dùng nhập nút tính
  btn_Submit.addEventListener("click", () => {
    lbe_Result.style.display = "block";
    history_title.style.color = "white";
    let result =
      _controllerType == 1
        ? giai_PhuongTrinh(0, inputA.value, inputB.value)
        : giai_PhuongTrinh(inputA.value, inputB.value, inputC.value);
    _addResultToArray(list_History, result);
    lbe_Result.textContent = "Kết quả: " + result;
    _refreshHistory();

    btn_Clear.style.display = "block";
  });

  // Xử lý sự kiện người dùng nhấn làm mới
  btn_Refresh.addEventListener("click", () => {
    _refreshInput();
  });

  // Xử lý sự kiện người dùng nhấn xóa tất cả
  btn_Clear.addEventListener("click", () => {
    list_History = [];
    _refreshHistory();
    btn_Clear.style.display = "none";
    history_title.style.color = "transparent";
  });

  /* Arrow Function xử lý logic */
  // Xóa các phần tử trong lịch sử
  const _clearHistory = () => {
    ulHistory.innerHTML = "";
  };
  // Xóa dữ liệu đang tồn tại trên ô nhập liệu
  const _refreshInput = () => {
    lbe_Result.style.display = "none";
    inputA.value = "";
    inputB.value = "";
    inputC.value = "";
  };
  // Làm mới lịch sử tính toán
  const _refreshHistory = () => {
    _clearHistory();
    list_History.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ulHistory.appendChild(li);
    });
  };
  const _addResultToArray = (arrX, value) => {
    if (arrX.length > 5) {
      arrX.shift();
    }
    arrX.push(value);
  };
});
