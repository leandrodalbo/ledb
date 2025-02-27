import React from "react";
import { render, screen } from "@testing-library/react";

import ServicesComponent from "./ServicesComponent";
import { services } from "../assets/services";

describe("Services Component", () => {
  it("should render the services component", () => {
    render(<ServicesComponent services={services} hText={"Services"} />);
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("s0Title")).toBeInTheDocument();
    expect(screen.getByText("s0Content")).toBeInTheDocument();
    expect(screen.getByText("s1Title")).toBeInTheDocument();
    expect(screen.getByText("s1Content")).toBeInTheDocument();
    expect(screen.getByText("s2Title")).toBeInTheDocument();
    expect(screen.getByText("s2Content")).toBeInTheDocument();
    expect(screen.getByText("s3Title")).toBeInTheDocument();
    expect(screen.getByText("s3Content")).toBeInTheDocument();
    expect(screen.getByText("s4Title")).toBeInTheDocument();
    expect(screen.getByText("s4Content")).toBeInTheDocument();
    expect(screen.getByText("s5Title")).toBeInTheDocument();
    expect(screen.getByText("s5Content")).toBeInTheDocument();
  });
});
