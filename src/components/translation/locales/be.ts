import { LocaleType } from '@/components'

export const be: LocaleType = {
  translation: {
    navigation: {
      statistics: 'Статыстыка',
      users: 'Карыстальнікі',
      posts: 'Паведамленні',
      payments: 'Плацяжы',
      logout: 'Выйсці',
    },
    login: { signIn: 'Увайсці', email: 'Электронная пошта', password: ' Пароль' },
    userInfo: {
      userInfoMain: {
        backUsersList: 'Вярнуцца да спiсу карыстальнiкоў',
        linkProfile: 'Спасылка на прафайл',
        userID: 'Ідэнтыфікатар карыстальнiка',
        profileCreationDate: 'Дата стварэння прафайла',
      },
      tabs: {
        uploadPhotos: 'Загружаныя фатаграфіі',
        payments: 'Аплата',
        followers: 'Наконт',
        following: 'Сачыць',
      },
      userPaymentsTable: {
        dataOfPayment: 'Дата аплаты',
        endDateOfSubscription: 'Крайнi тэрмiн падпiскi',
        price: 'Кошт',
        subscription: 'Тып падпiскi',
        paymentType: 'Метад аплаты',
      },
      userFollowersTable: {
        userId: 'Ідэнтыфікатар карыстальніка',
        fullName: 'Поўнае імя',
        userName: 'Імя карыстальніка',
        subscriptionDate: 'Дата падпіскі',
      },
      userFollowingTable: {
        userId: 'Ідэнтыфікатар карыстальніка',
        fullName: 'Поўнае імя',
        userName: 'Імя карыстальніка',
        subscriptionDate: 'Дата падпiскi',
      },
    },
    postsList: {
      publishedPosts: 'Опубликованные посты',
      bannedPosts: 'Заблокированные посты',
      banPost: 'Заблокировать пост',
      unbanPost: 'Разблокировать пост',
      selectedBox: 'Аўтаматычнае абнаўленне',
      post: {
        showMore: 'Паказаць больш',
        showHide: 'Схаваць',
        description: 'Апісанне адсутнічае',
      },
      ban: {
        title: 'Блокировка поста',
        description: 'Вы уверены, что хотите заблокировать этот пост?',
        cancel: 'Нет',
        confirm: 'Да',
        reason: {
          title: 'Причина блокировки',
          ANOTHER_REASON: 'Другая причина',
          SEXUAL_CONTENT: 'Сексуальный контент',
          VIOLENCE_AND_CRUELTY: 'Насилие и жестокость',
          DISCRIMINATION_AND_HATE: 'Дискриминация и ненависть',
          SPAM_AND_SCAMS: 'Спам и мошенничество',
          COPYRIGHT_INFRINGEMENT: 'Нарушение авторских прав',
          INAPPROPRIATE_BEHAVIOR: 'Неуместное поведение',
          PRIVACY_VIOLATION: 'Нарушение конфиденциальности',
          ILLEGAL_ACTIVITIES: 'Противоправная деятельность',
          SHOCKING_OR_DISTURBING_CONTENT: 'Шокирующий или тревожный контент',
          CONTROVERSIAL_TOPICS: 'Контроверзные темы',
        },
      },
      unban: {
        title: 'Разбанить сообщение',
        description: 'Вы уверены, что хотите разбанить это сообщение',
        cancel: 'Нет',
        confirm: 'Да',
      },
    },
    userList: {
      deleteUser: 'Выдаліць карыстальніка',
      banUser: 'Заблакаваць у сістэме',
      unbanUser: 'Разблакаваць карыстальніка',
      moreInfo: 'Больш інфармацыі',
      search: 'Пошук',
      all: 'Усе',
      banned: 'Заблакіраваныя',
      active: 'Актыўныя',
      pending: 'Непацверджаныя',
      show: 'Паказаць',
      onPage: 'на старонцы',
      table: {
        profileLink: 'Спасылка на профіль',
        username: 'Імя карыстальніка',
        userId: 'ID',
        dateAdded: 'Дата дадання',
        fullName: 'Поўнае імя',
        lastSeen: 'Апошні раз',
      },
      ban: {
        title: 'Заблакаваць карыстальніка',
        description: 'Ці ўпэўненыя, што хочаце заблакаваць гэтага карыстальніка',
        cancel: 'Не',
        confirm: 'Так',
        reason: {
          title: 'Прычына блакавання',
          anotherReason: 'Іншая прычына',
          behavior: 'Паганае паводзіны',
          advertising: 'Размяшчэнне рэкламы',
          add: 'Дадайце прычыну',
        },
      },
      unban: {
        title: 'Разблакаваць карыстальніка',
        description: 'Ці ўпэўненыя, што хочаце разблакаваць карыстальніка',
        cancel: 'Не',
        confirm: 'Так',
      },
      delete: {
        title: 'Выдаліць карыстальніка',
        description: 'Ці ўпэўненыя, што хочаце выдаліць карыстальніка',
        cancel: 'Не',
        confirm: 'Так',
      },
    },
    datePicker: {
      monthNames: [
        'Студзень',
        'Люты',
        'Сакавік',
        'Красавік',
        'Май',
        'Чэрвень',
        'Ліпень',
        'Жнівень',
        'Верасень',
        'Кастрычнiк',
        'Лiстапад',
        'Снежань',
      ],
      dayNamesShort: ['Нд', 'Пн', 'Аў', 'Ср', 'Чц', 'Пт', 'Сб'],
      NumberDayOfSelected: 'Колькасць абраных дзён:',
    },
    statistics: {
      dateRange: 'Дыяпазон дат',
      comparedPeriod: 'Параўнальны перыяд',
      error: 'максімальная колькасць дзён: ',
      comparedError: 'Колькасць дзён павінна быць ',
      users: {
        users: 'Карыстальнікі',
        newUsers: 'Новыя карыстальнікі',
        paidAccounts: 'Платныя акаўнты',
      },
      photos: {
        photos: 'Фатаграфіі',
        uploadedPhotos: 'Загружаныя фатаграфіі',
      },
    },
    payments: {
      userName: 'Імя карыстальніка',
      dateAdded: 'Дата дадавання',
      amount: 'Сума, $',
      subscription: 'Падпіска',
      paymentMethod: 'Метад плацежу',
      autoUpdate: 'Аўтаматычнае абнаўленне',
    },
  },
}
