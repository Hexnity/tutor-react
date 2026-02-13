import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { Profile } from "./Profile";

describe("Profile Page", () => {
    test("renders all profile sections", () => {
        render(<Profile />);

        expect(screen.getByText(/User Profile/i)).toBeInTheDocument();

        // Check if feature components are present
        expect(screen.getByText(/Alex Johnson/i)).toBeInTheDocument(); // from UserProfileCard
        expect(screen.getByText(/Account Settings/i)).toBeInTheDocument(); // from AccountSettingsCard
        expect(screen.getByText(/Recent Activity/i)).toBeInTheDocument(); // from RecentActivityCard
        expect(screen.getByText(/Permissions & Roles/i)).toBeInTheDocument(); // from PermissionsRolesCard
    });


});
