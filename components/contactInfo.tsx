import Heading from "./Heading";

export default function ContactInfo({ contact }: { contact: Profile }) {
    const { name, email, address } = contact || {};
    const { street, suite, city, zipcode } = address || {}

    if (!contact) {
        return <Heading tag={'h3'} text='Empty contact' />
    }

    return (
        <>
            <Heading tag={'h3'} text={name} />
            <div>
                <strong>Email</strong>
                {email}
            </div>
            <div>
                <strong>Address</strong>
                {street}, {suite} {city}, {zipcode}
            </div>
        </>
    )
}