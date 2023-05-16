import "./Selector.css";

const Selector = (props) => {
    return (
        <select className="selector" onChange={props.onChange}>
        <option value="todos" selected>Todos</option>
        <option value="sesión">Clase</option>
        <option value="tutoría">Tutoría</option>
        <option value="file">Otros</option>
        </select>
    );
    }

export default Selector;