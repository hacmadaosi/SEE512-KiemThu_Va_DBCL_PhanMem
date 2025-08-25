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

  const _refreshInput = () => {
    lbe_Result.style.display = "none";
    inputA.value = "";
    inputB.value = "";
    inputC.value = "";
  };

  let list_History = [
    "x² - 10x + 16 = 0, với hai nghiệm phân biệt x₁ = 2, x₂ = 8",
    "x² - 6x - 40 = 0, với hai nghiệm phân biệt x₁ = -4, x₂ = -10",
    "x² - 8x + 16 = 0, với nghiệm kép x = 4",
    "x² + x + 1 = 0, phương trình vô nghiệm thực",
    "0x² + 0x = 0, phương trình có vô số nghiệm",
  ];

  btn_Submit.addEventListener("click", () => {
    lbe_Result.style.display = "block";
    history_title.style.color = "white";
    _addResultToArray(list_History, "adf");
    _refreshHistory();
    btn_Clear.style.display = "block";
  });

  btn_Refresh.addEventListener("click", () => {
    _refreshInput();
  });

  btn_Clear.addEventListener("click", () => {
    list_History = [];
    _refreshHistory();
    btn_Clear.style.display = "none";
    history_title.style.color = "transparent";
  });

  const _clearHistory = () => {
    ulHistory.innerHTML = "";
  };

  const _refreshHistory = () => {
    _clearHistory();
    list_History.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ulHistory.appendChild(li);
    });
  };
  const _addResultToArray = (arrX, value) => {
    arrX.push(value);
  };

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
});
