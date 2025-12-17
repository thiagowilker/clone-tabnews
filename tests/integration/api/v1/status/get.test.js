import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toBe(200);
});

test("GET to /api/v1/status should return correctly formatted response body", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  expect(responseBody).toEqual({
    updated_at: new Date(responseBody.updated_at).toISOString(),
    dependencies: {
      database: {
        version: "16.0",
        max_connections: 100,
        open_connections: 1,
      },
    },
  });
});
