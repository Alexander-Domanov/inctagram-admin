import React, { FC, useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { useTranslation } from 'react-i18next'
import { FaChevronDown } from 'react-icons/fa6'

import styles from './LanguageSwitcher.module.scss'

import be from '@/assets/icons/flags/be.png'
import en from '@/assets/icons/flags/en.png'
import ru from '@/assets/icons/flags/ru.png'
import ukraine from '@/assets/icons/flags/ukraine.png'
import wookie from '@/assets/icons/flags/wookie.png'

interface Language {
  slug: string
  name: string
  flag: StaticImageData
}

const languages: Language[] = [
  { slug: 'en', name: 'English', flag: en },
  { slug: 'ru', name: 'Русский', flag: ru },
  { slug: 'uk', name: 'Українська', flag: ukraine },
  { slug: 'be', name: 'Беларуская', flag: be },
  { slug: 'wookie', name: 'Wookie', flag: wookie },
]

export const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation()
  const currentLanguage = languages.find(lang => lang.slug === i18n.language)
  const [isOpen, setIsOpen] = useState(false)

  const onOpenChange = (open: boolean) => {
    setIsOpen(open)
  }

  const onSelectLanguage = (slug: string) => {
    i18n.changeLanguage(slug)
  }

  return (
    <>
      <DropdownMenu.Root modal={false} onOpenChange={onOpenChange}>
        <DropdownMenu.Trigger asChild>
          <button className={styles.DropDownMenuTrigger}>
            <div className={styles.DropDownMenuFlag}>
              <Image src={currentLanguage!.flag} alt={currentLanguage!.name} />
            </div>

            {currentLanguage!.name}

            <FaChevronDown
              color="#fff"
              size={16}
              className={clsx('ml-auto', { 'rotate-180': isOpen })}
            />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            side={'bottom'}
            align={'start'}
            sideOffset={-1}
            className={styles.DropDownMenuContent}
          >
            {languages.map(lang => (
              <DropdownMenu.Item
                className={styles.DropDownMenuItem}
                onSelect={() => onSelectLanguage(lang.slug)}
                key={lang.slug}
              >
                <div className={styles.DropDownMenuFlag}>
                  <Image src={lang.flag} alt={lang.name} />
                </div>
                {lang.name}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  )
}
