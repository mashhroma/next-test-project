type Head = {
    tag?: any,
    text: string
};

export default function Heading({ tag = 'h1', text }: Head) {
    const Tag = tag;
    return (
        <Tag>{text}</Tag>
    )
}
