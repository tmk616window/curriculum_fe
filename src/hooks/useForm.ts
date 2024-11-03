import { z, ZodSchema } from "zod";
import { UseFormReturn, useForm as useReactHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useForm = <T extends ZodSchema>(schema: T): UseFormReturn<z.infer<T>> => {
  return useReactHookForm<z.infer<T>>({
    resolver: zodResolver(schema),
  });
};
