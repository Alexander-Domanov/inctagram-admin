export const en = {
  translation: {
    navigation: {
      statistics: 'Statistics',
      userList: 'Users list',
      postList: 'PostsList list',
      paymentsList: 'Payments list',
      logout: 'Logout',
    },
    login: {
      signIn: 'Sign In',
      email: 'Email',
      password: 'Password',
    },
    userInfo: {
      userInfoMain: {
        backUsersList: 'Back to Users List',
        linkProfile: 'Link profile',
        userID: 'UserId',
        profileCreationDate: 'Profile Creation Date',
      },
      tabs: {
        uploadPhotos: 'Uploaded Photos',
        payments: 'Payments',
        followers: 'Followers',
        following: 'Following',
      },
      userPaymentsTable: {
        dataOfPayment: 'Date of Payment',
        endDateOfSubscription: 'End date of subscription',
        price: 'Price',
        subscription: 'Subscription Type',
        paymentType: 'Payment Type',
      },
      userFollowersTable: {
        userId: 'User ID',
        fullName: 'Full Name',
        userName: 'User Name',
        subscriptionDate: 'Subscription Date',
      },
      userFollowingTable: {
        userId: 'User ID',
        fullName: 'Full Name',
        userName: 'User Name',
        subscriptionDate: 'Subscription Date',
      },
    },
    postsList: {
      publishedPosts: 'Published posts',
      bannedPosts: 'Banned posts',
      banPost: 'Block post',
      unbanPost: 'Unblock post',
      selectedBox: 'Auto update',
      post: {
        showMore: 'Show more',
        showHide: 'Show hide',
        description: 'No description',
      },
      ban: {
        title: 'Ban post',
        description: 'Are you sure you want to ban this post',
        cancel: 'No',
        confirm: 'Yes',
        reason: {
          title: 'Reason for ban',
          ANOTHER_REASON: 'Another reason',
          SEXUAL_CONTENT: 'Sexual Content',
          VIOLENCE_AND_CRUELTY: 'Violence and Cruelty',
          DISCRIMINATION_AND_HATE: 'Discrimination and Hate',
          SPAM_AND_SCAMS: 'Spam and Scams',
          COPYRIGHT_INFRINGEMENT: 'Copyright Infringement',
          INAPPROPRIATE_BEHAVIOR: 'Inappropriate Behavior',
          PRIVACY_VIOLATION: 'Privacy Violation',
          ILLEGAL_ACTIVITIES: 'Illegal Activities',
          SHOCKING_OR_DISTURBING_CONTENT: 'Shocking or Disturbing Content',
          CONTROVERSIAL_TOPICS: 'Controversial Topics',
        },
      },
      unban: {
        title: 'Unban post',
        description: 'Are you sure you want to unban this post',
        cancel: 'No',
        confirm: 'Yes',
      },
    },
    userList: {
      deleteUser: 'Delete user',
      banUser: 'Ban in the system',
      unbanUser: 'Unban user',
      moreInfo: 'More information',
      search: 'Search',
      notSelected: 'Not selected',
      notBlocked: 'Not blocked',
      blocked: 'Blocked',
      show: 'Show',
      onPage: 'on Page',
      table: {
        profileLink: 'Profile link',
        username: 'Username',
        userId: 'ID',
        dateAdded: 'Date added',
        fullName: 'Full Name',
        lastSeen: 'Last Seen',
      },
      ban: {
        title: 'Ban user',
        description: 'Are you sure you want to ban this user',
        cancel: 'No',
        confirm: 'Yes',
        reason: {
          title: 'Reason for ban',
          anotherReason: 'Another reason',
          behavior: 'Bad behavior',
          advertising: 'Advertising placement',
          add: 'Add your reason',
        },
      },
      unban: {
        title: 'Unban user',
        description: 'Are you sure you want to unban this user',
        cancel: 'No',
        confirm: 'Yes',
      },
      delete: {
        title: 'Delete user',
        description: 'Are you sure you want to delete user',
        cancel: 'No',
        confirm: 'Yes',
      },
    },
    datePicker: {
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      NumberDayOfSelected: 'Number of selected days:',
    },
    statistics: {
      dateRange: 'Date range',
      comparedPeriod: 'Compared period',
      users: {
        users: 'Users',
        newUsers: 'New users',
        paidAccounts: 'Paid accounts',
      },
      photos: {
        photos: 'Photos',
        uploadedPhotos: 'Uploaded photos',
      },
    },
  },
}

export type LocaleType = typeof en
