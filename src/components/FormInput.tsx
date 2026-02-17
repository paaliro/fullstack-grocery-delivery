type Props = {
    inputClass?: string;
    type?: string;
    placeholder?: string;
};

const FormInput = ({
    inputClass = "",
    type = "",
    placeholder = "",
}: Props) => {

    return (
        <input
            className={`border border-gray-500/30 rounded-md outline-none w-fit px-3 text-gray-500 py-3 ${inputClass}`}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default FormInput;
