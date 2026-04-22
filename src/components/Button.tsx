interface buttenProps {
    title: string;
}

const Button: React.FC<buttenProps> = ({ title }) => {
    return <button className="bg-white  border-2 p-4 bg rounded-2xl font-semibold transition-all duration-300 ease-in-out hover:bg-red-900 hover:text-white active:scale-95 hover:scale-120"
    >{(title)}</button>;
};

export default Button;