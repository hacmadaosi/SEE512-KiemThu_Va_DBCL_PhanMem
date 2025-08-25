export function TinhPhuongTrinh(a, b, c) {
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
