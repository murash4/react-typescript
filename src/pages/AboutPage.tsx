import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>Страница информации</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur consectetur illum iure pariatur sit voluptatum. Cupiditate dicta dolorum quidem!</p>
      <button
        className="btn"
        onClick={ () => history.push('/') }
      >Обратно к списку дел</button>
    </>
  )
}
