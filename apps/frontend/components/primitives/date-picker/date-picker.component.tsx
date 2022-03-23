import Dayzed, { Props } from 'dayzed'
import { HUMAN_DATE_ONLY_FORMAT } from 'lib/utils/date'
import moment from 'moment'
import { useState } from 'react'
import Input from '../input/input'
import Calendar from './calender.component'

type DatePickerProps = Omit<Props, 'render'>

export default function DatePicker({
  onDateSelected,
  ...props
}: DatePickerProps) {
  const [show, setShow] = useState(false)

  return (
    <div
      className="relative"
      onFocus={() => setShow(true)}
    >
      <Input
        value={moment(props.selected as Date).format(HUMAN_DATE_ONLY_FORMAT)}
      />
      {show && (
        <Dayzed
          {...props}
          onDateSelected={(date, event) => {
            setShow(false)
            return onDateSelected(date, event)
          }}
          render={dayzedData => <Calendar {...dayzedData} />}
        />
      )}
    </div>
  )
}
