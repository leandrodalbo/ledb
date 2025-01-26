import React from "react";
import { render, screen } from "@testing-library/react";

import HomeItem from './HomeItem'

describe("HomeItem Component", () => {
    it("should render a home card item", () => {
        render(<HomeItem icon="icon" text="card-text" title="card-tile" />);

        expect(screen.getByText("card-text")).toBeInTheDocument();
    });

});