import { http, HttpResponse, delay } from 'msw';
import type { LoginFormData } from '../model/schema';

/**
 * MSW Handlers for the Login feature.
 * Used in Storybook and Vitest to simulate server responses.
 */
export const handlers = [
  http.post('/api/auth/login', async ({ request }) => {
    // cast json
    const data = (await request.json()) as LoginFormData;
    
    // sim network latency
    await delay(800);

    // logic simulation: check for valid credentials
    if (data?.email === "invalid@example.com" || data?.password === "wrongpassword") {
      return HttpResponse.json(
        { message: "Invalid credentials" }, 
        { status: 401 }
      );
    }

    // response
    return HttpResponse.json(
      { success: true, user: { email: data.email } }, 
      { status: 200 }
    );
  }),
];