import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { LanguageDropdown } from "../src/components/dropdowns/language.dropdown";
import { LanguageProvider } from "../src/utils/context/language/language.provider";

const renderDropdown = () =>
  render(
    <LanguageProvider>
      <LanguageDropdown />
    </LanguageProvider>
  );

describe("LanguageDropdown", () => {
  it("changes the current language", async () => {
    const user = userEvent.setup();

    renderDropdown();

    const trigger = screen.getByRole("button");

    await user.click(trigger);

    const englishOption = screen.getByRole("button", {
      name: /English/i
    });

    await user.click(englishOption);

    expect(
      screen.getByRole("button", {
        name: /English/i
      })
    ).toBeInTheDocument();
  });

  it("shows the current language", () => {
    renderDropdown();

    expect(
      screen.getByRole("button", {
        name: /Español/i
      })
    ).toBeInTheDocument();
  });

  it("opens the list and changes language", async () => {
    const user = userEvent.setup();

    renderDropdown();

    const trigger = screen.getByRole("button");

    await user.click(trigger);

    expect(
      screen.getByRole("button", {
        name: /English/i
      })
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /English/i
      })
    );

    expect(
      screen.getByRole("button", {
        name: /English/i
      })
    ).toBeInTheDocument();
  });

  it("renders a flag class for each language", async () => {
    const user = userEvent.setup();

    const { container } = renderDropdown();

    const trigger = screen.getByRole("button");

    await user.click(trigger);

    expect(
      container.querySelector(".fi-es")
    ).toBeInTheDocument();

    expect(
      container.querySelector(".fi-gb")
    ).toBeInTheDocument();
  });
});