export interface QuoteFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  hasDesign?: string;
  features?: string[];
  description: string;
}

export interface QuoteResponse {
  success: boolean;
  error?: string;
}

const API_BASE = import.meta.env.PUBLIC_API_URL || '/api';
const API_ENDPOINT = `${API_BASE}/contact/quotes?db=portfolio`;

export function validateQuoteForm(data: QuoteFormData): string | null {
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
  if (!data.projectType || data.projectType.trim().length === 0) {
    return 'Project type is required';
  }
  if (!data.description || data.description.trim().length === 0) {
    return 'Description is required';
  }
  return null;
}

export async function sendQuoteForm(data: QuoteFormData): Promise<QuoteResponse> {
  const validationError = validateQuoteForm(data);
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
        phone: data.phone?.trim() || null,
        company: data.company?.trim() || null,
        projectType: data.projectType,
        budget: data.budget || null,
        timeline: data.timeline || null,
        hasDesign: data.hasDesign || null,
        features: data.features || [],
        description: data.description.trim(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send quote request');
    }

    return { success: true };
  } catch (error) {
    console.error('Quote form error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
