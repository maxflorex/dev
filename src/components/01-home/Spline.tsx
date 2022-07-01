import React, { Suspense } from 'react';
import Loading from '../Loading';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Animation = () => {
    return (
        <div className="md:(w-1/2 block) h-full flex hidden">
                <Suspense fallback={<Loading />}>
                    <Spline scene="https://prod.spline.design/OF5o0oiDijGXsDow/scene.splinecode" className='md:(h-full w-full) h-auto w-screen -mb-60' />
                </Suspense>
        </div>
    );
};

export default Animation;
