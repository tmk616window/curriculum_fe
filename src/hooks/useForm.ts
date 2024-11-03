import { z, ZodSchema } from "zod";
import { useForm as useReactHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useForm = (schema: ZodSchema) => {
  return useReactHookForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
};
