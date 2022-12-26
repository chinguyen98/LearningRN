import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import BaseInput from '../../components/BaseInput';
import useThemeStore from '../../stores/theme.store';
import { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } from '@env';

type AuthFormProps = {
  username: string;
  password: string;
};

const AuthScreen = () => {
  const {
    base: { theme },
    textColor,
  } = useThemeStore((state) => state);

  const style: ViewStyle = {
    ...theme,
    display: 'flex',
    justifyContent: 'center',
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormProps>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async () => {
    try {
      console.log('ececec', CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN);
      // const response = await loginApi({ username: 'kminchelle', password: '0lelplRs' });
      // console.log({ response });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SafeAreaView style={style}>
      <View>
        <Text style={{ color: textColor }} className="text-center text-lg">
          LOGIN
        </Text>
        <View className="my-3 px-3">
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <BaseInput placeholder="Input your username" value={value} onChange={onChange} />
            )}
            name="username"
          />
          {errors.username && <Text className="text-red-500 px-3">{errors.username.message}</Text>}

          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <BaseInput
                placeholder="Input your password"
                value={value}
                onChange={onChange}
                type="password"
              />
            )}
            name="password"
          />
          {errors.password && <Text className="text-red-500 px-3">{errors.password.message}</Text>}

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            className="h-10 bg-gray-600 d-flex justify-center align-middle mt-2"
          >
            <Text className="text-center">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
