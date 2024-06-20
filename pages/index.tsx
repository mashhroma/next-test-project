import Heading from "@/components/Heading";
import Socials from "@/components/Socials";
import { socials } from "./api/data/socials";

// export const getStaticProps = async () => {
//   const response = await fetch(`${process.env.API_HOST}/socials/`);
//   const data = await response.json();

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { socials: data },
//   }
// };

export default function Home() {
  return (
    <main>
      <Heading text='Main page' />
      <Socials socials={socials} />
    </main>
  );
}
