import Link from "next/link"

const About =async () =>{
    return(<>
    <h1>Hello ! you are on about page!</h1>
    <button>
        <Link href="/">Home Page</Link>
    </button>
    </>) 
}
export default About