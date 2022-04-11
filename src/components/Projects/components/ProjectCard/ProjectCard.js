import React from "react";
import {Anchor, Box, Card, CardBody, CardFooter, CardHeader, Markdown, Tag} from "grommet";
import { shortText } from "../../../../utils/utils";
import temp from '../../../../images/logo.png';

export const ProjectCard = ({data}) => {
    const {id, projectName, description, tools, links, images} = data;
    const imagesArr = images.split(',');
    const mapToolsToCard = tools.split(',').map((el, i) => {
        const color = ['#00873D', '#3D138D', '#00739D', '#A2423D'];
        return (
            <Tag name={el} size='small' background={color[i]} key={id+i}/>
        )
    });
    const mapLinksToCard = links && links.length && links.split(',').map((i) => (
        <React.Fragment key={i+id}>
            <Anchor href={i} label={shortText(20, i)} target='_blank' />
        </React.Fragment>
    ))
    const ref = React.useRef();
    return (
        <Card height="" width="medium" background="light-1">
            <CardHeader pad="medium">
                <h3>{projectName}</h3>
            </CardHeader>
            <CardBody pad="medium">
                <Box background={!imagesArr[0] && '#1b1b1b'} width={'200px'} align='center'>
                    <img src={imagesArr[0] || temp} width={'180'} alt={`${description}`} />
                </Box>
                <Markdown ref={ref}>
                    {description}
                </Markdown>
                <Box>
                    {mapLinksToCard}
                </Box>
            </CardBody>
            <CardFooter pad="medium">
                <Box gap="small" direction="row" wrap>
                    {mapToolsToCard}
                </Box>
            </CardFooter>
        </Card>
    )
};
