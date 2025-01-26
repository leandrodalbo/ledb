import React from "react";
import { render, screen } from "@testing-library/react";

import PackageCard from './PackageCard'

describe("PackageCard Component", () => {
    it("should render a Package card item", () => {
        render(<PackageCard bgColor="#FFFFFF" icon="icon.svg" content="card-content" title="card-title" textColor="#E4E4E4" />);
        expect(screen.getByText("card-content")).toBeInTheDocument();
        expect(screen.getByText("card-title")).toBeInTheDocument();
    });

});