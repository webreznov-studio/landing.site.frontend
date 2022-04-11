import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Header from '../components/Header/Header';
import {Offer} from '../components/Offer';
import Footer from '../components/Footer/Footer';
import SEO from '../components/seo';
import 'normalize.css';
import '../styles/common-style.css';
import { Projects } from '../components/Projects/Projects';

const queryClient = new QueryClient()

const IndexPage = () => {
    return (
        <>
            <SEO title='Студия веб-разработок - webreznov' />

            <Header />

            <Offer />

            <QueryClientProvider client={queryClient}>
                <Projects />
            </QueryClientProvider>

            <Footer />
        </>
    );
};

export default IndexPage;
