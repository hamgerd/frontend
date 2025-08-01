import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "../app/page";

describe("Home page", () => {
  it("renders without crashing", () => {
    render(<Home />);
    const paragraph = screen.getByText(/پلتفرم جامع برگزاری و مدیریت رویدادهای آموزشی/);
    expect(paragraph).toBeTruthy();
  });
});
