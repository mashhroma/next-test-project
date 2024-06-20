import Heading from "@/components/Heading";
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { posts: data },
    }
}

export default function Posts({ posts }: { posts: Post[] }) {
    return (
        <>
            <Heading text="Posts" />
            <ul>
                {posts && posts.map(({ id, title }: Post) => <li key={id}>
                    <Link href={`/posts/${id}`}><strong>{title}</strong></Link>
                </li>)}
            </ul>
        </>
    )
}
