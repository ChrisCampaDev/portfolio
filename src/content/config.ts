import { defineCollection, z } from "astro:content";

//z =>zod schema validation library

//Collection for work items
const works = defineCollection({
	schema: z.object({
		Company: z.string(),
		Company_en: z.string().optional(),
		Description: z.string(),
		Description_en: z.string().optional(),
		DevTools: z.array(z.string()),
		Role: z.array(z.string()),
		Role_en: z.array(z.string()).optional(),
		Highlights: z.array(z.string()),
		Highlights_en: z.array(z.string()).optional(),
		Date: z.string(),
		Image: z.string().optional(),
	}),
});

const projects = defineCollection({
	schema: z.object({
		Company: z.string(),
		Company_en: z.string().optional(),
		Description: z.string(),
		Description_en: z.string().optional(),
		DevTools: z.array(z.string()),
		Role: z.array(z.string()),
		Role_en: z.array(z.string()).optional(),
		Web: z.string().url().optional(),
		Name: z.string(),
		Name_en: z.string().optional(),
	}),
});

export const collections = {
	works,
	projects,
};
