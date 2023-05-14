import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: z.object({
		link: z.string(),
		inProgress: z.boolean(),
		title: z.string(),
		avatar: z.any(),
		description: z.string(),
		tags: z.string(),
	}),
});

export const collections = {
	projects: projectsCollection,
};
