import logo from './logo.svg'

function App() {
  return (
    <div
      className='App'
      style={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img
        src={logo}
        className='App-logo'
        alt='logo'
        style={{ width: '500px' }}
      />
      <p>Em desenvoldimento...</p>
      <p>brunovcg@gmail.com</p>
    </div>
  )
}

export default App
