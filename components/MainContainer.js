import Head from "next/head";
import Links from "./Links";

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={"lil_papa, nextjs" + keywords}></meta>
                <title>Main page</title>
            </Head>
            <div className="navbar">
                <Links href={'/'} text={"Main"} />
                <Links href={'/users'} text={"Users"} />
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;