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
  menuDot: {
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
  emptyText: {
    h2: {
      fontSize: '18px',
      color: '#333',
      fontWeight: 400,
      lineHeight: 1.3
    }
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
  createRoom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  roomImage: {
    width: '200px',
    height: '200px',
    borderRadius: '20px',
    overflow: 'hidden',
    marginBottom: '40px'
  },
  createContent: {
    h2: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '8px',
      fontWeight: 400
    },
    p: {
      fontSize: '14px',
      color: '#999',
      marginBottom: '30px'
    }
  },
  nextButton: {
    padding: '12px 40px',
    backgroundColor: '#ff9b71',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer'
  },
  board: {
    paddingTop: '10px'
  },
  dreamRoom: {
    paddingTop: '10px'
  },
  boardList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  boardItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
  },
  itemImage: {
    width: '60px',
    height: '60px',
    borderRadius: '10px',
    objectFit: 'cover'
  },
  itemDetails: {
    flex: 1,
    h3: {
      fontSize: '14px',
      color: '#333',
      marginBottom: '4px',
      fontWeight: 500
    },
    p: {
      fontSize: '12px',
      color: '#999',
      marginBottom: '6px',
      lineHeight: 1.3
    }
  },
  itemPrice: {
    fontSize: '14px',
    color: '#ff9b71',
    fontWeight: 600
  },
  addMoreButton: {
    marginTop: '20px',
    width: '100%',
    padding: '12px',
    backgroundColor: '#ff9b71',
    color: 'white',
    border: 'none',
    borderRadius: '15px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer'
  },
  bottomNav: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: 'white',
    borderTop: '1px solid #f0f0f0'
  },
  navItem: {
    background: 'none',
    border: 'none',
    color: '#ccc',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '8px',
    transition: 'color 0.2s'
  },
  navItemActive: {
    color: '#ff9b71'
  },
  navItemHover: {
    color: '#ff9b71'
  },
  demoNav: {
    position: 'fixed',
    top: '20px',
    left: '20px',
    display: 'flex',
    gap: '10px',
    zIndex: 1000
  },
  demoButton: {
    padding: '8px 12px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '12px',
    cursor: 'pointer'
  },
  demoButtonHover: {
    backgroundColor: '#555'
  },
  responsive: {
    '@media(max-width: 400px)': {
      app: {
        padding: '10px'
      },
      screen: {
        width: '100%',
        maxWidth: '375px',
        height: '100vh',
        maxHeight: '812px',
        borderRadius: 0
      }
    }
  }
};

export default styles;
