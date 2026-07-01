import { useState } from "react";

function Home() {
    const [like , setlike] = useState(true);

    function toggle(){
        setlike(!like);

    }

    return (
        <>
       <p onClick={toggle}>
        {
            like ? (<i class="fa-brands fa-instagram"></i>) : <i class="fa-brands fa-square-instagram"></i>
        }
       </p>
        </>
    );

}


export default Home;
