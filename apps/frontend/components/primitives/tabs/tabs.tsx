import * as TabsPrimitive from '@radix-ui/react-tabs'
import React from 'react'

function Tabs(props: TabsPrimitive.TabsProps) {
  return <TabsPrimitive.Root className="" {...props} />
}

function TabsTrigger(props: TabsPrimitive.TabsTriggerProps) {
  return <TabsPrimitive.Trigger className='px-4 py-2 border border-b-2 border-b-accent' {...props} />
}

function TabsList(props: TabsPrimitive.TabsListProps) {
  return <TabsPrimitive.List className="border-b" {...props} />
}

function TabsContent(props: TabsPrimitive.TabsContentProps) {
  return <TabsPrimitive.Content className='p-4' {...props} />
}

Tabs.Trigger = TabsTrigger
Tabs.List = TabsList
Tabs.Content = TabsContent

export default Tabs
