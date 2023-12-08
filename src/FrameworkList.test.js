import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";
import FrameworkList from "./FrameworkList";

describe("Rendering the list with props", () => {
  it("Should render No data when no data propped", () => {
    render(<FrameworkList />);
    expect(screen.getByText("No data !")).toBeInTheDocument;
  });
  it("Should render list item correctly", () => {
    const dummyData = [
      { id: 1, item: "c" },
      { id: 2, item: "c#" },
      { id: 3, item: "c++" },
    ];
    render(<FrameworkList frameworks={dummyData} />);
    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((ele) => ele.textContent);
    const dummyItems = dummyData.map((ele) => ele.item);
    expect(frameworkItems).toEqual(dummyItems);
    expect(screen.queryByText("No data !")).toBeNull();
  });
});
