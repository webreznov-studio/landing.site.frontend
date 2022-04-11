import React, {useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Header from '../components/Header/Header';
import {Offer} from '../components/Offer';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import Popup from '../components/Popup/Popup';
import SEO from '../components/seo';
import 'normalize.css';
import '../styles/common-style.css';
import {FormRequest} from '../components/FormRequest';
import { Projects } from '../components/Projects/Projects';

const queryClient = new QueryClient()

const IndexPage = () => {
    const [showPopup, toShowPopup] = useState(false);
    const [infoText, setInfoText] = useState('main screen request');
    return (
        <>
            <SEO title='Студия веб-разработок - webreznov' />

            <Popup show={showPopup} setShow={toShowPopup} info={infoText} />

            <Header />

            <Offer setShow={toShowPopup} />

            <Services setShow={toShowPopup} setInfo={setInfoText} />

            <FormRequest />

            <QueryClientProvider client={queryClient}>
                <Projects />
            </QueryClientProvider>

            <Footer />
        </>
    );
};

export default IndexPage;
