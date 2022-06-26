import React from 'react';

const usePrev = (slideShow: any, speed: number) => {
    const previous = () => {
        // CHECK IF THE SLIDESHOW HAS SLIDES
        if (slideShow.current.children.length > 0) {
            // GET LAST ELEMENT FROM SLIDESHOW
            const index = slideShow.current.children.length - 1;
            // GET LAST SLIDE
            const lastSlide = slideShow.current.children[index];
            slideShow.current.insertBefore(
                lastSlide,
                slideShow.current.firstChild
            );
            // GET SLIDE SIZE
            const slideSize = slideShow.current.children[0].offsetWidth;

            // SLIDESHOW TRANSITION
            slideShow.current.style.transition = 'none';
            // SLIDE MOVEMENT
            slideShow.current.style.transform = `translateX(-${slideSize}px)`;

            setTimeout(() => {
                slideShow.current.style.transition = `${speed}ms ease-out all`;
                slideShow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    };
    return { previous };
};

export default usePrev;
