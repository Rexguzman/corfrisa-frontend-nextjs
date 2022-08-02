import { Controller } from 'react-hook-form';
import { Option, Select } from '@material-tailwind/react';

interface TSelectProps {
  label: string;
  name: string;
  errorMessage?: string;
  control?: any;
  options: Array<{ value: string; label: string | number }>;
  initialLabelAndValue?: { value: string | number; label: string | number };
  onChange?: any;
  disabled?: boolean;
}

const SelectController = ({
  label,
  name,
  errorMessage,
  control,
  options,
  disabled,
}: TSelectProps) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            className="text-xl font-bold hover:text-blue-800"
            variant="standard"
            label={label}
            error={!!errorMessage}
            disabled={disabled}
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        )}
      />
      {errorMessage ? (
        <span className="absolute my-2 text-xs text-red-500">
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
};

export default SelectController;
