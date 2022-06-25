import React, { Suspense } from 'react';
import Loading from '../Loading';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Animation = () => {
    return (
        <div className="absolute top-0 right-0 overflow-hidden w-1/2 h-full lg:flex items-end justify-end hidden">
                <Suspense fallback={<Loading />}>
                    <Spline scene="https://prod.spline.design/DpmfcbvddeL84lR2/scene.splinecode" />
                </Suspense>
        </div>
    );
};

export default Animation;
