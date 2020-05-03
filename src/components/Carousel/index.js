import React, {useRef} from "react";
import ReactCardCarousel from "react-card-carousel";
import {Box, Fab} from '@material-ui/core'
import {ChevronLeft, ChevronRight} from '@material-ui/icons';

import {projects} from "../../constants/projects";
import ProjectCard from "../ProjectCard";
import {useStyles} from './styles'

const Carousel = () => {
  const CarouselRef = useRef(null)
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Fab
        color="primary"
        aria-label="button-left"
        onClick={() => CarouselRef?.current?.prev()}
        className={classes.fab}
      >
        <ChevronLeft/>
      </Fab>
      <ReactCardCarousel
        ref={CarouselRef}
        disable_box_shadow={true}
        spread={'wide'}>
        {projects.map((props, index) => (<ProjectCard key={index} {...props}/>))}
      </ReactCardCarousel>
      <Fab
        color="primary"
        aria-label="button-right"
        onClick={() => CarouselRef?.current?.next()}
        className={classes.fab}
      >
        <ChevronRight/>
      </Fab>
    </Box>
  )
}

Carousel.displayName = 'Carousel'

export default Carousel