import {Component} from "react";
import {Searchbar} from "../Searchbar";
import { nanoid } from "nanoid";
import { fetchImages } from "api/api";
import { Oval } from "react-loader-spinner";   



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
  this.increasePage();

}

increasePage=()=>{
this.setState(state => ({page: state.page + 1}))
}

  render(){
   return <div>
    <Searchbar onSearch={this.onSearch}/>
   
  
   
   {this.state.isLoading ?
    <Oval
  height={80}
  width={80}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
   strokeWidthSecondary={2}/> 
    : 
    <ul>{this.state.currentImages.map(image => <li key={nanoid()}> <img src={image.webformatURL} alt={image.tags} /></li> )}</ul>}
  {(this.state.currentImages.length > 11 && !this.state.isLoading) &&  <button type="button" onClick={this.onLoadMoreClick}>Load More</button>}

   </div>


   

  }
}



