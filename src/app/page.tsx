import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { InfiniteLoop } from '@/components/Testimonials';
import { Cta } from '@/components/Cta';
import { Articles } from '@/components/ArticleSection';
import Services from '../components/Services';
import { InfiniteLoop1 } from '@/components/TrustedBy';
import { getAllPosts } from '@/utils/GetPost';
import { dir } from 'console';
export default async function Home() {
    return (
        <Container>
            <Hero />
            <InfiniteLoop1 />
            <Services />
            <InfiniteLoop />

            <Articles />
            <Cta />
        </Container>
    );
}
