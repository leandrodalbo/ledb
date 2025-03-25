import { vi } from "vitest";
import axios from "axios";
import sendMessage from "./SendMessageService";
import { MessageData } from "../types";

const messageData: MessageData = {
  name: "John Doe",
  email: "john.doe@example.com",
  message: "Hello, this is a test message.",
};

vi.mock("axios");

describe("sendMessage function", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should successfully send a message", async () => {
    vi.mocked(axios.post).mockResolvedValueOnce({ status: 200 });

    const result = await sendMessage(messageData);

    expect(result).toBe(true);
  });

  it("should get a false value for http error codes", async () => {
    vi.mocked(axios.post).mockResolvedValueOnce({ status: 500 });

    const result = await sendMessage(messageData);

    console.log(result);
    expect(result).toBe(false);
  });

  it("should return false if we catch an exception", async () => {
    vi.mocked(axios.post).mockRejectedValueOnce(new Error("Network Error"));

    const result = await sendMessage(messageData);

    expect(result).toBe(false);
  });
});
