import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTE_FORGOT_PASSWORD } from "../../../../common/constants";
import {
  AUTH_FIELD_PASSWORD,
  AUTH_FIELD_REMEMBER,
  AUTH_FIELD_USER_NAME,
} from "../../constants";
import { useLogin } from "../../hooks";

import './styles.scss';


export const LoginForm: FC = () => {
  const { control, isLoading, handleLogin, setValue } = useLogin();
  return (
    <form onSubmit={handleLogin} className="login-form">
      <div className="w-full">
        <div className="w-full">
          {/* <TextFieldController
            placeholder="Username"
            control={control}
            name={AUTH_FIELD_USER_NAME}
          />
          <TextFieldController
            placeholder="Password"
            inputCompound={"Password"}
            control={control}
            name={AUTH_FIELD_PASSWORD}
          />
          <div className="remember-actions">
            <CheckboxController
              setValue={setValue}
              control={control}
              name={AUTH_FIELD_REMEMBER}
              label="Remember me"
            />
            <div>
              <span className="forgot-link">
                <Link to={ROUTE_FORGOT_PASSWORD}>Forgot your password?</Link>
              </span>
            </div>
          </div> */}
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="button"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};
