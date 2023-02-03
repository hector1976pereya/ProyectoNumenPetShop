import ListaTarjetaIndumentaria from "./ListaTarjetaIndumentaria";

const SeccionIndumentaria = ({ indumentarias, setState, state }) => {
    return (
        <ListaTarjetaIndumentaria
            indumentarias={indumentarias}
            setState={setState}
            state={state}
        />
    );
};

export default SeccionIndumentaria;
