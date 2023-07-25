import { formatDistance, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { PostsItemsType } from '@/modules/posts/type/postsType'
import { Avatar } from '@/ui'
import { IconStatus, localTimeDisplayLanguageInThePost, PostsActionsDropDown } from 'modules/posts'

export const Post = ({
  post,
  showMore,
  setShowMoreId,
  getStatusColor,
}: {
  post: PostsItemsType
  showMore: boolean
  getStatusColor: (status: string) => string
  setShowMoreId: (postId: number) => void
}) => {
  const { t, i18n } = useTranslation()
  const locale: Locale | undefined = localTimeDisplayLanguageInThePost[i18n.language]

  return (
    <>
      <div className="max-w-56 flex flex-col h-auto">
        <div className="w-full">
          <Image
            className="bg-dark-300"
            width={234}
            height={240}
            src={post.urlsPostsImages ? post.urlsPostsImages[0] : ''}
            alt={'Post image'}
            priority={true}
          />
          <div className="flex flex-wrap pt-1.5 gap-1 justify-between">
            <div className="flex w-full h-full flex-wrap gap-3 align-middle">
              <Avatar
                className="cursor-default"
                src={post.urlAvatar ? post.urlAvatar : null}
                alt={'user avatar'}
                height={36}
                width={36}
              />
              <Link href={`/users/` + post.userId}>
                <span className="font-semibold leading-6 text-base">{post.userName}</span>
              </Link>
            </div>
            <div className="flex flex-row  w-full justify-between">
              <span className="flex align-middle gap-1">
                <IconStatus styleColor={getStatusColor(post.status)} />
              </span>
              <PostsActionsDropDown post={post} />
            </div>
          </div>
          <span className="pt-3 font-normal text-light-100 leading-4 text-xs">
            {formatDistance(parseISO(post.createdAt), new Date(), {
              addSuffix: true,
              locale: locale,
            })}
          </span>
          <p className="text-sm text-light-100 break-words max-w-full leading-6 font-normal">
            {/* eslint-disable-next-line no-nested-ternary */}
            {post.description ? (
              showMore ? (
                post.description
              ) : (
                <span>{post.description.substring(0, 83)}</span>
              )
            ) : (
              <span className="text-base font-normal leading-6">No description </span>
            )}
            <button className="text-accent-700 pl-1" onClick={() => setShowMoreId(post.postId)}>
              {showMore ? t('postsList.post.showHide') : t('postsList.post.showMore')}
            </button>
          </p>
        </div>
      </div>
    </>
  )
}
