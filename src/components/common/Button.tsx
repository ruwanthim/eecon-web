const Button = ({ children, ...props }: any) => {
    return (
        <button
            type="button"
            className={`bg-red-500 text-white font-medium py-2 px-4 hover:bg-red-700 ${props.className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
