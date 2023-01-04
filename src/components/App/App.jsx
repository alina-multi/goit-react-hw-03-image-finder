import {Component} from "react";
import {Searchbar} from "../Searchbar/Searchbar";
import { fetchImages } from "api/api";  
import { Section } from "./App.styled";
import { Loader } from "components/Loader/Loader";
import { LoadMore } from "components/Button/Button";
import { ImageGallery1 } from "components/ImageGallery/ImageGallery";
import {ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Modal } from "components/Modal/Modal";
import { LargeImage } from "components/Modal/Modal.styled";

import ImageGallery from 'react-image-gallery';





const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    // thumbnail: 'https://picsum.photos/id/1018/250/150/',
    originalTitle: 'dfrtgyhj',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    originalTitle: 'rtyui',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    // thumbnail: 'https://picsum.photos/id/1019/250/150/',
    originalTitle: 'qwerty',
  },
];




export class App extends Component {
state = {
  searchValue: "",
  currentImages: [],
  page: 1,
  isLoading: false,
  isModalOpen: false, 
  largeImage:""
}

async getImages (){
  try {
    this.setState({isLoading: true})
    const currentImages = await fetchImages(this.state.searchValue, this.state.page);
    this.setState({currentImages})
 
   } catch {}
   this.setState({isLoading: false})
}

componentDidMount(){
  this.getImages()
}

 componentDidUpdate(_,prevState) {
  console.log("update")
if(prevState.searchValue !== this.state.searchValue || prevState.page !== this.state.page ){
this.getImages()
  }
}

onSearch = (e) => {
  e.preventDefault();
  let value = e.currentTarget.elements.input.value;
  if(this.state.searchValue !== value ) {
    this.setState( {
      page: 1,
      searchValue: value
    }
  );
  }
 
  
}

onImageClick = (e) => {

  const currentImageID = e.target.id;
  const currentImage = this.state.currentImages.find(image => image.id === Number(currentImageID) )
  this.setState({
    isModalOpen: true,
    largeImage: currentImage.largeImageURL
  })
}

modalToggle = () =>{
  this.setState(({isModalOpen})=>({
    isModalOpen: !isModalOpen,
 }))
}

onModalClose =(e) => {
  console.log(e.currentTarget)
  console.log(e.target)
  if(e.currentTarget === e.target ){
   this.modalToggle();
  }
}


onEscClose=(e)=> {
  if(e.code === "Escape") {
  this.modalToggle()
  }
}

onLoadMoreClick = () =>{
  this.increasePage();
}

increasePage=()=>{
this.setState(state => ({page: state.page + 1}))
}



  render(){
   return <Section>
    
  {/* //   {this.state.isModalOpen && <Modal onModalClose={this.onModalClose} onEscClose={this.onEscClose}> 
  //   <LargeImage src={this.state.largeImage}/></Modal>}


  //   <Searchbar onSearch={this.onSearch}/>
   
  //   {this.state.isLoading ? */}
  {/* //   <Loader/> 
  //   : 
  //   <ImageGallery1 > 
  //   <ImageGalleryItem images={this.state.currentImages}  onImageClick={this.onImageClick}/> 
  //   </ImageGallery1>
  //   }

  //   {(this.state.currentImages.length > 11 && !this.state.isLoading) 
  //   &&
  //   <LoadMore onLoadMoreClick={this.onLoadMoreClick}/>} */}



   <ImageGallery items={images} />

   </Section>
  }
}



