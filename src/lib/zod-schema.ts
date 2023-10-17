import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Enter valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters long.'),
});

export const registerSchema = loginSchema
  .extend({
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword'],
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
