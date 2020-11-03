let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();
chai.use(chaiHttp);
const expect = chai.expect();

const data = {
  data: "JOHN0000MICHAEL0009994567",
};
describe("Parse", () => {
  /*
   * Test the /api/v1/parse
   */
  describe("/POST V1 Parse", () => {
    it("it should give an object with statusCode and data", (done) => {
      chai
        .request(server)
        .post("/api/v1/parse")
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("statusCode").eql(200);
          res.body.should.have.property("data");
          done();
        });
    });
  });

  /*
   * Test the /api/v1/parse
   */
  describe("/POST V2 Parse", () => {
    it("it should give an object with statusCode and data", (done) => {
      chai
        .request(server)
        .post("/api/v2/parse")
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("statusCode").eql(200);
          res.body.should.have.property("data");
          done();
        });
    });
  });
});
