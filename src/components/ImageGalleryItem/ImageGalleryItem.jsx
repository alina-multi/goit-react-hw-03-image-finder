import {Component} from "react";
import { Item, Image } from "./ImageGalleryItem.styled";
import { nanoid } from "nanoid";

export class ImageGalleryItem extends Component { 

    render(){
        const images = this.props.images;
       

        return images.map
        (image => 
        <Item key={nanoid()}> <Image src={image.webformatURL} alt={image.tags} /> </Item>)} 
}
