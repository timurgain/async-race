import { Button, ButtonKits } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it('should render a button with children', () => {
    const children = <p>Click me</p>
    render(<Button kit={ButtonKits.CLEAR}>{children}</Button>);
    
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
})
