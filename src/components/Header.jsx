import "./styles/Header.css";


const Header =({Header})=>{
    console.log(Header);

    return <article className="header">
     <h3 className="Weather">Weather App</h3>
     <form action="/buscar">
    <input type="text" placeholder="Buscar" className="search"></input>       
    <img className="lupa" src="\img\icons\material-symbols_search.png" alt="" />
        </form>   
    <button className="bt__search"></button>

    </article>



};


    export default Header;