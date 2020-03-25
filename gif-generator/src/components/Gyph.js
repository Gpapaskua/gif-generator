import React from 'react'
import classes from './Gyph.module.css'

const Gyph = (props) => {
    return (
        <div className={classes.Gyph}>
            <img src={props.gif.images.fixed_width_downsampled.url} crossOrigin="anonymous" alt="Not found" />
        </div>
    )
}

export default Gyph;