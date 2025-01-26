import React from "react";
import { render, screen } from "@testing-library/react";

import NavBar from './Navbar'

describe("NavBar Component", () => {
    it("should render the NavBar", () => {
        render(<NavBar />);

        expect(screen.getByText("Jungle-Logic Lab")).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Packages")).toBeInTheDocument();
        expect(screen.getByText("Contact")).toBeInTheDocument();
    });

});