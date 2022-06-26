import { useCallback } from 'react'

const useNext = (slideShow: any, speed: number) => {
    const next = useCallback(() => {
        if (slideShow.current?.children.length > 0) {
            // GET FIRST SLIDE OF SLIDER
            const firstSlide = slideShow.current.children[0];
            // SLIDESHOW TRANSITION
            slideShow.current.style.transition = `${speed}ms ease-out all`;
            // GET SLIDE UNIT SIZE
            const slideSize = slideShow.current.children[0].offsetWidth;
            // SLIDE MOVEMENT
            slideShow.current.style.transform = `translateX(-${slideSize}px)`;
            const transition = () => {
                // RESTART SLIDESHOW POSITION
                slideShow.current.style.transition = 'none';
                slideShow.current.style.transform = `translateX(0)`;
                // SEND FIRST SLIDE AND SEND TO THE END
                slideShow.current.appendChild(firstSlide);
                slideShow.current.removeEventListener(
                    'transitionend',
                    transition
                );
            };
            // LISTERNER WHEN ANIMATION ENDS
            slideShow.current.addEventListener('transitionend', transition);
        }
    }, [speed]);

    return {next}
}

export default useNext