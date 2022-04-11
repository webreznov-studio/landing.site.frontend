import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    max-width: 1080px;
    margin: 50px auto;
`;

export const CardWrapper = styled.div`/** don't using now */
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    @media all and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
