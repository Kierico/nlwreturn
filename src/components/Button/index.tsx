interface ButtonProps {
    text?: string;
}

export function Button(props: ButtonProps) {
    return (
        <div>
            <button
                className="
                    bg-[#8257e6] 
                    px-2 
                    h-10 
                    rounded 
                    text-violet-100 
                    hover:bg-violet-700
                    transition-colors
                    ">
                {props.text ?? 'Button'}
            </button>
        </div>
    )
}