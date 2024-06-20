import Heading from "@/components/Heading";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Error() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router]);

    return (
        <>
            <Heading text='Error page' />
            <p>Ooops! 404</p>
        </>
    )
}