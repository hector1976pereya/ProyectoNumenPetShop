import styled from "styled-components";

const Modals = ({ children, state }) => {
    return (
        <>
            {state && (
                <Fondo>
                    <ContenedorModal>
                        <EncabezadoModal>
                         En el carrito seleccione cantidad
                        </EncabezadoModal>

                        {children}
                    </ContenedorModal>
                </Fondo>
            )}
        </>
    );
};

export default Modals;

const Fondo = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0, 0.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgb(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid red;

    h3 {
        font-size: 16px;
        color: black;
    }
`;
