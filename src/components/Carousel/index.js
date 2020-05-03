import React, {useRef} from "react";
import ReactCardCarousel from "react-card-carousel";
import {Box, Fab} from '@material-ui/core'
import {ChevronLeft, ChevronRight} from '@material-ui/icons';

import {projects} from "../../constants/projects";
import ProjectCard from "../ProjectCard";
import {useStyles} from './styles'
import {useProjectContext} from "../../hooks/useProject";

const Carousel = () => {
  const {setProjectIdx} = useProjectContext()
  const carouselRef = useRef(null)
  const classes = useStyles()

  const onBackClick = async () => {
    await carouselRef?.current?.prev()
    setProjectIdx(carouselRef?.current?.getCurrentIndex())
  }

  const onNextClick = async () => {
    await carouselRef?.current?.next()
    setProjectIdx(carouselRef?.current?.getCurrentIndex())
  }

  return (
    <Box className={classes.container}>
      <Fab
        color="primary"
        aria-label="button-left"
        onClick={onBackClick}
        className={classes.fab}
      >
        <ChevronLeft/>
      </Fab>
      <ReactCardCarousel
        ref={carouselRef}
        disable_box_shadow={true}
        spread={'wide'}>
        {projects.map((props, index) => (<ProjectCard key={index} {...props}/>))}
      </ReactCardCarousel>
      <Fab
        color="primary"
        aria-label="button-right"
        onClick={onNextClick}
        className={classes.fab}
      >
        <ChevronRight/>
      </Fab>
    </Box>
  )
}

Carousel.displayName = 'Carousel'

export default Carousel