import Heading from "@/components/Heading";
import ContactInfo from "@/components/contactInfo";

export const getServerSideProps = async (context: any) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { contact: data },
    }
}

export default function Contact({ contact }: { contact: Profile }) {
    return (
        <>
            <ContactInfo contact={contact} />
        </>
    )
}
