import { Box, Grid, Spinner } from "grommet";
import React from "react";
import { useQuery } from "react-query";
import { getProjects } from "./api";
import { ProjectCard } from "./components/ProjectCard";
import { Title } from "./components/Title/Title";
import { Wrapper } from "./styles";

export const Projects = () => {
    const { data, isLoading, isError } = useQuery('projects', getProjects, {
        keepPreviousData: true,
        refetchOnReconnect: false,
    });

    if (isError) return (<Wrapper><p>Ошибка</p></Wrapper>);
    if (isLoading) return (
        <Wrapper>
            <Spinner size="medium" />
        </Wrapper>
    );

    const mapDataToClient = data && data.length && data.map((i) => (<ProjectCard data={i} key={Math.random()} />));

    return (
        <>
            <Wrapper>
                <Title />
                <Box animation={{type: 'zoomIn', duration: 2000}}>
                    <Grid columns='small' gap='medium' >
                        {data && data.length && mapDataToClient[2]}
                    </Grid>
                </Box>
            </Wrapper>
        </>
    )
};
