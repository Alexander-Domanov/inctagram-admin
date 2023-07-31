import { ChangeEvent, FC } from 'react'

import { useTranslation } from 'react-i18next'

import { PostStatusForPostsLisType, StatusSelectedType } from 'modules/posts'

export const StatusSelected: FC<StatusSelectedType> = ({ status, setStatus }) => {
  const { t } = useTranslation()
  const callBackOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value as PostStatusForPostsLisType)
  }

  return (
    <div className="flex justify-between flex-row-reverse pb-3 w-full h-full gap-8">
      <select
        className="bg-dark-500 align-bottom text-light-100 text-sm font-normal"
        value={status}
        onChange={e => callBackOnChange(e)}
      >
        <option value={PostStatusForPostsLisType.PUBLISHED}>{t('postsList.publishedPosts')}</option>
        <option value={PostStatusForPostsLisType.BANNED}>{t('postsList.bannedPosts')}</option>
      </select>
    </div>
  )
}
