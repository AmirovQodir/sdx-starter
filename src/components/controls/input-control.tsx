import { ComponentType, useState } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input, InputProps } from "../ui/input";
import { Control } from "react-hook-form";
import { cn } from "@/lib/utils";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export const InputControl: ComponentType<
  InputProps & {
    control: Control<any>;
    name: string;
    label?: string;
    placeholder?: string;
    description?: string;
  }
> = ({
  control,
  label,
  description,
  name,
  className,
  type: inputType,
  ...rest
}) => {
  const [type, setType] = useState(inputType);
  const onSetType = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem hasSpace={!!label}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <div className="relative">
              <Input
                {...{ ...field, ...rest }}
                className={cn(className, "w-full")}
                type={type}
              />
              {inputType === "password" ? (
                <a
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={onSetType}
                >
                  {type === 'text' ? <EyeOpenIcon/> : <EyeClosedIcon />}
                </a>
              ) : null}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
