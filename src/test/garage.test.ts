import Server from "../index";
import express, { Application, NextFunction } from "express";
import request from "supertest";

const app: Application = express();

beforeAll(() => {
  const server: Server = new Server(app);
});

afterAll(async () => {

});

describe("test getAllAPIGarages", () => {
  test("getAllAPIGarages should return 5 records", async () => {
    const res = await request(app).get("/api/garage").expect("Content-Type", /json/).expect(200);;
    expect(res.body.data.length).toBe(5);
  });

  test("getAllGarages should return first record with_id = 1", async () => {
    const res = await request(app).get("/api/garage/getAllGarages").expect("Content-Type", /json/).expect(200);;
    const _id = res.body[0]._id;
    expect(_id).toBe("1");
  });

  test("createGarage should return _id = 10", async () => {
    const garage =
    {
      "_id": "10",
      "mispar_mosah": "43",
      "shem_mosah": "קבוץ שלום",
      "cod_sug_mosah": 6,
      "sug_mosah": "מוסך מורשה",
      "ktovet": "ד.נ. שלמה",
      "yishuv": "ניצמי אור",
      "telephone": "08-44666675",
      "mikud": 85515,
      "cod_miktzoa": 10,
      "miktzoa": "מכונאות רכב בנזין",
      "menahel_miktzoa": "בן יוסף יאיר",
      "rasham_havarot": 57000299,
      "TESTIME": ""
    };

    const res = await request(app).post("/api/garage").send(garage).expect("Content-Type", /json/).expect(201);;
    const body = res.body;
    //console.log("body.data=", body.data);
    expect(body.data._id).toBe("10");
  });

  test("create All Garages should return 'create OK'", async () => {
    const res = await request(app).post("/api/garage/create").expect("Content-Type", /json/).expect(201);;
    const body = res.body;
    //console.log("body.message=", body.message);
    expect(body.message).toEqual("create OK");
  });
});  