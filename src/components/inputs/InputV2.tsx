import { Input } from '@material-tailwind/react';
import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface TInputProps {
  label: string;
  name: string;
  errorMessage: any;
  register: UseFormRegister<any>;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
  labelClassName?: string;
}

const InputV2 = ({
  label,
  name,
  register,
  errorMessage,
  disabled,
  type,
}: TInputProps) => {
  return (
    <div className="">
      <Input
        {...register(name)}
        className="peer h-10 border-0 border-b-2 font-bold text-gray-900 placeholder-transparent focus:outline-none focus:ring-0"
        label={label}
        variant="standard"
        error={!!errorMessage}
        disabled={disabled}
        type={type}
      />
      {errorMessage ? (
        <span className="absolute my-2 text-xs text-red-500">
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
};

export default InputV2;
