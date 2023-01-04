
import {Overlay, ModalWindow} from "./Modal.styled"
import { createPortal } from "react-dom";
import { Component } from "react";

const modalRoot = document.getElementById('app-modal')


export class Modal extends Component {

    componentDidMount (){
   window.addEventListener("keydown", this.props.onEscClose);
  
    }

    componentWillUnmount(){
        window.removeEventListener("keydown", this.props.onEscClose)
    }

    render(){
        return createPortal (<Overlay onClick={this.props.onModalClose}>
            <ModalWindow>{this.props.children}</ModalWindow>
             </Overlay>
         , modalRoot)
    }
}

// function onImageClick (e) {
//     e.currentTarget
// }

// function onModalOpen () {}

// function onModalClose () {}