import experienceData from './experience.json';
import { getLocaleFromAstro } from '@/utils/i18n';

export interface ExperienceItem {
	company: string;
	role?: string;
	year?: number;
	date: string;
	description: string;
	projects: Array<{
		title: string;
		description: string;
	}>;
}

export function getExperience(Astro: { url: URL }): ExperienceItem[] {
	const locale = getLocaleFromAstro(Astro);
	return (experienceData as any)[locale] || [];
}
