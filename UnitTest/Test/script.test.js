import { kiemTra_Rong, solveEquation } from '../Project/feature.js';
const expect = chai.expect;

describe('kiemTra_Rong bậc 1', () => {
  it('trả false khi a bỏ trống', () => {
    expect(kiemTra_Rong("", 1)).to.be.false;
  });
  it('trả false khi b bỏ trống', () => {
    expect(kiemTra_Rong(1, "")).to.be.false;
  });
  it('trả true khi a và b hợp lệ', () => {
    expect(kiemTra_Rong(1, 2)).to.be.true;
  });
});

describe('kiemTra_Rong bậc 2', () => {
  it('trả false khi a bỏ trống', () => {
    expect(kiemTra_Rong("", 1)).to.be.false;
  });
  it('trả false khi b bỏ trống', () => {
    expect(kiemTra_Rong(1, "")).to.be.false;
  });
  it('trả false khi c bỏ trống', () => {
    expect(kiemTra_Rong(1, 1, "")).to.be.false;
  });
  it('trả true khi tất cả hệ số không rỗng', () => 
    { expect(kiemTra_Rong(1, 2, 3)).to.be.true; });
});

describe('solveEquation(a, b, c)', () => {
  it('trả false khi a không phải số', () => {
    expect(solveEquation("@#$%", 1, 2)).to.equal("Lỗi: Hệ số phải là số");
  });

  it('trả false khi b không phải số', () => {
    expect(solveEquation(1, "b", 2)).to.equal("Lỗi: Hệ số phải là số");
  });

  it('trả false khi c không phải số', () => {
    expect(solveEquation(1, 1, "c")).to.equal("Lỗi: Hệ số phải là số");
  });

  it('trả true khi tất cả là số', () => {
    expect(solveEquation(1, 2, 3)).to.be.true;
  });
});
