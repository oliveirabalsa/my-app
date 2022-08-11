import { IProps } from "./types";

export default function Button({ name, children }: IProps) {
    return (
        <button>
            {children}
        </button>
    )
}