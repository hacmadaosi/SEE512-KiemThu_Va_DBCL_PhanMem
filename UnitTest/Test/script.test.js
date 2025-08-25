import { kiemTra_Rong } from "../Project/feature.js";
const expect = chai.expect;

describe("function kiemTra_Rong(a, b, c)", () => {
  it("Trả về true khi dữ liệu truyền vào là [1, -10, 16]", () => {
    const result = kiemTra_Rong(1, -10, 16);
    expect(result).to.be.true;
  });
  it("Trả về false khi dữ liệu truyền vào là [1, '', 16]", () => {
    const result = kiemTra_Rong(1, "", 16);
    expect(result).to.be.false;
  });
});

describe("function TinhPhuongTrinh(a, b, c)", () => {});
