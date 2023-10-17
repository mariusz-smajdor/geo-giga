import { z } from 'zod';

const emailSchema = z.string().trim().email('Enter valid email.');
const loginPasswordSchema = z.string().trim();
const registerPasswordSchema = loginPasswordSchema
  .min(8, 'Password must be at least 8 characters long.')
  .regex(/[a-z]/, {
    message: 'Password must contain at least one lowercase letter.',
  })
  .regex(/[A-Z]/, {
    message: 'Password must contain at least one uppercase letter.',
  })
  .regex(/\d/, {
    message: 'Password must contain at least one number.',
  })
  .regex(/[@$!%*?&]/, {
    message: 'Password must contain at least one special character.',
  });

export const loginSchema = z.object({
  email: emailSchema,
  password: loginPasswordSchema,
});

export const registerSchema = z
  .object({
    email: emailSchema,
    password: registerPasswordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword'],
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
