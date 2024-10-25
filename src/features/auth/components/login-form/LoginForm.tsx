import { FC } from "react";
import {
  FIELD_PASSWORD,
  ROUTE_FORGOT_PASSWORD,
} from "../../../../common/constants";
import {
  AUTH_FIELD_PASSWORD,
  AUTH_FIELD_REMEMBER,
  AUTH_FIELD_USER_NAME,
} from "../../constants";
import { useLogin } from "../../hooks";

import { Button } from "@/components/ui/button";
import { InputControl } from "@/components/controls/input-control";
import { Form } from "@/components/ui/form";

export const LoginForm: FC = () => {
  const { control, isLoading, handleLogin, setValue, form } = useLogin();
  const submitForm = (data: any) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-4">
            <InputControl
              label="Username"
              placeholder="Username"
              control={control}
              name={AUTH_FIELD_USER_NAME}
              disabled={isLoading}
            />
            <InputControl
              label="Password"
              type="password"
              placeholder="Password"
              control={control}
              name={FIELD_PASSWORD}
              disabled={isLoading}
            />
          <Button disabled={isLoading} type="submit">
            Sign in
          </Button>
        </div>
      </form>
    </Form>
  );
};
