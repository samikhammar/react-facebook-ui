import React from 'react';
import { MainLayout } from 'react-facebook-ui';
function AppWrapper({ children }) {
    return <MainLayout defaultAppdata={{ theme: 'dark' }}>{children}</MainLayout>;
}
export default AppWrapper;
