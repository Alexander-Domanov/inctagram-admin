import { LocaleType } from './en'

export const ru: LocaleType = {
  translation: {
    navigation: {
      statistics: 'Статистика',
      userList: 'Список пользователей',
      postList: 'Список постов',
      paymentsList: 'Список платежей',
      logout: 'Выйти',
    },
    login: { signIn: 'Войти', email: 'Электронная почта', password: 'Пароль' },
    userInfo: {
      userInfoMain: {
        backUsersList: 'Вернуться к списку пользователей',
        linkProfile: 'Ссылка на профиль',
        userID: 'Идентификатор пользователя',
        profileCreationDate: 'Дата создания профиля',
      },
      tabs: {
        uploadPhotos: 'Загрузить фото',
        payments: 'Платежи',
        followers: 'Подписчики',
        following: 'Подписки',
      },
    },
    postsList: {
      publishedPosts: 'Опубликованные посты',
      bannedPosts: 'Заблокированные посты',
      banPost: 'Заблокировать пост',
      unbanPost: 'Разблокировать пост',
      post: {
        showMore: 'Показать больше',
        showHide: 'Cкрыть',
      },
      ban: {
        title: 'Блокировка поста',
        description: 'Вы уверены, что хотите заблокировать этот пост?',
        cancel: 'Нет',
        confirm: 'Да',
        reason: {
          title: 'Причина блокировки:',
          ANOTHER_REASON: 'Другая причина',
          SEXUAL_CONTENT: 'Сексуальный контент',
          VIOLENCE_AND_CRUELTY: 'Насилие и жестокость',
          DISCRIMINATION_AND_HATE: 'Дискриминация и ненависть',
          SPAM_AND_SCAMS: 'Спам и мошенничество',
          COPYRIGHT_INFRINGEMENT: 'Нарушение авторских прав',
          INAPPROPRIATE_BEHAVIOR: 'Неуместное поведение',
          PRIVACY_VIOLATION: 'Нарушение конфиденциальности',
          ILLEGAL_ACTIVITIES: 'Противозаконная деятельность',
          SHOCKING_OR_DISTURBING_CONTENT: 'Шокирующий или тревожный контент',
          CONTROVERSIAL_TOPICS: 'Контроверзные темы',
        },
      },
      unban: {
        title: 'Разбанить Пост',
        description: 'Вы уверены, что хотите разбанить этот пост?',
        cancel: 'Нет',
        confirm: 'Да',
      },
    },
    userList: {
      deleteUser: 'Удалить пользователя',
      banUser: 'Заблокировать в системе',
      unbanUser: 'Разблокировать пользователя',
      moreInfo: 'Больше информации',
      search: 'Поиск',
      notSelected: 'Не выбрано',
      notBlocked: 'Не заблокировано',
      blocked: 'Заблокировано',
      show: 'Показать',
      onPage: 'на странице',
      table: {
        profileLink: 'Ссылка на профиль',
        username: 'Имя пользователя',
        userId: 'ID пользователя',
        dateAdded: 'Дата добавления',
      },
      ban: {
        title: 'Заблокировать пользователя',
        description: 'Вы уверены, что хотите заблокировать пользователя',
        cancel: 'Нет',
        confirm: 'Да',
        reason: {
          title: 'Причина блокировки',
          anotherReason: 'Другая причина',
          behavior: 'Плохое поведение',
          advertising: 'Размещение рекламы',
          add: 'Добавьте причину',
        },
      },
      unban: {
        title: 'Разблокировать пользователя',
        description: 'Вы уверены, что хотите разблокировать пользователя',
        cancel: 'Нет',
        confirm: 'Да',
      },
      delete: {
        title: 'Удалить пользователя',
        description: 'Вы уверены, что хотите удалить пользователя',
        cancel: 'Нет',
        confirm: 'Да',
      },
    },
    datePicker: {
      monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    },
    statistics: {
      dateRange: 'Период',
      comparedPeriod: 'Сравниваемый период',

      users: {
        users: 'Пользователи',
        newUsers: 'Новые пользователи',
        paidAccounts: 'Платные аккаунты',
      },
      photos: {
        photos: 'Фотографии',
        uploadedPhotos: 'Загруженные фотографии',
      },
    },
  },
}
