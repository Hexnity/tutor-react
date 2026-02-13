import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { AccountSettingsCard } from "./AccountSettingsCard";

describe("AccountSettingsCard", () => {
    test("renders account settings sections", () => {
        render(<AccountSettingsCard />);

        expect(screen.getByText("Account Settings")).toBeInTheDocument();
        expect(screen.getByText("General")).toBeInTheDocument();
        expect(screen.getByText("Timezone")).toBeInTheDocument();
        expect(screen.getByText("Language")).toBeInTheDocument();
        expect(screen.getByText("Notifications")).toBeInTheDocument();
    });
});
