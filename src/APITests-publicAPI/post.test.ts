import request from 'supertest';
describe('User Registration', () => {
it('should register a new user', async () => {
    const userData = {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    };

    const response = await request("https://reqres.in")
      .post("/api/register")
      .send(userData)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
console.log(response.body);
   // Validate that a token is present in the response
       expect(response.body.token).toBeDefined();

       // Validate that a token is present in the response
           expect(response.body.id).toBeDefined();


    // Validate that the 'id' is an integer
    expect(Number.isInteger(response.body.id)).toBe(true);
  });

});
