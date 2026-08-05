import profileData from './profile.json';
import { getLocaleFromAstro } from '@/utils/i18n';

export interface Profile {
	name: string;
	role: string;
	tagline: string;
	about: string;
	availability: string;
	status: string;
	stack: string[];
}

export interface ContactInfo {
	email: string;
	phone: string;
	whatsapp: string;
	github: string;
	linkedin: string;
	location: string;
	cv: string;
}

export function getProfile(Astro: { url: URL }): Profile {
	const locale = getLocaleFromAstro(Astro);
	return (profileData as any)[locale] || (profileData as any).es;
}

export function getContact(): ContactInfo {
	return (profileData as any).contact;
}
