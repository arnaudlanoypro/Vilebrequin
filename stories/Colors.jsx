import React from 'react'
import PropTypes from 'prop-types'

const ColorShowcase = ({colors}) => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '30px'
    }

    const colorBoxStyle = {
        width: '100px',
        height: '50px',
        border: '1px solid rgba(49, 49, 49, 0.2)',
        borderRadius: '12px'
    }

    return (
        <div style={gridStyle}>
            {Object.entries(colors).map(([colorName, colorValue]) => (
                <div key={colorName} style={{textAlign: 'left'}}>
                    <div
                        style={{
                            ...colorBoxStyle,
                            backgroundColor: colorValue
                        }}
                    ></div>
                    <p
                        style={{
                            fontSize: '20px',
                            fontWeight: 600,
                            lineHeight: '30px',
                            textAlign: 'left'
                        }}
                    >
                        {colorName}
                    </p>
                    <p>{colorValue}</p>
                </div>
            ))}
        </div>
    )
}

ColorShowcase.propTypes = {
    colors: PropTypes.objectOf(PropTypes.string).isRequired
}

export default ColorShowcase
