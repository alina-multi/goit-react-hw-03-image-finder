import {Component} from "react";
import { Item, Image } from "./ImageGalleryItem.styled";
import { nanoid } from "nanoid";




        
export class ImageGalleryItem1 extends Component { 

    render(){
        const images = this.props.images;
        return images.map
        (image => 
        <Item key={nanoid()}> <Image id={image.id} src={image.webformatURL} alt={image.tags} onClick={this.props.onImageClick} /> </Item>)} 
}

