interface Props{
    children: string;
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

    onClick: ()=> void;
}

const Button = ( {type ='primary',children, onClick} : Props )=>{

    return <button type="button" className={'btn btn-' + type}  onClick={onClick} >{children}</button>

}

export default Button;