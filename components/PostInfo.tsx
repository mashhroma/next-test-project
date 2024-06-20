import Heading from "./Heading";

export default function PostInfo({ post }: { post: Post }) {
    const { title, body } = post || {};

    if (!post) {
        return <Heading tag={'h3'} text='Empty contact' />
    }

    return (
        <>
            <Heading tag={'h3'} text={title} />
            <div>
                <strong>Post:</strong>
                {body}
            </div>
        </>
    )
}