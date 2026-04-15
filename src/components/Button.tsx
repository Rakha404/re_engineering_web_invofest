interface buttenProps {
    title: string;
}

const Button: React.FC<buttenProps> = ({ title }) => {
    return <button className="bg-red-800 text-white p-4 bg rounded-2xl font-semibold transition-all duration-300 ease-in-out hover:bg-red-700 active:scale-95"
    >{(title)}</button>;
};

export default Button;