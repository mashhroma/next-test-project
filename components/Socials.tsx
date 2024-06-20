import Head from "next/head";
import Heading from "./Heading";

export default function Socials({ socials }: { socials: Social[] }) {
    if (!socials) {
        return null;
    }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
            </Head>
            <ul>
                {socials && socials.map(({ id, icon, path }: Social) => (
                    <li key={id}>
                        <a href={path} target="_blank">
                            <i className={`fab fa-${icon}`} aria-hidden="true"></i>
                        </a>
                    </li>
                ))
                }
            </ul >
        </>
    )
}