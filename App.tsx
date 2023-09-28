/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {HomeNavigator} from './src/navigators/home/HomeNavigator';
import {store} from './src/redux/store';
import {ThemeProvider} from './src/context/theme/theme_provider';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {AuthProvider} from './src/context/auth/auth_provider';

const queryClient = new QueryClient();
export const queryCache = new QueryCache({
  onError: error => {
    console.log(error);
  },
  onSuccess: data => {
    console.log(data);
  },
  onSettled: (data, error) => {
    console.log(data, error);
  },
});

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ThemeProvider>
            <NavigationContainer>
              <HomeNavigator />
            </NavigationContainer>
          </ThemeProvider>
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  );
}

let AppEntryPoint = App;

//Uncomment this line to showcase storybook.
// AppEntryPoint = require('./.storybook').default;

export default AppEntryPoint;
