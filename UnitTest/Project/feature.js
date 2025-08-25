// Hàm giải phương trình
export function giai_PhuongTrinh(a, b, c) {
  console.log(a, b, c);
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
    )} = 0, phương trình bậc nhất có nghiệm x = ${x.toFixed(2)}`;
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
    )} = 0, với hai nghiệm phân biệt x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(
      2
    )}`;
  }
}
// Hàm định dạng kết quả in ra màn hình
function formatQuadratic(a, b, c) {
  let parts = [];
  if (a != 0) {
    parts.push(Math.abs(a) == 1 ? (a > 0 ? "x²" : "-x²") : `${a}x²`);
    parts.push(b < 0 ? " - " : " + ");
  }
  parts.push(Math.abs(b) == 1 ? (b > 0 ? "x" : "-x") : `${b}x`);
  parts.push(`${c >= 0 ? "+" : "-"} ${Math.abs(c)}`);
  return parts.join(" ");
}

export const kiemTra_Rong = (a, b, c) => {
  return a != "" && b != "" && c != "";
};
