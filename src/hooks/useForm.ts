import { z } from "zod";
import { useForm as useReactHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useForm = (schema: z.ZodSchema) => {
  return useReactHookForm({
    resolver: zodResolver(schema),
  });
};
