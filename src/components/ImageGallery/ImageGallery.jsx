import {List } from "./ImageGallery.styled"
import {ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({images}) =>{
    return <List images={images}>
   <ImageGalleryItem/>
  </List>
}