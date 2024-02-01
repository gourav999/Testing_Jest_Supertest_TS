import request from 'supertest';


describe('Test API', () => {
  it('should return 200 OK', async () => {
    const response = await request("https://reqres.in").get("/api/users?page=1");
    expect(response.status).toBe(200);
  });
});
