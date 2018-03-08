const expect = chai.expect

describe('Coordinates', function () {
  it('should equal null', function () {
    expect(localStorage.getItem("Coordinates")).to.equal(null);
  });
});
describe('contactFunc', function () {
  it('is a function', function () {
    expect(contactFunc).to.be.a('function');
  });
});
describe('contactClick', function () {
  it('is a function', function () {
    expect(contactClick).to.be.a('function');
  });
});
describe('commentSubmit', function () {
  it('is a function', function () {
    expect(commentSubmit).to.be.a('function');
  });
});
describe('hideMobileBtn', function () {
  it('is a function', function () {
    expect(hideMobileBtn).to.be.a('function');
  });
});
describe('hideMobileBtn', function () {
  it('is a function', function () {
    expect(hideMobileBtn).to.be.a('function');
  });
});
describe('mobileSearch', function () {
  it('is a function', function () {
    expect(mobileSearch).to.be.a('function');
  });
});
describe('newSearchClick', function () {
  it('is a function', function () {
    expect(newSearchClick).to.be.a('function');
  });
});
describe('loginSubmit', function () {
  it('is a function', function () {
    expect(loginSubmit).to.be.a('function');
  });
});
