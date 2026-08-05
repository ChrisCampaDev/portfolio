import educationData from './education.json';
import { getLocaleFromAstro } from '@/utils/i18n';

export interface EducationItem {
	institution: string;
	degree: string;
	date: string;
	description?: string;
}

export function getEducation(Astro: { url: URL }): EducationItem[] {
	const locale = getLocaleFromAstro(Astro);
	return (educationData as any)[locale] || [];
}
