import request from "supertest";
import { MongoHelper } from "../../infra/db/mongodb/helpers/mongo-helper";
import app from "../config/app";

describe("Login Routes", () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });
  afterAll(async () => {
    await MongoHelper.disconnect();
  });
  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection("accounts");
    await accountCollection.deleteMany({});
  });
  describe("POST /signup", () => {
    test("Should return an 200 on signup", async () => {
      await request(app)
        .post("/api/signup")
        .send({
          name: "John Doe",
          email: "json@email.com",
          password: "123456",
          passwordConfirmation: "123456",
        })
        .expect(200);
    });
  })
});
