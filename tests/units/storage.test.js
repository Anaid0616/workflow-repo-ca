import { describe, it, expect, beforeEach } from "vitest";
import { saveToken, getToken } from "../../js/utils/storage";

describe("Storage functions", () => {
  beforeEach(() => {
    // Rensa localStorage innan varje test
    localStorage.clear();
  });

  it("saves the token to storage", () => {
    const testToken = "test-token";
    saveToken(testToken);
    expect(localStorage.getItem("token")).toBe(JSON.stringify(testToken));
  });

  it("retrieves the token from storage", () => {
    localStorage.setItem("token", JSON.stringify("test-token"));
    const retrievedToken = getToken();
    expect(retrievedToken).toBe("test-token");
  });

  it("returns null when no token exists", () => {
    const token = getToken();
    expect(token).toBeNull();
  });
});
