import React, { useState, ReactNode, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { QuizLayoutTemplate, QuizEngaging, QuizHabits, QuizHeight, QuizResult, Logo } from '@features'
import { Fade } from '@material-ui/core'
import { Stepper } from '@shared/ui'
import { useStyles } from './useStyles'

export const QuizPage: React.FC = () => {
  const classes = useStyles()
  const { slug } = useParams<{ slug: string }>()
  const history = useHistory()
  const [data, setData] = useState<Record<string, string>>({})
  const [currentSlug, setCurrentSlug] = useState('')

  const handleClickNext = () => {
    const nextQuiz = quizItems[currentQuizIndex + 1]
    nextQuiz && history.push(nextQuiz.slug)
  }

  const handleClickBack = () => {
    const backQuiz = quizItems[currentQuizIndex - 1]
    backQuiz && history.push(backQuiz.slug)
  }

  const handleSetData = (value: string) => {
    setData(o => {
      const newData = { ...o, [slug]: value }
      localStorage?.setItem('quiz', JSON.stringify(newData))
      return newData
    })
    handleClickNext()
  }

  useEffect(() => {
    const storageData = localStorage?.getItem('quiz')
    storageData && setData(JSON.parse(storageData))
  }, [])

  useEffect(() => {
    setCurrentSlug(slug)
  }, [slug])

  const quizItems: Array<{ slug: string; component: ReactNode }> = [
    { slug: 'habits', component: <QuizHabits value={data?.habits || ''} onClick={handleSetData} /> },
    {
      slug: 'height',
      component: (
        <QuizHeight
          value={Number((data?.height && data?.height.split(' ')[0]) || 0)}
          unitValue={(data?.height && data?.height.split(' ')[1]) || ''}
          onSubmit={handleSetData}
        />
      ),
    },
    { slug: 'engaging', component: <QuizEngaging value={data?.engaging || ''} onClick={handleSetData} /> },
    { slug: 'result', component: <QuizResult /> },
  ]

  const currentQuizIndex = quizItems.findIndex(quiz => quiz.slug === slug)
  const currentQuiz = quizItems[currentQuizIndex]

  if (!currentQuiz) {
    return null
  }

  return (
    <QuizLayoutTemplate header={<Logo />}>
      <div className={classes.root}>
        <div className={classes.stepper}>
          <Stepper current={currentQuizIndex + 1} size={quizItems.length} onBack={handleClickBack} />
        </div>
        {slug === currentSlug && (
          <Fade in={true} timeout={1000}>
            <div className={classes.content}>{currentQuiz.component}</div>
          </Fade>
        )}
      </div>
    </QuizLayoutTemplate>
  )
}
