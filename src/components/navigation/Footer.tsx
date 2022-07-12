import logoMx2 from '../../assets/dev-14-11.svg';

type Props = {};

const Footer = (props: Props) => {
    return (
        <div className="sticky top-full overflow-hidden">
            <div className="flex-between bg-gradient-to-t from-off text-navy font-serif">
                {/* <img src={logoMx} alt="Logo Max" className="w-32" /> */}
                <h2>2022 - Max Flores</h2>
                <img
                    src={logoMx2}
                    alt="Logo Max"
                    className="w-16"
                />
            </div>
        </div>
    );
};

export default Footer;
