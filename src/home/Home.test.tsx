import React from "react";
import { render, screen } from "@testing-library/react";
import { homedata } from "../assets/homedata"

import Home from './Home'

describe("Home Component", () => {
    it("should render the Home component", () => {
        render(<Home assets={homedata} />);
        expect(screen.getByText(homedata.h1Header)).toBeInTheDocument();
        expect(screen.getByText(homedata.ptext)).toBeInTheDocument();
        expect(screen.getByTestId("cards")).toBeInTheDocument();
    });

});