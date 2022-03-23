import { HFAdvancedTextEditor } from '@components/molecules/advanced-text-editor/advanced-text-editor'
import { HFInput } from '@components/primitives'
import Button from '@components/primitives/button'
import { HFCodeEditor } from '@components/primitives/code-editor/code-editor'
import FormGroup from '@components/primitives/form-group/form-group'
import Modal from '@components/primitives/modal/modal'
import { HFSelect } from '@components/primitives/select/select.component'
import { HFTextArea } from '@components/primitives/textarea/textarea'
import Query from '@components/templates/Query'
import { TrashIcon, PencilIcon } from '@heroicons/react/outline'
import { LANGUAGE_QUERY } from 'graphql/queries/language-query'
import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { CreateAssessmentMutationVariables } from 'typings/graphql/CreateAssessmentMutation'
import { EvaluationCriteriaType, ProgrammingQuestionType } from 'typings/graphql/globalTypes'
import { Languages } from 'typings/graphql/Languages'

type F = CreateAssessmentMutationVariables

function DefaultCodeForm({
  path,
}: {
  path: `data.questions.${number}.programmingQuestion.singleFileProgrammingQuestion.defaultCodes`
}) {
  const { control, watch } = useFormContext<F>()
  const { fields, update, remove } = useFieldArray({
    name: path,
    control,
  })

  const [selectedIndex, setSelectedIndex] = React.useState<number>()
  const existingLangauges = watch(path)
  const selectedIndexData = watch(`${path}.${selectedIndex}`)

  return (
    <Query<Languages> query={LANGUAGE_QUERY} >
      {({ languages }) => (
        <div className="mt-3">
          <h4 className="text-md font-bold mb-2">Default Code (required)</h4>
          {fields.map((data, i) => (
            <div
              key={data.id}
              className="flex bg-white py-1 px-2 text-sm items-center w-72 border-2 rounded-lg mb-1 justify-between"
            >
              <span className="font-medium">
                {languages.find(language => language.id === data.languageId)
                  ?.name || 'Untitled'}{' '}
              </span>
              <div className="flex gap-1">
                <Button
                  size="sm"
                  icon={<PencilIcon />}
                  onClick={() => setSelectedIndex(i)}
                />
                <Button
                  size="sm"
                  icon={<TrashIcon />}
                  variant="danger"
                  onClick={() => remove(i)}
                />
              </div>
            </div>
          ))}
          <Button
            size="sm"
            className="mt-1"
            onClick={() => {
              setSelectedIndex(fields.length)
            }}
          >
            Add New Language
          </Button>
          <Modal
            isOpen={selectedIndex !== undefined}
            onClose={() => setSelectedIndex(undefined)}
            title="Edit Default Code"
          >
            <div className="mt-3">
              <FormGroup label="Language">
                <HFSelect<F>
                  name={`${path}.${selectedIndex}.languageId`}
                  options={languages
                    .filter(
                      language =>
                        !existingLangauges?.find(
                          value => value.languageId === language.id
                        ) || language.id === selectedIndexData?.languageId
                    )
                    .map(language => ({
                      label: language.name,
                      value: language.id,
                    }))}
                />
              </FormGroup>
              <div className="h-[250px] mt-2">
                <HFCodeEditor<F>
                  name={`${path}.${selectedIndex}.defaultCode`}
                  language={
                    languages.find(
                      language => language.id === selectedIndexData?.languageId
                    )?.editorConfigName
                  }
                />
              </div>
              <Button
                className="mt-3"
                onClick={() => {
                  update(selectedIndex, selectedIndexData)
                  setSelectedIndex(undefined)
                }}
              >
                Save
              </Button>
            </div>
          </Modal>
        </div>
      )}
    </Query>
  )
}

