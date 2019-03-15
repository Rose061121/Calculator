import React, { Component } from 'react'
import StyleGuide from '../StyleGuide'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {

        const styles = {
            container: {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: 200
            },
            rowContainer: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
                color: StyleGuide.pallette.grey,
                textAlign: 'center'
            },
            num: {
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: StyleGuide.pallette.grey,
                fontSize: 40,
                width: '10%',
                backgroundColor: StyleGuide.pallette.pink
            },
            operator: {
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: StyleGuide.pallette.grey,
                fontSize: 40,
                width: '10%',
                backgroundColor: StyleGuide.pallette.turquiose
            }
        }

        return (
            <div style={styles.container}>
                <div style={styles.rowContainer}>
                <div style={styles.num}>7</div>
                <div style={styles.num}>8</div>
                <div style={styles.num}>9</div>
                <div style={styles.operator}>+</div>
                </div>
                <div style={styles.rowContainer}>
                <div style={styles.num}>4</div>
                <div style={styles.num}>5</div>
                <div style={styles.num}>6</div>
                <div style={styles.operator}>-</div>
                </div>
                <div style={styles.rowContainer}>
                <div style={styles.num}>1</div>
                <div style={styles.num}>2</div>
                <div style={styles.num}>3</div>
                <div style={styles.operator}>*</div>
                </div>
                <div style={styles.rowContainer}>
                <div style={styles.num}>0</div>
                <div style={styles.operator}>CLEAR</div>
                <div style={styles.operator}>=</div>
                <div style={styles.operator}>/</div>
                </div>
            </div>
        )
    }
}

export default Home
