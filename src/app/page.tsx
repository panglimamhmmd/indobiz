import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { InfiniteLoop } from '@/components/Testimonials';
import { Cta } from '@/components/Cta';
import { Articles } from '@/components/ArticleSection';
import Services from '../components/Services';
import { InfiniteLoop1 } from '@/components/TrustedBy';
export default function Home() {
    return (
        <Container>
            <Hero />
            <InfiniteLoop1 />

            <Services />

            {/* client side rendering */}

            <InfiniteLoop />

            {/* client side rendering */}

            <Articles />

            <Cta />
        </Container>
    );
}
