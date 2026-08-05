import testimonialsData from './testimonials.json';
import { getLocaleFromAstro } from '@/utils/i18n';

export interface Testimonial {
	quote: string;
	author: string;
	role: string;
	company?: string;
}

export function getTestimonials(Astro: { url: URL }): Testimonial[] {
	const locale = getLocaleFromAstro(Astro);
	return (testimonialsData as any)[locale] || [];
}
