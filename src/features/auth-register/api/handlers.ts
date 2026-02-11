import { http, HttpResponse, delay } from 'msw';
import type { RegisterFormData } from '../model/schema';

/**
 * MSW Handlers for the Register feature.
 * Used in Storybook and Vitest to simulate server responses.
 */
export const handlers = [
  http.post('/api/auth/register', async ({ request }) => {
    // cast json
    const data = (await request.json()) as RegisterFormData;
    
    // sim network latency
    await delay(800);

    // logic simulation: check for existing users
    if (data?.email === "exists@example.com") {
      return HttpResponse.json(
        { message: "User already exists" }, 
        { status: 400 }
      );
    }

    // response
    return HttpResponse.json(
      { success: true, user: { name: data.name, email: data.email } }, 
      { status: 201 }
    );
  }),
];