import {Button} from 'crisjumbo-component';

const UnderConstructionPage = () => {
    
    const LINKEDIN_PROFILE = "https://www.linkedin.com/in/crisjumbo/";
    const GITHUB_PROFILE = "https://github.com/srcristofher";

    return(
        <div className="bg-main-blue w-screen h-screen flex justify-center items-center">
            <div>
                <div>
                <h1 className="text-6xl font-bold">Cristofher Jumbo - Fullstack <br/> developer</h1>
                <p className="text-3xl mt-10 mb-3">🚧 I'm so sorry to inform that this website is under some updates.<br/> It will be back soon 🚧</p>
                </div>
                <div className="flex">
                    <form action={LINKEDIN_PROFILE} method="get">
                        <Button text='linkedin-profile'/>
                    </form>
                    <form action={GITHUB_PROFILE} method="get">
                        <button className="bg-github-black p-3 rounded font-bold text-github-white-one ml-5">Github Profile</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default UnderConstructionPage;