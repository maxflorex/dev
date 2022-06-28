type Props = {
    children: JSX.Element;
    direction: string;
    click: any;
};

const ArrowContainer = (props: Props) => {
    return (
        <div
            className={`cursor-pointer z-40 flex items-end absolute md:(right-16 items-center bottom-auto) right-0 bottom-8 ${
                props.direction === 'left' ? 'mr-28' : 'ml-24'
            }`}
        >
            <div
                className={`flex items-center hover:bg-rosa rounded-lg p-4`}
                onClick={props.click}
            >
                {props.children}
            </div>
        </div>
    );
};

export default ArrowContainer;
