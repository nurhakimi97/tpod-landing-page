import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white}) => {
    const classes =`button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;

    // Define spanClasses to modify the span element
    const spanClasses = "relative z-10"

    const renderButton = () => (
        <button className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    );

    // Render a href link
    const renderLink = () => (
        // pass the const classes to the className
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    )
    // return renderLink if href exists, else return renderButton
    return href
        ? renderLink()
        : renderButton();
};

export default Button;
