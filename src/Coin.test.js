import {
    render,
    screen,
    waitForElementToBeRemoved,
  } from "@testing-library/react";
  import React from "react";
  import { Coin } from "./Coin"

  
const TestComponent = () => {
    const allCoins = Coin();
    if (!allCoins) return <pre data-testid="loading-state"></pre>;
    return <pre data-testid="output">{JSON.stringify({ allCoins })}</pre>;
  };

  describe("Coin", () => {
    it("should show loading state while loading and hide it when visible", async () => {
      render(<TestComponent />);
      expect(screen.getByTestId("loading-state")).toBeVisible();
      await waitForElementToBeRemoved(() => screen.getByTestId("loading-state"));
    });})