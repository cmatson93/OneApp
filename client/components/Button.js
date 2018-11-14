import Link from "next/link";

const Button = (props) => (
    <Link href='/login'>
        <button>{props.label}</button>       
    </Link>
)

export default Button;