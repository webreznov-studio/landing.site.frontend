import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Clock } from '../Clock';
import { SliderStyled } from './styles';

// const sliderStyle = {
//     position: 'absolute',
//     top: '57px',
//     left: '140px',
//     right: '143px',
// };

const carouselConfig = {
    autoPlay: true,
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    infiniteLoop: true,
    swipeable: true,
};

export const SliderPortfolio = () => {
    return (
        <SliderStyled>
            <div style={{width: '338px', height: '190px'}}>
                <Carousel {...carouselConfig}>
                    <div>
                        <img src="/portfolio/webreznov-1.jpg" alt="astrolog" />
                    </div>
                    <div>
                        <img src="/portfolio/webreznov-2.jpg" alt="astrolog" />
                    </div>
                    <div>
                        <img src="/portfolio/webreznov-3.jpg" alt="astrolog" />
                    </div>
                    <div>
                        <img src="/portfolio/webreznov-4.jpg" alt="astrolog" />
                    </div>
                    <div>
                        <img src="/portfolio/webreznov-5.jpg" alt="astrolog" />
                    </div>
                    <div>
                        <img src="/portfolio/webreznov-6.jpg" alt="astrolog" />
                    </div>
                </Carousel>
            </div>
            <div>
                <Clock />
            </div>
        </SliderStyled>
    );
};
