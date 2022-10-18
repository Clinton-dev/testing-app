import React from "react";
import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom"
import Header from './Header'

afterEach(cleanup)
it("renders", () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
})

it("inserts text in h1", () => {
    const { getByTestId, getByText } = render(<Header text="Hello!" />)
    expect(getByTestId('h1tag')).toHaveTextContent('Hello!')
    expect(getByText("Hello!")).toHaveClass("fancy-h1")
})