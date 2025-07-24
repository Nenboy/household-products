const styles = {
  global: {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    },
    body: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
      backgroundColor: '#f5f5f5'
    }
  },
  app: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: '20px'
  },
  screen: {
    width: '375px',
    height: '812px',
    backgroundColor: '#fdf6f0',
    borderRadius: '25px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
  },
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 20px 15px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)'
  },
  headerLeft: {
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuDots: {
    display: 'flex',
    gap: '2px'
  },
  menuDotSpan: {
    width: '4px',
    height: '4px',
    backgroundColor: '#999',
    borderRadius: '50%'
  },
  backButton: {
    background: 'none',
    border: 'none',
    color: '#666',
    cursor: 'pointer',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: '16px',
    fontWeight: 500,
    color: '#ff9b71',
    textAlign: 'center'
  },
  headerRight: {
    width: '24px',
    height: '24px'
  },
  profileCircle: {
    width: '24px',
    height: '24px',
    backgroundColor: '#ffddcc',
    borderRadius: '50%',
    position: 'relative'
  },
  profileCircleAfter: {
    content: "''",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '12px',
    height: '12px',
    backgroundColor: '#ff9b71',
    borderRadius: '50%'
  },
  mainContent: {
    flex: 1,
    padding: '20px'
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  emptyIcon: {
    marginBottom: '40px',
    color: '#ffddcc'
  },
  emptyTextH2: {
    fontSize: '18px',
    color: '#333',
    fontWeight: 400,
    lineHeight: 1.3
  },
  createButton: {
    marginTop: '30px',
    padding: '12px 24px',
    backgroundColor: '#ff9b71',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer'
  },
  // You can continue with the rest in a similar fashion
};

export default styles;
