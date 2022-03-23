import React, { useEffect, useState } from 'react'
import HForm from '@components/primitives/form/form'
import {
  CreateAssessmentMutation,
  CreateAssessmentMutationVariables,
} from 'typings/graphql/CreateAssessmentMutation'
import ClassroomLayout from '../classroom-layout'
import StepProgress from '@components/primitives/step-progress/step-progress'
import { SubmitHandler } from 'react-hook-form'
import Button from '@components/primitives/button'
import { ChevronRightIcon } from '@heroicons/react/outline'
import AssessmentCreateForm from './forms/assessment-create-form'
import AddQuestionsForm from './forms/question-form'
import { useMutation } from '@apollo/client'
import { ASSESSMENT_CREATE_MUTATION } from '@modules/classroom/graphql/assessment-create-mutation'
import { toast } from 'react-toastify'

export default function AssessmentsCreateView() {
  const [step, setStep] = useState(0)
  const [assessmentCreateData, setAssessmentCreateData] = useState<
    Partial<CreateAssessmentMutationVariables>
  >({})

  const [createAssessment, { loading, reset }] = useMutation<
    CreateAssessmentMutation,
    CreateAssessmentMutationVariables
  >(ASSESSMENT_CREATE_MUTATION)

  const onDetailsSubmit: SubmitHandler<
    CreateAssessmentMutationVariables
  > = data => {
    setAssessmentCreateData(data)
    setStep(1)
  }

  const onQuestionsSubmit: SubmitHandler<
    CreateAssessmentMutationVariables
  > = async data => {
    const merged = { ...assessmentCreateData, ...data }
    setAssessmentCreateData(merged)

    try {
      await createAssessment({
        variables: {
          data: { ...merged.data },
        },
      })
      setStep(2)
    } catch (e) {
      toast.error(e.message)
    }

    reset()
  }

  return (
    <ClassroomLayout navHeading="Create Assessment">
      {step == 0 && (
        <div className="mx-auto w-96 min-h-[70vh]">
          <HForm<CreateAssessmentMutationVariables>
            onSubmit={onDetailsSubmit}
            hfOptions={{ defaultValues: assessmentCreateData }}
          >
            <AssessmentCreateForm />
            <Button
              type="submit"
              rightIcon={<ChevronRightIcon />}
              className="mt-8 self-end"
            >
              Next
            </Button>
          </HForm>
        </div>
      )}
      {step == 1 && (
        <div className="min-h-[70vh]">
          <HForm<CreateAssessmentMutationVariables>
            onSubmit={onQuestionsSubmit}
            hfOptions={{ defaultValues: assessmentCreateData }}
          >
            <AddQuestionsForm />
            <div className="flex justify-between mt-8">
              <Button variant="ghost" onClick={() => setStep(0)}>
                Back
              </Button>
              <Button
                type="submit"
                loading={loading}
                rightIcon={<ChevronRightIcon />}
              >
                Create
              </Button>
            </div>
          </HForm>
        </div>
      )}
      {step == 2 && (
        <div className="min-h-[70vh]">Assessment has been created</div>
      )}
      <div className="mx-auto">
        <StepProgress
          steps={[
            { label: 'Details' },
            { label: 'Questions' },
            { label: 'Finish' },
          ]}
          currentStep={step}
        />
      </div>
    </ClassroomLayout>
  )
}
