import React from "react";
import { render, screen } from "@testing-library/react";
import { contacs } from '../assets/contact'
import ContactComponent from './ContactComponent'

describe("Contact Component", () => {
    it("should render the Contact component ", () => {
        render(<ContactComponent contacts={contacs} />);
        expect(screen.getByTestId(contacs[0].url)).toBeInTheDocument();
        expect(screen.getByTestId(contacs[1].url)).toBeInTheDocument();
        expect(screen.getByTestId(contacs[2].url)).toBeInTheDocument();
    });

});