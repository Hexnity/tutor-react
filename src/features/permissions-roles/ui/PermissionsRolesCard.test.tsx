import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { PermissionsRolesCard } from "./PermissionsRolesCard";

describe("PermissionsRolesCard", () => {
    test("renders roles and permissions", () => {
        render(<PermissionsRolesCard />);

        expect(screen.getByText(/Permissions & Roles/i)).toBeInTheDocument();
        expect(screen.getByText(/Administrator/i)).toBeInTheDocument();
        expect(screen.getByText(/Data Analyst/i)).toBeInTheDocument();
        expect(screen.getByText(/Full Access/i)).toBeInTheDocument();
    });
});
