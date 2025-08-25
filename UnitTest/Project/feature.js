export function kiemTra_Rong(a, b, c = null) {
  if (c === null) return a !== "" && b !== "";
  return a !== "" && b !== "" && c !== "";
}
export function kiemTra_KieuSo(a, b, c) {
  //return typeof a === "number" && typeof b === "number" && typeof c === "number";
  return !isNaN(a) && !isNaN(b) && !isNaN(c);
}
export function giai_PhuongTrinh(a, b, c) {
  
  if (!kiemTra_Rong(a, b, c)) 
    return "Dữ liệu nhập vào không được bỏ trống";
  // Bởi vì khi kiểm tra số từ người nhập á là nó mặc định string nên phải đổi về số mới kiểm tra được
  // đổi sau khi xác nhận các giá trị không được rỗng ok chưa
  a = Number(a);
  b = Number(b);
  c = Number(c);
  if (!kiemTra_KieuSo(a, b, c))
    return "Dữ liệu nhập vào phải là kiểu số";
  else{
    if (a == 0 && b == 0 && c == 0) {
    return `${formatQuadratic(a, b, c)} = 0, phương trình có vô số nghiệm`;
  } else if (a == 0 && b == 0 && c != 0) {
    return `${formatQuadratic(a, b, c)} = 0, phương trình vô nghiệm`;
  } else if (a === 0) {
    // PT bậc nhất: bx + c = 0
    let x = -c / b;
    return `${formatQuadratic(
      a,
      b,
      c
    )} = 0, phương trình bậc nhất có nghiệm x = ${x}`;
  }
  // PT bậc 2: ax² + bx + c = 0
  let delta = b * b - 4 * a * c;
  if (delta < 0) {
    return `${formatQuadratic(a, b, c)} = 0, phương trình vô nghiệm thực`;
  } else if (delta === 0) {
    let x = -b / (2 * a);
    return `${formatQuadratic(a, b, c)} = 0, với nghiệm kép x = ${x}`;
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `${formatQuadratic(
      a,
      b,
      c
    )} = 0, với hai nghiệm phân biệt x₁ = ${x1}, x₂ = ${x2}`;
  }
  }
}

export function formatQuadratic(a, b, c) {
  let parts = [];

  if (a != 0) {
    parts.push(a == 1 ? "x²" : a == -1 ? "-x²" : `${a}x²`);
  }

  if (b != 0) {
    let sign = b > 0 ? "+" : "-";
    let value = Math.abs(b) == 1 ? "x" : `${Math.abs(b)}x`;
    parts.push(`${sign} ${value}`);
  }

  if (c != 0) {
    let sign = c > 0 ? "+" : "-";
    parts.push(`${sign} ${Math.abs(c)}`);
  }

  if (parts.length == 0) return "0";

  return parts.join(" ");
}
