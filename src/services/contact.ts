export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  error?: string;
}

const API_BASE = import.meta.env.PUBLIC_API_URL || '/api';
const API_ENDPOINT = `${API_BASE}/contact/messages?db=portfolio`;

export function validateContactForm(data: ContactFormData): string | null {
  if (!data.name || data.name.trim().length === 0) {
    return 'Name is required';
  }
  if (!data.email || data.email.trim().length === 0) {
    return 'Email is required';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return 'Invalid email format';
  }
  if (!data.message || data.message.trim().length === 0) {
    return 'Message is required';
  }
  return null;
}

export async function sendContactForm(data: ContactFormData): Promise<ContactResponse> {
  const validationError = validateContactForm(data);
  if (validationError) {
    return { success: false, error: validationError };
  }

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message.trim(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
