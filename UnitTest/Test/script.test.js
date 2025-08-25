import {
  kiemTra_Rong,
  kiemTra_KieuSo,
  giai_PhuongTrinh,
} from "../Project/feature.js";
const expect = chai.expect;

describe("Test module kiemTra_Rong(a, b, c)", () => {
  it("Trả về true với a=1, b=6, c=7", () => {
    expect(kiemTra_Rong(1, 6, 7)).to.be.true;
  });

  it("Trả về false với a=1, b='', c=7", () => {
    expect(kiemTra_Rong(1, "", 7)).to.be.false;
  });
});

describe("Test module kiemTra_KieuSo(a, b, c)", () => {
  it("Trả về true với a=1, b=6, c=7", () => {
    expect(kiemTra_KieuSo(1, 6, 7)).to.be.true;
  });

  it("Trả về false với a=1, b='a', c=7", () => {
    expect(kiemTra_KieuSo(1, "a", 7)).to.be.false;
  });
});

describe("Test module giai_PhuongTrinh(a, b, c)", () => {
  it("Với a=1, b=-10, c=16 → phương trình bậc 2, có nghiệm", () => {
    const result = giai_PhuongTrinh(1, -10, 16);
    expect(result).to.include(
      "x² - 10x + 16 = 0, với hai nghiệm phân biệt x₁ = 8.00, x₂ = 2.00"
    );
  });

  it("Với a=1, b=3, c=''-> nhập phải là kiểu số", () => {
    const result = giai_PhuongTrinh(1, 3, "a");
    expect(result).to.equal("Dữ liệu nhập vào phải là kiểu số");
  });

  it('Với a="", b=3, c=1 → dữ liệu nhập vào không được bỏ trống', () => {
    const result = giai_PhuongTrinh("", 3, 1);
    expect(result).to.equal("Dữ liệu nhập vào không được bỏ trống");
  });
});
