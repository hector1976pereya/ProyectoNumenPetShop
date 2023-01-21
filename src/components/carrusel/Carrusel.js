import React, {useRef, useEffect} from 'react'


import {ReactComponent as FlechaIzquierda} from "../../images/iconmonstr-angel-left-thin.svg"
import {ReactComponent as FlechaDerecha} from   '../../images/iconmonstr-angel-right-thin.svg'
import styled from 'styled-components'
import img1 from '../../images/imgPetShop-1.png'
import img2 from '../../images/imgPetShop-2.png'
import img3 from '../../images/imgPetShop-3.png'
import img4 from '../../images/imgPetShop-4.png'
import img5 from '../../images/imgPetShop-5.png'
import img6 from '../../images/imgPetShop-6.png'
import img7 from '../../images/imgPetShop-7.png'
import img8 from '../../images/imgPetShop-8.png'
import img9 from '../../images/imgPetShop-9.png'
import img10 from '../../images/imgdeprueba.png'






const Carrusel = () => {
    const SlideShow = useRef(null);
    const IntervalSlide = useRef(null);
    const Next = () => {
        //Configuracion de flecha "siguiente"
        if (SlideShow.current.children.length > 0) {
            //comprobamos que el carrusel contenga elementos : mayor a "0"

            //.current hace referencia al componente Slideshow
            const firstElement = SlideShow.current.children[0]; //obtenemos el primer elemento del carrusel
            //se establece la transicion para el carrusel
            SlideShow.current.style.transition = `300ms ease-out all`;
            // El atributo "transition" me proporciona una forma de animar los cambios de las propiedades CSS, en lugar de que los cambios surtan efecto de manera instantánea.
            // 0.3 seg para todas

            const sizeCarousel = SlideShow.current.children[0].offsetWidth;
            // con la propiedad "offsetWidth" podemos de alguna manera, pedirle al compilador que de alguna manera, nos adivine el ancho de la img [0] = primera
            // La declaramos en una variable para que el codigo no sea tan tedioso de RE-UTILIZAR

            //movemos el carrusel
            SlideShow.current.style.transform = `translateX(-${sizeCarousel}px)`;
            //Con la propiedad "transform", le pedimos que se traslade hacia la izquierda
            //sobre su eje X (el movimiento es definido, por tamaño. En este caso el tamaño de la
            //variable sizeCarousel)

            //FUNCION PARA LA TRANSICION DEL CARRUSEL
            const transition = () => {
                //reiniciamos la posicion del carrusel
                SlideShow.current.style.transition = "none";
                SlideShow.current.style.transform = `translateX(0)`;

                //se toma el primer elemento y se lo manda al final para "reiniciar el movimiento de img"
                SlideShow.current.appendChild(firstElement);
                //con appenchild insertamos el nuevo nodo dentro del DOM
                SlideShow.current.removeEventListener(
                    "transitionend",
                    transition
                );
                //pedimos que remueva cuando la transicion/funcion termine
            };

            SlideShow.current.addEventListener("transitionend", transition);
        }
    };

    const Previus = () => {
        if (SlideShow.current.children.length > 0) {
            const index = SlideShow.current.children.length - 1;
            //index obtiene el ultimo elemento y lo asignamos a una variable
            const lastElement = SlideShow.current.children[index];

            SlideShow.current.insertBefore(
                lastElement,
                SlideShow.current.firstChild
            );
            //insertBefore() inserta un nodo antes del nodo de referencia como hijo de un nodo padre indicado.

            SlideShow.current.style.transition = "none";
            const sizeCarousel = SlideShow.current.children[0].offsetWidth;
            SlideShow.current.style.transform = `translateX(-${sizeCarousel}px)`;

            setTimeout(() => {
                SlideShow.current.style.transition = "300ms ease-out all";

                SlideShow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    };
    useEffect(() => {
        IntervalSlide.current = setInterval(() => {
            Next();
        }, 4000);
        //autoplay
    });

    return (
        // mainContainer = div contenedor principal creados con STYLE.COMPONENT Y RE NOMBRADOS POR PRACTICIDAD TODOS ESTAN DENTRO DE ESTE DIV

        //SlideShowContainer = div CONTENEDOR DE IMG Y TEXTO
        // REF={SLIDESHOW} = useRef - STYLE COMPONENT
        // SLIDE = DIV CONTENEDOR DE IMG
        //TEXTSLIDE = DIV CONTENDOR DE TEXTO ..   POR SI QUEREMOS AGREGARLO, DEJO UN BLOC DE NOTAS CON EL CODIGO, O ME AVISAN Y MODIFICO.
        //CONTROLS = DIV CONTENEDOR PRINCIPAL DE LOS BOTONES
        // BOTTON1 = IZQUIERDA . BOTTON2 = DERECHA
        <MainContainer>
            <SlideShowContainer ref={SlideShow}>
                <Slide>
                    <a href="/">
                        <img src={img1} alt="" />
                    </a>
                </Slide>

                <Slide>
                    <a href="/">
                        <img src={img2} alt="" />
                    </a>
                </Slide>

                <Slide>
                    <a href="/">
                        <img src={img3} alt="" />
                    </a>
                </Slide>

                <Slide>
                    <a href="/">
                        <img src={img10} alt="" />
                    </a>
                </Slide>

                <Slide>
                    <a href="/">
                        <img src={img4} alt="" />
                    </a>
                </Slide>

                <Slide>
                    <a href="/">
                        <img src={img5} alt="" />
                    </a>
                </Slide>

                <Slide>
                    <a href="/">
                        <img src={img6} alt="" />
                    </a>
                </Slide>

                <Slide>
                    <a href="/">
                        <img src={img7} alt="" />
                    </a>
                </Slide>

                <Slide>
                    <a href="/">
                        <img src={img8} alt="" />
                    </a>
                </Slide>

                <Slide>
                    <a href="/">
                        <img src={img9} alt="" />
                    </a>
                </Slide>
            </SlideShowContainer>

            <Controls>
                <Button1 onClick={Previus}>
                    <FlechaIzquierda />
                </Button1>

                <Button2 right onClick={Next}>
                    <FlechaDerecha />
                </Button2>
            </Controls>
        </MainContainer>
    );
};
//TODAS ESTAS CONSTANTES SE DEBEN AL USO DE STYLED.COMPONENT. SE ENCUENTRAN DECLARADAS DENTRO DE LOS TEMPLATE STRING.
const MainContainer = styled.div`
    position: relative;
`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: 0.3s ease all;
    z-index: 10;
    position: relative;

    img {
        width: 100%;
        vertical-aling: top;
        height: 300px;
    }
`;

const SlideShowContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    height: 300px;
`;

const Controls = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Button1 = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: 0.3s ease all;

    &:hover {
        background: rgba(0, 0, 0, 0.2);
    }
`;
const Button2 = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: 0.3s ease all;
    &:hover {
        background: rgba(0, 0, 0, 0.2);
    }

    ${(props) => (props.right ? "right: 0" : "left: 0")}
`;
//CON LA ULTIMA FUNCION PROPS "right", ESTABLECEMOS QUE LAS FLECHAS SE ENCUENTREN EN EL EJE CENTRAL Y SE VAYAN A CADA EXTREMO SOBRE EL EJE X. HORIZONTAL POR LAS DUDAS,
//SALUDOS!!
export default Carrusel;
