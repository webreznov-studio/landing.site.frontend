import styled from "styled-components";

export const OfferWrapper = styled.div`
    .offer {
        position: relative;
        padding-top: 100px;
        padding-bottom: 100px;
        .bg-op {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
        }
        .bg-bottom {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
        }
        .container {
            display: flex;
            justify-content: space-between;
            padding: 0 0 0 150px;
            .offer_block {
                width: 50%;
                padding-top: 70px;
                .offer_block_title {
                    font-size: 64px;
                    color: #ffffff;
                    span {
                        color: #d39c0f;
                    }
                }
                .offer_block_text {
                    font-size: 24px;
                }
                .offer_btn {
                    display: inline-flex;
                    align-items: center;
                    height: 82px;
                    border-radius: 54px;
                    padding: 13px 113px;
                    font-size: 24px;
                    color: #ffffff;
                    background: #d39c0f;
                    transition: all 0.3s ease-in-out;
                    &:hover {
                        cursor: pointer;
                        background: #ffb806;
                    }
                }
            }
            .offer_slider {
                position: relative;
                width: 50%;
                width: 620px;
                display: flex;
                align-items: flex-start;
                img.macbook {
                    width: 100%;
                    width: 620px;
                    height: 320px;
                }
            }
        }
    }

    @media all and (max-width: 1480px) {
        .offer {
            .container {
                .offer_block {
                    .offer_block_title {
                        font-size: 52px;
                    }
                    .offer_block_text {
                    }
                    .offer_btn {
                        height: 72px;
                    }
                }
            }
        }
    }
    @media all and (max-width: 1180px) {
        .offer {
            .container {
                justify-content: space-around;
                padding: 0 20px;
                .offer_block {
                    .offer_block_title {
                        font-size: 46px;
                    }
                    .offer_block_text {
                    }
                    .offer_btn {
                        height: 52px;
                    }
                }
            }
        }
    }
    @media all and (max-width: 991px) {
        .offer {
            .container {
                flex-direction: column;
                align-items: center;
                padding: 0 20px;
                padding-bottom: 120px;
                .offer_block {
                    width: 70%;
                    padding-top: 20px;
                    .offer_block_title {
                        font-size: 46px;
                    }
                    .offer_block_text {
                    }
                    .offer_btn {
                        height: 52px;
                    }
                }
            }
        }
    }
    @media all and (max-width: 768px) {
        .offer {
            padding-left: 50px;
            padding-right: 50px;
            overflow: hidden;
            .container {
                padding: 0 10px;
                padding-bottom: 120px;
                .offer_block {
                    width: 100%;
                    .offer_block_title {
                        font-size: 36px;
                    }
                    .offer_block_text {
                    }
                    .offer_btn {
                        font-size: 16px;
                        height: 42px;
                        padding: 13px 70px;
                    }
                }
                .offer_slider {
                    .mac_wrapper {
                        display: flex;
                        justify-content: center;
                        overflow-x: hidden;
                    }
                }
            }
        }
    }

    @media all and (max-width: 414px) {
        .offer {
            padding-left: 5px;
            padding-right: 5px;
        }
    }
`;
