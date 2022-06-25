export interface ILessonProps {
  isLive?: boolean,
  isReleased?: boolean,
  title: string
  slug: string,
  availableAt: Date
}

export interface ILessonData extends ILessonProps {
  id: string,
  lessonType: 'live' | 'class'
}

export interface IGetLessonsQuery {
  lessons: Array<ILessonData>
}