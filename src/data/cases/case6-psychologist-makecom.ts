// @shared

export const case6PsychologistMakeCom = {
  id: 6,
  category: 'Make.com',
  categoryClass: 'bg-violet-400/20 text-violet-400',
  gradientClass: 'bg-gradient-to-br from-violet-400/20 to-purple-500/20',
  icon: 'fas fa-link',
  title: 'Автоматизация записи к специалисту с интеграцией через Make.com',
  description: 'Веб-приложение для онлайн-записи с управлением расписанием и автоматической передачей данных в Make.com для связки с любыми сервисами.',
  
  task: 'Создать удобное веб-приложение для онлайн-записи, где клиент может выбрать дату и время консультации, а эксперт управляет расписанием, длительностью сессий, рабочими днями и блокировками дат.',
  
  taskDetails: 'При записи клиента данные должны автоматически отправляться в Make.com, откуда можно связать всё с Google Calendar, Sheets и другими сервисами. Вместо прямого подключения к Google API реализована универсальная интеграция через вебхуки.',
  
  technologies: [
    'React + Tailwind CSS — интерфейс и компоненты приложения',
    'Lucide-react — иконки',
    'localStorage + window.storage — хранение данных клиента и расписания',
    'Make.com Webhooks — передача данных для автоматизаций'
  ],
  
  roles: [
    {
      name: 'Клиент',
      features: [
        'Вводит имя и телефон для идентификации',
        'Видит доступные даты и временные слоты',
        'Может записаться, отменить запись или просмотреть текущую'
      ]
    },
    {
      name: 'Психолог',
      features: [
        'Входит в систему по паролю',
        'Управляет расписанием: рабочими днями, временем начала/окончания, длительностью сессии',
        'Управляет перерывами и заблокированными датами',
        'Видит список всех записей с возможностью удаления'
      ]
    }
  ],
  
  integration: 'При создании или отмене записи приложение автоматически отправляет POST-запрос в Make Webhook. Далее внутри Make можно создать событие в Google Calendar, записать данные в Google Sheets, отправить уведомление психологу или клиенту в Telegram, добавить задачу в CRM.',
  
  codeExample: {
    filename: 'webhook-integration.js',
    code: `await fetch('https://hook.eu1.make.com/XXXXXXXXXXXX', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    eventType: 'appointment_created',
    data: {
      id: Date.now(),
      date,
      time,
      clientName,
      clientPhone
    }
  })
})`
  },
  
  screenshots: [
    {
      url: 'https://msk.cdn-chatium.io/thumbnail/image_msk_2W4tJAI62k.1822x912.png/s/1024x',
      caption: 'Форма записи клиента с вводом контактных данных'
    },
    {
      url: 'https://msk.cdn-chatium.io/thumbnail/image_msk_pkdoJUOyrQ.1357x766.png/s/1024x',
      caption: 'Календарь выбора даты с доступными слотами'
    },
    {
      url: 'https://msk.cdn-chatium.io/thumbnail/image_msk_vHto6jDAKz.1359x897.png/s/1024x',
      caption: 'Панель для управления записями клиентов'
    }
  ],
  
  results: [
    '✅ Клиент видит актуальные свободные слоты',
    '✅ Специалист управляет расписанием без ручного ввода',
    '✅ Все данные автоматически попадают в Make',
    '✅ Из Make можно связать любые внешние сервисы',
    '✅ Без сложной авторизации Google OAuth и токенов'
  ],
  
  extensions: [
    'Добавить подтверждение записи через Telegram или email',
    'Создать виджет для вставки на сайт',
    'Добавить оплату через YooKassa / Stripe',
    'Сделать выгрузку статистики по сессиям'
  ],
  
  conclusion: 'Разработано полноценное приложение с понятным интерфейсом, хранением данных и гибкой интеграцией через Make.com. Подход позволяет быстро подключать любые внешние сервисы и строить автоматизации без изменения кода.',
  
  fullDescription: 'Создано веб-приложение для онлайн-записи клиентов к психологу с автоматической интеграцией через Make.com. Клиент может выбрать дату и время консультации, психолог управляет расписанием, а все данные автоматически передаются в Make для дальнейшей интеграции с Google Calendar, Sheets, Telegram и другими сервисами.',
  
  result: '100%',
  resultLabel: 'Автоматизация',
  duration: '10 дней',
  status: 'completed',
  filter: 'make-com',
  mainTech: ['React', 'Make.com', 'Webhooks'],
  allTech: ['React', 'Tailwind CSS', 'Make.com', 'Webhooks', 'localStorage', 'Google Calendar', 'Google Sheets', 'Telegram']
}

