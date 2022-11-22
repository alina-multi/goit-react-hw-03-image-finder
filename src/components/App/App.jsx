import {Component} from "react";
import {Searchbar} from "../Searchbar/Searchbar";
import { fetchImages } from "api/api";  
import { Section } from "./App.styled";
import { Loader } from "components/Loader/Loader";
import { LoadMore } from "components/Button/Button";
import { ImageGallery } from "components/ImageGallery/ImageGallery";




export class App extends Component {
state = {
  searchValue: "",
  currentImages: [],
  page: 1,
  isLoading: false
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

onLoadMoreClick = () =>{
  console.log("hi")
  this.increasePage();

}

increasePage=()=>{
this.setState(state => ({page: state.page + 1}))
}

  render(){
   return <Section>
    <Searchbar onSearch={this.onSearch}/>
   
   {this.state.isLoading ?
    <Loader/> 
    : 
    <ImageGallery images={this.currentImages}/>}

  {(this.state.currentImages.length > 11 && !this.state.isLoading) 
  &&
    <LoadMore onLoadMoreClick={this.onLoadMoreClick}/>}

   </Section>


   

  }
}



