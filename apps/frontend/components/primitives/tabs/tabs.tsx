import * as TabsPrimitive from '@radix-ui/react-tabs'
import classNames from 'classnames'
import React from 'react'
import styles from './tabs.module.scss'

function Tabs(props: TabsPrimitive.TabsProps) {
  return <TabsPrimitive.Root {...props} />
}

function TabsTrigger(props: TabsPrimitive.TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={classNames(
        'border-b  px-4 py-4 uppercase font-semibold text-gray-400',
        styles.tabOnActive
      )}
      {...props}
    />
  )
}

function TabsList(props: TabsPrimitive.TabsListProps) {
  return <TabsPrimitive.List className="border-b" {...props} />
}

function TabsContent(props: TabsPrimitive.TabsContentProps) {
  return <TabsPrimitive.Content className="p-4" {...props} />
}

Tabs.Trigger = TabsTrigger
Tabs.List = TabsList
Tabs.Content = TabsContent

export default Tabs
