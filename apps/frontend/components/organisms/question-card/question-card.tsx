import Avatar from '@components/primitives/avatar';
import Tag from '@components/primitives/tag/tag';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/outline';
import './question-card.module.scss';

/* eslint-disable-next-line */
export interface QuestionCardProps {}

export function QuestionCard(props: QuestionCardProps) {
  const iconSizeClass =
    'h-8 w-8 p-2 hover:bg-gray-200 cursor-pointer rounded-full active:bg-gray-300';

  return (
    <div className="border p-5 rounded-lg">
      <div className="flex gap-4">
        <div className="flex items-center flex-col">
          <Avatar name="TB" />
          <div className="mt-4 text-center">
            <div className={iconSizeClass}>
              <ArrowUpIcon />
            </div>
            <span className="text-lg font-bold text-gray-600">24</span>
            <div className={iconSizeClass}>
              <ArrowDownIcon />
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs text-gray-500">
            Posted on 24th Mar, 2021
          </span>
          <h2 className="text-xl font-bold">
            What is the best way to learn React?
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat repellat, culpa voluptatum non nobis quis iusto inventore, commodi quod reiciendis asperiores amet a cum deleniti dignissimos minus, saepe harum eius.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag>#react</Tag>
            <Tag>#learning</Tag>
            <Tag>#beginner</Tag>
            <Tag>#aelp</Tag>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
