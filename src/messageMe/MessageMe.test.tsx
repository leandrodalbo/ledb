import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import MessageMe from "./MessageMe";
import { MessageAssets, MessageData } from "../types";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const mockSendMessageService = vi.fn();

const assets: MessageAssets = {
  h2HeaderKey: "Contact Me",
  namePlh: "Name Placeholder",
  emailPlh: "Email Placeholder",
  msgPlh: "Message Placeholder",
  msgBtnSend: "Send",
  msgBtnOnLoading: "Sending...",
  messageSuccess: "Message sent",
  messageFailed: "Message Failed",
};

describe("MessageMe", () => {
  beforeEach(() => {
    mockSendMessageService.mockClear();
  });

  it("should render the form with correct placeholders and button", () => {
    render(
      <MessageMe assets={assets} sendMessageService={mockSendMessageService} />
    );

    expect(screen.getByPlaceholderText("Name Placeholder")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Email Placeholder")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Message Placeholder")
    ).toBeInTheDocument();
    expect(screen.getByText("Send")).toBeInTheDocument();
  });

  it("should update the state on changing inputs", () => {
    render(
      <MessageMe assets={assets} sendMessageService={mockSendMessageService} />
    );

    const nameInput = screen.getByPlaceholderText("Name Placeholder");
    const emailInput = screen.getByPlaceholderText("Email Placeholder");
    const messageInput = screen.getByPlaceholderText("Message Placeholder");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "Hello, Are you there?" },
    });

    expect(nameInput).toHaveValue("John Doe");
    expect(emailInput).toHaveValue("john@example.com");
    expect(messageInput).toHaveValue("Hello, Are you there?");
  });

  it("should submit a message and show the result", async () => {
    mockSendMessageService.mockResolvedValue(true);

    render(
      <MessageMe assets={assets} sendMessageService={mockSendMessageService} />
    );

    fireEvent.change(screen.getByPlaceholderText("Name Placeholder"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email Placeholder"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Message Placeholder"), {
      target: { value: "Hello" },
    });

    fireEvent.click(screen.getByText("Send"));

    expect(screen.getByText("Sending...")).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText("Message sent")).toBeInTheDocument()
    );

    expect(mockSendMessageService).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john@example.com",
      message: "Hello",
    });
  });

  it("should submite the message and show the error if it failed", async () => {
    mockSendMessageService.mockResolvedValue(false);

    render(
      <MessageMe assets={assets} sendMessageService={mockSendMessageService} />
    );

    fireEvent.change(screen.getByPlaceholderText("Name Placeholder"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email Placeholder"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Message Placeholder"), {
      target: { value: "Hello" },
    });

    fireEvent.click(screen.getByText("Send"));

    expect(screen.getByText("Sending...")).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText("Message Failed")).toBeInTheDocument()
    );

    expect(mockSendMessageService).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john@example.com",
      message: "Hello",
    });
  });
});
