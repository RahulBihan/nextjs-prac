import { Metadata } from "next";

type Props ={
  params:{
    productId:string
  }
}
export const generateMetadata = async ({params}: Props) : Promise<Metadata> => {
  const title = await new Promise<string>((resolve) => { 
    setTimeout(() => { 
      resolve(`Android ${params.productId}`); 
    }, 100);
   });
  return {
  title: `Product Details ${params.productId}`,
}
};


export default function ProductDetails({params} : Props) {
    return (
      <h1>Product Details Test{params.productId}</h1>
    );
  }