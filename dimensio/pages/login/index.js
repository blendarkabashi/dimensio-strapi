import hireIllustration from 'public/images/hire-illustration.svg';
import lookingIllustration from 'public/images/looking-illustration.svg';
import logo from 'public/images/logo.svg';
import Image from 'next/image';
import Input from 'components/input';
import Button from 'components/button';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import ButtonSlider from 'components/buttonSlider';
import Axios from 'axiosInstance/instance';
import { setIsAuthenticated, setUser } from 'store/global';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState(1);

  const isAuthenticated = useSelector((state) => state.global.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated]);

  const buttons = [
    {
      id: 1,
      name: 'Company',
    },
    { id: 2, name: 'Job Seeker' },
  ];

  const formik = useFormik({
    initialValues: {
      type: activeButton,
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      const { username, password } = values;
      Axios.post('auth/local', {
        identifier: username,
        password: password,
      }).then((response) => {
        localStorage.setItem('jwt', response.data.jwt);
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch(setIsAuthenticated(true));
        dispatch(setUser(response.data));
      });
    },
  });
  return (
    <div className="my-[80px]">
      <div className="container">
        <div className="w-full flex flex-col items-center justify-center">
          <Image src={logo} alt="test" />
        </div>
        <div className="flex items-center justify-between">
          <div className="max-w-[400px]">
            <form onSubmit={formik.handleSubmit}>
              <div className="text-5xl font-medium mb-3 text-center">
                Welcome back!
              </div>
              <div className="text-darkGray text-xl mb-[50px] text-center">
                Please enter your details to log in.
              </div>
              <ButtonSlider
                buttons={buttons}
                activeButton={activeButton}
                setActiveButton={(value) => {
                  setActiveButton(value);
                  formik.values.type = value;
                }}
              ></ButtonSlider>
              <Input
                id="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
                label="Email"
                className="mb-8"
              />
              <Input
                id="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                label="Password"
                className="mb-3"
              />
              <div className="text-right mb-8">
                <a href="#">Forgot Password?</a>
              </div>
              <Button type="submit" className="w-full">
                Log In
              </Button>
            </form>
          </div>
          <div className=" h-[550px] w-[400px]">
            <Image
              className="h-full w-full"
              alt="alt"
              src={activeButton == 1 ? hireIllustration : lookingIllustration}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
