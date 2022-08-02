import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputV2 from '@components/inputs/InputV2';
import Button from '@components/Button';
import { useAxios } from '@hooks/useAxios';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@store/hooks';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { open } from '@store/counter/snackbarReducer';
import { SubmitHandler, useForm } from 'react-hook-form';
import SelectController from '@components/inputs/Select';
import { rifTypeOptions } from 'utils/selectOptions';
import { useEffect } from 'react';

interface Inputs {
  name: string;
  email: string;
  phone: string;
  rifType: string;
  rif: string;
  address: string;
}

const Schema = yup.object().shape({
  name: yup.string().required('Este campo es obligatorio'),
  email: yup.string().required('Este campo es obligatorio'),
  phone: yup.string().required('Este campo es obligatorio'),
  rifType: yup.string().required('Este campo es obligatorio'),
  rif: yup.string().required('Este campo es obligatorio'),
  address: yup.string().required('Este campo es obligatorio'),
});

interface TClientData extends Inputs {
  _id: string;
}

interface TClientFormProps {
  clientData?: TClientData;
  editMode?: boolean;
}

const ClientForm = ({ clientData, editMode }: TClientFormProps) => {
  const { requester } = useAxios();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { mutate, isLoading } = useMutation(
    (formData: Inputs) => {
      return requester({
        method: editMode ? 'PATCH' : 'POST',
        data: formData,
        url: editMode ? `/clients/${clientData?._id}` : '/clients',
      });
    },
    {
      onSuccess: () => {
        router.push('/clients');
      },
      onError: (error: AxiosError) => {
        console.log(error.response.data);
        dispatch(open({ text: error.response.statusText, type: 'error' }));
      },
    }
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    watch,
    setValue,
  } = useForm<Inputs>({
    resolver: yupResolver(Schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    mutate(data);
    console.log(data);
  };
  console.log(watch('rifType'));
  const onError = (data) => {
    console.log(data);
  };

  useEffect(() => {
    setValue('name', clientData?.name);
    setValue('email', clientData?.email);
    setValue('phone', clientData?.phone);
    setValue('rifType', clientData?.rifType);
    setValue('rif', clientData?.rif);
    setValue('address', clientData?.address);
  }, [clientData, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="mb-9">
        <InputV2
          label="Nombre Completo"
          name="name"
          errorMessage={errors.email?.message}
          register={register}
        />
      </div>
      <div className="my-9 flex gap-8">
        <div className="w-1/2">
          <InputV2
            label="Correo"
            name="email"
            errorMessage={errors.email?.message}
            register={register}
          />
        </div>
        <div className="w-1/2">
          <InputV2
            label="Número de contacto"
            name="phone"
            errorMessage={errors.phone?.message}
            register={register}
          />
        </div>
      </div>
      <div className="my-9 flex gap-8">
        <div className="w-1/2">
          <SelectController
            label="Tipo de Documento"
            control={control}
            options={rifTypeOptions}
            name="rifType"
            errorMessage={errors?.rifType?.message}
          />
        </div>
        <div className="w-1/2">
          <InputV2
            name="rif"
            label="Documento de Identidad"
            errorMessage={errors?.rif?.message}
            register={register}
          />
        </div>
      </div>
      <div className="my-9">
        <InputV2
          label="Dirección"
          name="address"
          errorMessage={errors.address?.message}
          register={register}
        />
      </div>
      <div className="flex justify-end">
        <div className="w-1/4">
          <Button loading={isLoading} type="submit">
            {editMode ? 'Actualizar' : 'Crear'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ClientForm;
