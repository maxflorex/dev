type Props = {
    children: JSX.Element;
    direction: string;
    click: any;
};

const ArrowContainer = (props: Props) => {
    return (
        <div
            className={`h-full flex items-center absolute top-0 ${
                props.direction === 'left' ? 'left-2' : 'right-2'
            } cursor-pointer z-40`}
        >
            <div
                className={`flex items-center bg-off/20 hover:bg-off rounded-lg p-4`}
                onClick={props.click}
            >
                {props.children}
            </div>
        </div>
    );
};

export default ArrowContainer;
