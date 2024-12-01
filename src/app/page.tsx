import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { InfiniteLoop } from '@/components/Testimonials';
import { Cta } from '@/components/Cta';
import { Articles } from '@/components/ArticleSection';
import Services from '../components/Services';
export default function Home() {
    return (
        <>
            <Hero />
            <Container>
                <Services />
            </Container>
            {/* client side rendering */}
            <Container>
                <InfiniteLoop />
            </Container>
            {/* client side rendering */}
            <Container>
                <Articles />
            </Container>
            <Container>
                <Cta />
            </Container>
            {/* <Container>
                <Faq />
            </Container> */}

            {/* <SectionTitle
                preTitle="Nextly Benefits"
                title=" Why should you use this landing page"
            >
                Nextly is a free landing page & marketing website template for
                startups and indie projects. Its built with Next.js &
                TailwindCSS. And its completely open-source.
            </SectionTitle> */}

            {/* <Benefits data={benefitOne} />
            <Benefits imgPos="right" data={benefitTwo} />

            <SectionTitle
                preTitle="Watch a video"
                title="Learn how to fullfil your needs"
            >
                This section is to highlight a promo or demo video of your
                product. Analysts says a landing page with video has 3% more
                conversion rate. So, don&apos;t forget to add one. Just like
                this.
            </SectionTitle>

            <Video videoId="fZ0D0cnR88E" />

            <SectionTitle
                preTitle="Testimonials"
                title="Here's what our customers said"
            >
                Testimonials is a great way to increase the brand trust and
                awareness. Use this section to highlight your popular customers.
            </SectionTitle>

            <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
                Answer your customers possible questions here, it will increase
                the conversion rate as well as support or chat requests.
            </SectionTitle> */}
        </>
    );
}
