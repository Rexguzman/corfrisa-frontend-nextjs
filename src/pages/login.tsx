import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FooterLayout from '@layouts/FooterLayout';
import InputV2 from '@components/inputs/InputV2';
import Button from '@components/Button';
import { AxiosError } from 'axios';
import { login } from '@store/counter/loginReducer';
import { useAxios } from '@hooks/useAxios';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@store/hooks';
import { open } from '@store/counter/snackbarReducer';

interface Inputs {
  username: string;
  password: string;
}

const Schema = yup.object().shape({
  username: yup.string().required('Este campo es requerido'),
  password: yup.string().required('Este campo es requerido'),
});

const Register = () => {
  const { requester } = useAxios();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { mutate, isLoading } = useMutation(
    (formData: Inputs) => {
      return requester({
        method: 'POST',
        data: formData,
        url: '/auth/login',
      });
    },
    {
      onSuccess: (response) => {
        const { data } = response;
        console.log('response data', data);
        dispatch(login(data));
        router.push('/dashboard');
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
  } = useForm<Inputs>({
    resolver: yupResolver(Schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { username, password } = data;
    mutate({ username, password });
  };

  const onError = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center bg-gradient-to-l from-white to-gray-300">
      <FooterLayout>
        <div className="mx-auto my-auto flex flex-col items-center justify-center rounded-2xl bg-white/75 p-10 shadow-2xl">
          <div>
            <h1 className="my-4 w-full text-3xl font-bold text-blue-800">
              Bienvenido al sistema
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className="mt-12 w-full"
            >
              <div className="mt-10">
                <InputV2
                  label="Usuario"
                  name="username"
                  type="text"
                  // error={true}
                  errorMessage={errors.username?.message}
                  register={register}
                />
              </div>
              <div className="mt-10">
                <InputV2
                  label="Contraseña"
                  name="password"
                  type="password"
                  // error={true}
                  errorMessage={errors.password?.message}
                  register={register}
                />
              </div>
              <div className="mt-10">
                <Button type="submit" loading={isLoading}>
                  Ingresar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </FooterLayout>
      <div className=" hidden w-full lg:block">
        <img
          className="aspect-1 max-h-screen"
          src="/Logo-500p.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Register;
