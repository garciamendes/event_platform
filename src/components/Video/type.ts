export interface IVideoProps {
  lessonSlug: string
}

export interface IGetLessonBySlug {
  lesson: {
    title: string,
    videoId: string,
    description: string,
    teacher: {
      bio: string,
      avatarURL: string,
      name: string
    }
  }
}