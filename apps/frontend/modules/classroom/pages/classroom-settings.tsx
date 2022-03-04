import React from "react"
import ClassroomLayout from "./classroom-layout"
import { useClassroomContext } from '../store/ClassroomContext'
import HForm from "@components/primitives/form/form"
import { HFInput } from "@components/primitives"
import FormGroup from "@components/primitives/form-group/form-group"
import

function ClassSettingsContent() {
  const { data } = useClassroomContext()

  const classDetails = {
    name: data?.classroom?.name,
    subject: data?.classroom?.subject,
    section: data?.classroom?.section,
  }
  return (
    <div className='flex'>
      <div className="w-[40rem] p-4 border rounded-lg bg-white mt-4">
          <h1 className="text-2xl font-bold mb-3">Class Details</h1>
          <ClassDetailsForm />
      </div>
      <div className="w-[40rem] p-4 border rounded-lg bg-white mt-4 ml-6">
          <h1 className="text-2xl font-bold mb-3">Invite Settings</h1>
          <InviteSettingsForm />
      </div>
    </div>
  )
}

function ClassDetailsForm () {
  return(
    <HForm>
      <div className="flex flex-col items-stretch w-[18] max-w-full">
      <FormGroup label="Class Name">
        <HFInput name="name" />
      </FormGroup>
      <FormGroup label="Subject">
        <HFInput name="subject" />
      </FormGroup>
      <FormGroup label="section">
        <HFInput name="section" className=""/>
      </FormGroup>
      </div>
    </HForm>
  )
}

function InviteSettingsForm() {
  return (
    <HForm>
      <div className="flex flex-col items-stretch w-[18] max-w-full">
      <FormGroup label="Manage Invite Settings">
        <HFInput name="name" />
      </FormGroup>
      <FormGroup label="Invite Link">
        <HFInput name="subject" />
      </FormGroup>
      <FormGroup label="Invite Code">
        <HFInput name="section" className=""/>
      </FormGroup>
      <FormGroup label="Class View">
        <HFInput name="section" className=""/>
      </FormGroup>
      </div>
    </HForm>
  )
}

export default function ClassSettings() {
  return (
    <ClassroomLayout>
      <ClassSettingsContent />
    </ClassroomLayout>
  )
}
