import template from './appVehicle.template'
import styles from './appVehicle.styles'

export default () => {
    const tagName = 'app-vehicle'

    const state = {}

    return {
        tagName,
        state,
        template,
        styles
    }
}