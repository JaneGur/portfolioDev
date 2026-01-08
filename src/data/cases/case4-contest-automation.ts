// @shared

export const case4ContestAutomation = {
  id: 4,
  category: 'Автоматизация GC',
  categoryClass: 'bg-violet-400/20 text-violet-400',
  gradientClass: 'bg-gradient-to-br from-violet-400/20 to-purple-500/20',
  icon: 'fas fa-trophy',
  title: 'Автоматизация механики конкурса для двух клубов',
  description: 'Полностью автоматизированное управление видимостью блоков, сроками сдачи работ, голосованием и объявлением результатов.',
  fullDescription: 'В школе два клуба для начинающих и продвинутых художников. Каждый месяц в каждом клубе проходят конкурсы в четырёх номинациях: лёгкая, средняя, сложная и мини-курсы. Автоматизирован процесс отображения блоков, голосования и вывода результатов.',
  task: 'Обеспечить автоматизацию конкурсов для двух клубов с четырьмя номинациями, чтобы блоки с видимостью, сроки сдачи работ, голосование и результаты обновлялись без ручного вмешательства.',
  initialProcess: [
    'Настройка блоков вручную с учетом дат начала и окончания конкурса для каждой категории и каждого клуба.',
    'Ручная активация и деактивация блоков на основе времени и даты.',
    'Высокий риск ошибок и затраты времени каждый месяц.'
  ],
  initialProcessNote: 'Каждый месяц настройка требовала большого количества ручной работы, с риском ошибок при активации/деактивации блоков.',
  solutionOverview: 'Скрипты настроили автоматическую видимость блоков по датам и времени. Блоки появляются и исчезают автоматически, голосование и результаты показываются строго по расписанию, без ручного вмешательства.',
  codeBlocks: [
    {
      filename: 'contest-automation.js',
      code: `// Определяем дату начала и окончания видимости
const startVisibilityDate = new Date(year, month, 1, 0, 0, 0);
const endSubmissionDate = new Date(year, month, 10, 20, 0, 0);
const endVotingDate = new Date(year, month, 14, 20, 0, 0);

// Функция проверки видимости блока
function updateBlockVisibility(currentDate) {
  if (currentDate >= startVisibilityDate && currentDate <= endSubmissionDate) {
    showSubmissionBlocks();
    hideVotingBlocks();
    hideResultsBlocks();
  } else if (currentDate > endSubmissionDate && currentDate <= endVotingDate) {
    hideSubmissionBlocks();
    showVotingBlocks();
    hideResultsBlocks();
  } else if (currentDate > endVotingDate) {
    hideSubmissionBlocks();
    hideVotingBlocks();
    showResultsBlocks();
  }
}

// Запускаем проверку каждые 5 минут
setInterval(() => updateBlockVisibility(new Date()), 300000);`
    }
  ],
  results: [
    'Автоматическое управление видимостью блоков для каждой категории и клуба',
    'Полностью автоматизированное голосование и вывод результатов',
    'Снижение ручной работы и исключение ошибок',
    'Экономия времени команды каждый месяц'
  ],
  conclusion: 'Теперь все настройки конкурсов происходят автоматически. Блоки с видимостью, голосование и результаты управляются скриптами, что полностью исключает ручную работу и снижает риск ошибок.',
  result: '2',
  resultLabel: 'Клуба',
  duration: '2 недели',
  status: 'completed',
  filter: 'getcourse',
  mainTech: ['GetCourse', 'Contest', 'Timer'],
  allTech: ['GetCourse', 'Contest Logic', 'Voting System', 'Timeline Management', 'Results']
}