import Heading from "@/components/Heading";
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { contacts: data },
    }
}

export default function Contacts({ contacts }: { contacts: Profile[] }) {
    return (
        <>
            <Heading text="Contacts" />
            <ul>
                {contacts && contacts.map(({ id, name, email }: Profile) => <li key={id}>
                    <Link href={`/contacts/${id}`}><strong>{name}</strong>({email})</Link>
                </li>)}
            </ul>
        </>
    )
}
