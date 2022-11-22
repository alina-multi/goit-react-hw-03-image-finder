import { Oval } from "react-loader-spinner";   
import { WrapperLoader } from "./Loader.styled";

export const Loader = () => {
    return <WrapperLoader>
            <Oval
    height={300}
    width={300}
    color="#4fa94d"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#4fa94d"
    strokeWidth={2}
     strokeWidthSecondary={2}/>
    </WrapperLoader>
    

}