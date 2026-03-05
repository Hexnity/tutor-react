import { render, screen, waitFor } from "@testing-library/react";
import { expect, test, describe, vi } from "vitest";
import { UserProfileCard } from "./UserProfileCard";
import * as handlers from "../api/handlers";

const mockProfile = {
    id: "1",
    full_name: "Alex Johnson",
    mobile: "+1 (555) 123-4567",
    bio: "Experienced professional",
    avatar_url: "https://example.com/avatar.png",
    website: "https://example.com",
    updated_at: new Date().toISOString(),
};

describe("UserProfileCard", () => {
    test("renders user profile information", async () => {
        vi.spyOn(handlers, "getUserProfile").mockResolvedValue(mockProfile);

        render(<UserProfileCard />);



        await waitFor(() => {
            expect(screen.getByText(/Alex Johnson/i)).toBeInTheDocument();
            expect(screen.getByText(/Experienced professional/i)).toBeInTheDocument();
            expect(screen.getByText(/\+1 \(555\) 123-4567/i)).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /Edit Profile/i })).toBeInTheDocument();
        });
    });
});
