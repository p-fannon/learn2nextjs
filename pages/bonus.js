const Bonus = () => (
    <div class="container">
    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .vapor {
          max-height: 600px;
          max-width: 970px;
      }
      `}</style>
      <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
    <div><img className="vapor" src="https://i.imgur.com/YHXSabS.jpg" /></div>
    <div><img className="vapor" src="https://i.imgur.com/QehKNjY.jpg" /></div>
  </div>
)

export default Bonus