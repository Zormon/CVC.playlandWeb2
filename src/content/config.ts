import { z, defineCollection } from 'astro:content';
import { ColorSchema } from '@src/types.d';

const eventos = defineCollection({
  type: 'content',
  schema: z.object({

      title: z.string(),
      link: z.string().url().optional(),
      location: z.string(),
      geo: z.object({
        lat: z.number(),
        lng: z.number(),
      }),
      date: z.object({
        from: z.date(),
        to: z.date(),
      }),
      color: ColorSchema,
      
    }),
 });


export const collections = { eventos };