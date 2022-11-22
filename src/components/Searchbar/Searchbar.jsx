import { Header, SearchForm, SearchFormButton, Label, Input } from "components/Searchbar/Searchbar.styled";
import {CiSearch} from "react-icons/ci"

export const Searchbar = ({onSearch}) => ( 
  
<Header>
<SearchForm  onSubmit={onSearch}>
  <SearchFormButton type="submit" > 
    <Label><CiSearch size={24} /></Label>
  </SearchFormButton>

  <Input
    className="input"
    type="text"
    name="input"
    placeholder="Search images and photos"
  
  />
</SearchForm>
</Header>)