function EvaulationCriteriaForm({
  path,
}: {
  path: `data.questions.${number}.programmingQuestion.evaluationCriteria`
}) {
  const { control, watch } = useFormContext<F>()
  const { update, fields, remove } = useFieldArray({
    name: path,
    control,
  })
  const [selectedIndex, setSelectedIndex] = React.useState<number>()
  const selectedIndexData = watch(`${path}.${selectedIndex}`)

  return (
    <div className="mt-3">
      <h4 className="text-md font-bold mb-2">Evaulation Criteria</h4>
      {fields.map((data, i) => (
        <div
          key={data.id}
          className="flex bg-white py-1 px-2 text-sm items-center w-72 border-2 rounded-lg mb-1 justify-between"
        >
          <span className="font-medium">
            {data.name || 'Untitled'}{' '}
            <span className="text-slate-400 text-sm">{data.type}</span>
          </span>
          <div className="flex gap-1">
            <Button
              size="sm"
              icon={<PencilIcon />}
              onClick={() => setSelectedIndex(i)}
            />
            <Button
              size="sm"
              icon={<TrashIcon />}
              variant="danger"
              onClick={() => remove(i)}
            />
          </div>
        </div>
      ))}
      <Button
        size="sm"
        className="mt-1"
        onClick={() => {
          setSelectedIndex(fields.length)
        }}
      >
        Add Evaulation Criteria
      </Button>
      <Modal
        isOpen={selectedIndex !== undefined}
        onClose={() => setSelectedIndex(undefined)}
        title="Edit Evaulation Criteria"
      >
        <div className="mt-3">
          <FormGroup label="Title">
            <HFInput<F>
              name={`${path}.${selectedIndex}.name`}
              placeholder="Title"
            />
          </FormGroup>
          <FormGroup label="Points">
            <HFInput<F>
              name={`${path}.${selectedIndex}.totalPoints`}
              placeholder="Points"
              type="number"
            />
          </FormGroup>
          <FormGroup label="Type">
            <HFSelect<F>
              name={`${path}.${selectedIndex}.type`}
              options={[
                {
                  label: 'Input/Output Check',
                  value: EvaluationCriteriaType.INPUT_OUTPUT,
                },
                {
                  label: 'Plagiarsum Check',
                  value: EvaluationCriteriaType.PLAG_CHECK,
                },
              ]}
            />
          </FormGroup>
          {selectedIndexData?.type === EvaluationCriteriaType.INPUT_OUTPUT && (
            <>
              <FormGroup label="Input">
                <HFTextArea<F>
                  name={`${path}.${selectedIndex}.inputOutputEvaluationCriteria.inputs`}
                />
              </FormGroup>
              <FormGroup label="Execpted Output">
                <HFTextArea<F>
                  name={`${path}.${selectedIndex}.inputOutputEvaluationCriteria.outputs`}
                />
              </FormGroup>
            </>
          )}
          <Button
            className="mt-3"
            onClick={() => {
              update(selectedIndex, selectedIndexData)
              setSelectedIndex(undefined)
            }}
          >
            Save
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default function ProgrammingQuestionForm({ index }: { index: number }) {
  return (
    <>
      <FormGroup label="Question Title">
        <HFInput<F>
          name={`data.questions.${index}.programmingQuestion.title`}
          placeholder="Title of question"
        />
      </FormGroup>
      <HFInput<F>
        name={`data.questions.${index}.programmingQuestion.programmingQuestionType`}
        type="hidden"
        value={ProgrammingQuestionType.SINGLE_FILE}
      />
      <FormGroup label="Question Points">
        <HFInput<F>
          name={`data.questions.${index}.points`}
          placeholder="Points"
          type="number"
        />
      </FormGroup>

      <FormGroup label="Question Statement">
        <HFAdvancedTextEditor<F>
          name={`data.questions.${index}.programmingQuestion.statementMrkdwn`}
        />
      </FormGroup>
      <div className="flex gap-10">
        <EvaulationCriteriaForm
          path={`data.questions.${index}.programmingQuestion.evaluationCriteria`}
        />
        <DefaultCodeForm
          path={`data.questions.${index}.programmingQuestion.singleFileProgrammingQuestion.defaultCodes`}
        />
      </div>
    </>
  )
}
