import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { RenderProps } from 'dayzed'
import Button from '../button'
import IconButton from '../icon-button/icon-button'
import Input from '../input/input'

const weekdayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthNamesShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export default function Calendar({
  calendars,
  getBackProps,
  getForwardProps,
  getDateProps,
}: RenderProps) {
  if (calendars.length) {
    const calendar = calendars[0]

    return (
      <div className="absolute top-[calc(100%+10px)] w-full max-w-xs bg-white border select-none font-medium p-3 rounded-lg ">
        <div className="flex items-baseline justify-between">
          <IconButton
            icon={<ChevronLeftIcon />}
            {...getBackProps({ calendars })}
          />
          <div className="text-center font-bold mb-2">
            {monthNamesShort[calendar.month]} {calendar.year}
          </div>
          <IconButton
            icon={<ChevronRightIcon />}
            {...getForwardProps({ calendars })}
          />
        </div>
        <div className="mt-2" key={`${calendar.month}${calendar.year}`}>
          <div className="grid grid-cols-7 font-bold mb-1 text-gray-400 rounded-lg">
            {weekdayNamesShort.map(weekday => (
              <div
                key={`${calendar.month}${calendar.year}${weekday}`}
                className="p-2 "
              >
                {weekday}
              </div>
            ))}
          </div>
          {calendar.weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7">
              {week.map((dateObj, index) => {
                const key = `${calendar.month}${calendar.year}${weekIndex}${index}`

                if (!dateObj) {
                  return <div key={key} />
                }

                const { date, selected, selectable, today } = dateObj

                let backgroundClass = today
                  ? 'bg-accent bg-opacity-20 text-accent'
                  : ''
                backgroundClass = selected
                  ? 'bg-accent text-white font-bold'
                  : backgroundClass

                return (
                  <Button
                    variant="custom"
                    size="sm"
                    className={classNames(
                      'rounded-lg px-0 py-0 w-7 h-7 m-1 disabled:bg-transparent text-gray-500 font-medium text-center',
                      backgroundClass,
                    )}
                    disabled={!selectable}
                    key={key}
                    {...getDateProps({ dateObj })}
                  >
                    {date.getDate()}
                  </Button>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}
