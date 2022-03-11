import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it("should not break when rendering component", async () => {
    render(<App />);
    expect(screen.getByTestId("main")).toBeVisible();
    await waitForElementToBeRemoved(screen.queryByTestId("loading-state"));
  });
});