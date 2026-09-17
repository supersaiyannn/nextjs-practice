

const Products = async(props)=>{
   const searchParam =  await props?.searchParams;
   console.log(searchParam);

    return<h1>Search Params</h1>
}
export default Products; 