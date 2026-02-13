import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { UserProfileCard } from "./UserProfileCard";

describe("UserProfileCard", () => {
    test("renders user profile information", () => {
        render(<UserProfileCard />);

        expect(screen.getByText(/Alex Johnson/i)).toBeInTheDocument();
        expect(screen.getByText(/Senior Admin & Data Analyst/i)).toBeInTheDocument();
        expect(screen.getByText(/alex.johnson@example.com/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Edit Profile/i })).toBeInTheDocument();
    });
});
