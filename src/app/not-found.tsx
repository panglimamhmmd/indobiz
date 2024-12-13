import { Container } from '@/components/Container';
export default function Custom404() {
    return (
        <Container>
            <div className="text-center font-bold space-y-4 h-[60vh] justify-center  align-middle content-center">
                <h1 className="text-6xl font-bold text-orange">404</h1>
                <p className="text-2xl">Page Not Found</p>
                <p className="text-lg text-gray-500">
                    Oops.. The page you are looking for could not be found.
                </p>
            </div>
        </Container>
    );
}
