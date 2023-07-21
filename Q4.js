class Game {
    constructor(level, theme, avatar) {
      this.level = level;
      this.theme = theme;
      this.avatar = avatar;
    }
  
    displayWinMessage() {
      throw new Error("Method 'displayWinMessage()' must be implemented.");
    }
  
    displayLoseMessage() {
      throw new Error("Method 'displayLoseMessage()' must be implemented.");
    }
  
    pauseGame() {
      console.log("Game is paused.");
    }
  
    resumeGame() {
      console.log("Game is resumed.");
    }
  
    cancelGame() {
      console.log("Game is canceled.");
    }
  }
  
  // Subclass: CarGame
  class CarGame extends Game {
    constructor(level, theme, avatar) {
      super(level, theme, avatar);
    }
  
    displayWinMessage() {
      console.log("Congratulations! You have reached the winning score in Car Game.");
    }
  
    displayLoseMessage() {
      console.log("Oops! You lost the Car Game.");
    }
  }
  
  // Subclass: ShootingGame
  class ShootingGame extends Game {
    constructor(level, theme, avatar, selectedMission) {
      super(level, theme, avatar);
      this.selectedMission = selectedMission;
    }
  
    displayWinMessage() {
      console.log("Congratulations! You have completed the selected mission in Shooting Game.");
    }
  
    displayLoseMessage() {
      console.log("Oops! You failed to complete the selected mission in Shooting Game.");
    }
  }
  
  // Subclass: PuzzleGame
  class PuzzleGame extends Game {
    constructor(level, theme, avatar, timeLimit) {
      super(level, theme, avatar);
      this.timeLimit = timeLimit;
    }
  
    displayWinMessage() {
      console.log("Congratulations! You have rearranged the puzzle within the time limit.");
    }
  
    displayLoseMessage() {
      console.log("Oops! You failed to rearrange the puzzle within the time limit.");
    }
  }
  
  // Usage example:
  const carGame = new CarGame("Beginner", "City", "Car1");
  carGame.displayWinMessage();
  carGame.displayLoseMessage();
  carGame.pauseGame();
  carGame.resumeGame();
  carGame.cancelGame();
  
  const shootingGame = new ShootingGame("Intermediate", "Jungle", "Soldier", "Mission 3");
  shootingGame.displayWinMessage();
  shootingGame.displayLoseMessage();
  shootingGame.pauseGame();
  shootingGame.resumeGame();
  shootingGame.cancelGame();
  
  const puzzleGame = new PuzzleGame("Advanced", "Nature", "Animal", 120); // 120 seconds time limit
  puzzleGame.displayWinMessage();
  puzzleGame.displayLoseMessage();
  puzzleGame.pauseGame();
  puzzleGame.resumeGame();
  puzzleGame.cancelGame();
  