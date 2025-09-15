import { defineCollection, z } from "astro:content";

//z =>zod schema validation library

//Collection for work items
const works = defineCollection({
	schema: z.object({
		Company: z.string(),
		Description: z.string(),
		DevTools: z.array(z.string()),
		Role: z.array(z.string()),
		Highlights: z.array(z.string()),
		Date: z.string(),
		Image: z.string().optional(),
	}),
});

const projects = defineCollection({
	schema: z.object({
		Company: z.string(),
		Description: z.string(),
		DevTools: z.array(z.string()),
		Role: z.array(z.string()),
		Web: z.string().url().optional(),
		Name: z.string(),
	}),
});

export const collections = {
	works,
	projects,
};
