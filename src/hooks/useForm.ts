import { TypeOf, ZodSchema } from "zod";
import { UseFormReturn, useForm as useReactHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useForm = <T extends ZodSchema>(schema: T): UseFormReturn<TypeOf<T>> => {
  return useReactHookForm<TypeOf<T>>({
    resolver: zodResolver(schema),
  });
};
