import React from 'react';
import macbook from '../../images/macbook.png';
import bgBottom from '../../images/wave-black.png';
import bgTop from '../../images/Rectangle11min.png';
import { SliderPortfolio } from '../SliderPortfolio';
import { OfferWrapper } from './styles';

export const Offer = () => (
    <OfferWrapper>
        <section className="offer">
            <img className="bg-op" src={bgTop} alt="bg-top" />
            <div className="container">
                <div className="offer_block">
                    <h3 className="offer_block_title">
                        Frontend <span>разработчик</span> <span>Ремизов</span> Максим
                    </h3>
                    <p className="offer_block_text">Опыт работы более 4 лет</p>

                    <div className="offer_special">
                        <h3 className="offer_special-title">Ключевые навыки:</h3>
                        <p className="offer_special-text">Javascript, html, css</p>
                        <p className="offer_special-text">React, Typescript, styled-components</p>
                        <p className="offer_special-text">Адаптивная верстка, верстка email писем</p>
                        <h3 className="offer_special-title">Дополнительно:</h3>
                        <p className="offer_special-text">Vue, vuex nodejs, express js, postgresql</p>
                        <p className="offer_special-text">навыки деплоя приложений на heroku / netlify / github pages</p>
                    </div>
                </div>
                <div className="offer_slider">
                    <img src={macbook} className="macbook" alt="slider-bg" />
                    <SliderPortfolio />
                </div>
            </div>
            <img className="bg-bottom" src={bgBottom} alt="bg-bottom" />
        </section>
    </OfferWrapper>
);
