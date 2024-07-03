import React from 'react'
import PropTypes from 'prop-types'

const Typography = ({fonts}) => {
    return (
        <div>
            {fonts.map((font, index) => (
                <div key={index} style={{fontFamily: font}}>
                    <p style={{fontSize: '24px'}}>This is a sample text in {font}</p>
                </div>
            ))}
        </div>
    )
}

Typography.propTypes = {
    fonts: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Typography
