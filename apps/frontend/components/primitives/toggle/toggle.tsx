import * as TogglePrimitive from '@radix-ui/react-toggle'
import classNames from 'classnames'
import styles from './toggle.module.scss'

export default function Toggle(props: TogglePrimitive.ToggleProps) {
  return (
    <TogglePrimitive.Root className={classNames(styles.toggleOn, 'p-2 rounded-lg')} {...props} >
      {props.children}
    </TogglePrimitive.Root>
  )
}
