import React from "react";
import { render, screen } from "@testing-library/react";
import { navItems } from "../assets/navigation";

import NavBar from "./Navbar";

describe("NavBar Component", () => {
  it("should render the NavBar", () => {
    render(<NavBar items={navItems} />);

    expect(screen.getByText("LEDB")).toBeInTheDocument();
    expect(screen.getByText("navhome")).toBeInTheDocument();
    expect(screen.getByText("navServices")).toBeInTheDocument();
    expect(screen.getByText("navContact")).toBeInTheDocument();
  });
});
