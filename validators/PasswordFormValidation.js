"use client";
import * as z from "zod";

export const newPassformSchema = z.object({
  siteName: z
    .string()
    .min(5, { message: "Name should not be that short!" })
    .max(25),
  username: z
    .string()
    .min(5, { message: "Username should not be that short!" })
    .max(50),
  password: z
    .string()
    .min(8, { message: "Password should have more than 8 characters!" }),
});
