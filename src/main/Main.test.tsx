import React from "react";
import { render, screen } from "@testing-library/react";

import MainComponent from './Main'

describe("Main Component", () => {
    it("should render the main component", () => {
        render(<MainComponent />);
        expect(screen.getByTestId("main")).toBeInTheDocument();
    });

});