import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
  fullName: z.string(),
  telephone: z.number().max(10),
  registrationDate: z.string(),
});

export type LoginData = z.infer<typeof registerSchema>;
