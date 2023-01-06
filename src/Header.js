const Header = ({title}) => {

    return (
        <header>
            <h1 style={{textalign:'center'}}>{title}</h1>
        </header>
    )
}
Header.defaultProps ={
    title: "Default Title"
}
export default Header;