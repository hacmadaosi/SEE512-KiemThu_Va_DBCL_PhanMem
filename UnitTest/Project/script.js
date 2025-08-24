document.addEventListener("DOMContentLoaded", () => {
  // Xử lý sự kiện người dùng chọn phép tính
  let radioType = document.getElementsByName("type");
  let titleType = document.getElementById("container_type_title");
  let inputA = document.getElementById("input_a");
  let inputB = document.getElementById("input_b");
  let inputC = document.getElementById("input_c");
  let ulHistory = document.getElementById("history");
  let btn_Clear = document.getElementById("btn_clear");
  let history_title = document.getElementById("history_title");

  let list_History = [
    "x² - 10x + 16 = 0, với hai nghiệm phân biệt x₁ = 2, x₂ = 8",
    "x² - 6x - 40 = 0, với hai nghiệm phân biệt x₁ = -4, x₂ = -10",
    "x² - 8x + 16 = 0, với nghiệm kép x = 4",
    "x² + x + 1 = 0, phương trình vô nghiệm thực",
    "0x² + 0x = 0, phương trình có vô số nghiệm",
  ];
  btn_Clear.addEventListener("click", () => {
    ulHistory.innerHTML = "";
    btn_Clear.style.display = "none";
    history_title.style.color = "transparent";
  });
  function _refreshHistory() {}
  function _clearHistory() {}
  for (let ratio of radioType) {
    ratio.addEventListener("change", () => {
      // Lấy textContent của label kế input
      console.log("Title radio:");
      if (ratio.value == 1) {
        titleType.textContent = "Dạng ax + b = 0";
        inputC.style.display = "none";
        inputC.previousElementSibling.style.display = "none";
      } else {
        titleType.textContent = "Dạng ax² +bx +c = 0";
        inputC.style.display = "block";
        inputC.previousElementSibling.style.display = "block";
      }
    });
  }
});
