import React from "react";
import { render, screen } from "@testing-library/react";
import { homedata } from "../assets/homedata"

import PackageComponent from './PackageComponent'
import { packages, packagesHeader } from '../assets/packages'

describe("PackageComponent Component", () => {
    it("should render the Package component", () => {
        render(<PackageComponent packages={packages} hText={packagesHeader} />);
        expect(screen.getByText(packagesHeader)).toBeInTheDocument();
        expect(screen.getByTestId("packages")).toBeInTheDocument();
    });

});