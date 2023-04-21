import IcoMoon from 'react-icomoon'
import iconSet from '../moonicons/selection.json'

/*icon, size, color, style, title, className, disableFill, removeInlineStyle, iconSet*/

export const Icon = (props) => {
  return <IcoMoon iconSet={iconSet} {...props} />
}
