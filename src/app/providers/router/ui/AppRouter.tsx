import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

const AppRouter = () => {
    const { t } = useTranslation();
    return (
        <Suspense fallback={<div className="page-loader">{t('Loading...')}</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route path={path} element={<div className="page-wrapper">{element}</div>} key={path} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
