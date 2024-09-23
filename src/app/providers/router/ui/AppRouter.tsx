import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
    const { t } = useTranslation();
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route path={path} element={<div className="page-wrapper">{element}</div>} key={path} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
