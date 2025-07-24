const styles = `
  /* Reset and base styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: #f5f5f5;
  }

  .app {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2a2a2a;
    padding: 20px;
  }

  .screen {
    width: 375px;
    height: 812px;
    background-color: #fdf6f0;
    border-radius: 25px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px 15px;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
  }

  .header-left,
  .header-right {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-dots {
    display: flex;
    gap: 2px;
  }

  .menu-dots span {
    width: 4px;
    height: 4px;
    background-color: #999;
    border-radius: 50%;
  }

  .back-button {
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-title {
    font-size: 16px;
    font-weight: 500;
    color: #ff9b71;
    text-align: center;
  }

  .profile-circle {
    width: 24px;
    height: 24px;
    background-color: #ffddcc;
    border-radius: 50%;
    position: relative;
  }

  .profile-circle::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: #ff9b71;
    border-radius: 50%;
  }

  .main-content {
    flex: 1;
    padding: 20px;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .empty-icon {
    margin-bottom: 40px;
    color: #ffddcc;
  }

  .empty-text h2 {
    font-size: 18px;
    color: #333;
    font-weight: 400;
    line-height: 1.3;
  }

  .create-button {
    margin-top: 30px;
    padding: 12px 24px;
    background-color: #ff9b71;
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }

  .create-room {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .room-image {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 40px;
  }

  .room-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .create-content h2 {
    font-size: 18px;
    color: #333;
    margin-bottom: 8px;
    font-weight: 400;
  }

  .create-content p {
    font-size: 14px;
    color: #999;
    margin-bottom: 30px;
  }

  .next-button {
    padding: 12px 40px;
    background-color: #ff9b71;
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }

  .board, .dream-room {
    padding-top: 10px;
  }

  .board-list, .dream-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .board-item, .dream-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }

  .item-image {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: cover;
  }

  .item-details {
    flex: 1;
  }

  .item-details h3 {
    font-size: 14px;
    color: #333;
    margin-bottom: 4px;
    font-weight: 500;
  }

  .item-details p {
    font-size: 12px;
    color: #999;
    margin-bottom: 6px;
    line-height: 1.3;
  }

  .item-price {
    font-size: 14px;
    color: #ff9b71;
    font-weight: 600;
  }

  .add-more-button {
    margin-top: 20px;
    width: 100%;
    padding: 12px;
    background-color: #ff9b71;
    color: white;
    border: none;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }

  .bottom-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 20px;
    background-color: white;
    border-top: 1px solid #f0f0f0;
  }

  .nav-item {
    background: none;
    border: none;
    color: #ccc;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: color 0.2s;
  }

  .nav-item.active {
    color: #ff9b71;
  }

  .nav-item:hover {
    color: #ff9b71;
  }

  .demo-nav {
    position: fixed;
    top: 20px;
    left: 20px;
    display: flex;
    gap: 10px;
    z-index: 1000;
  }

  .demo-nav button {
    padding: 8px 12px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
  }

  .demo-nav button:hover {
    background-color: #555;
  }

  @media (max-width: 400px) {
    .app {
      padding: 10px;
    }

    .screen {
      width: 100%;
      max-width: 375px;
      height: 100vh;
      max-height: 812px;
      border-radius: 0;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
