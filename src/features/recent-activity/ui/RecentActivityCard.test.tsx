import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { RecentActivityCard } from "./RecentActivityCard";

describe("RecentActivityCard", () => {
    test("renders recent activities", () => {
        render(<RecentActivityCard />);

        expect(screen.getByText(/Recent Activity/i)).toBeInTheDocument();
        expect(screen.getByText(/Updated profile information/i)).toBeInTheDocument();
        expect(screen.getByText(/Changed password/i)).toBeInTheDocument();
    });
});
