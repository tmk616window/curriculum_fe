import { z } from "zod";
import { useForm as useReactHookForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type UseFormProps = {
  schema: z.ZodSchema;
};

export const useForm = <T extends {}>({ schema }: UseFormProps): UseFormReturn<T> => {
  return useReactHookForm<T>({
    resolver: zodResolver(schema),
  });
};
