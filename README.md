# Battle Simulator: Werewolf

Battle Simulator: Werewolf is an Electron-based application designed to help **storytellers** and **players** create characters, simulate battles, and keep track of character stats.

This tool was created to assist narrators in making educated decisions about combat fairness in their campaigns. It is also useful for players who want to keep track of their characters and simulate battles before engaging in actual play.

## Features

- **Character Creation**: Create characters and keep track of them using the provided character sheet format.
- **Rituals & Gifts**: Manage rituals and gifts for your characters.
- **Fight Simulation**: Simulate basic hand-to-hand combat between characters.
- **Data Storage**: All data is stored using TypeORM with an SQLite database.
- **End-to-End Testing**: The application is tested using WebDriverIO with full application tests.

## Installation

### System Requirements

This is a basic Electron app, so the system requirements are minimal and follow typical Electron app needs.

- **Windows**: Version 10 or later
- **macOS**: Version 10.11 (El Capitan) or later
- **Linux**: Distribution that supports Electron apps (e.g., Ubuntu 20.04+)

### How to Install

1. Download the packaged application for your operating system (Windows, macOS, or Linux).
2. Extract the zip file.
3. Run the `wta.exe` file to launch the application.

## Usage

### Character Creation & Editing

The app provides a user-friendly GUI where you can create and edit characters based on the Werewolf character sheet. Fill out the details, such as attributes, skills, and other character statistics, and save them for later use in simulations.

### Fight Simulation

1. Load your characters, then create a fight.
2. Group them together to simulate a fight.
3. Set the number of times you want to simulate the fight.
4. Click "Begin Simulation" to start.
5. The results will be provided in a `.txt` file with details of each simulated battle.

### Rituals & Gifts

You can add and manage rituals and gifts for your characters via the application’s GUI, making it easy to keep track of what abilities your characters possess.

## Testing

To test the application:

1. Package the app by running:
   ```bash
   npm run package:test
   ```
2. Run the WebDriverIO tests with the following command:
   ```bash
   npm run wdio
   ```

## Roadmap

Other enhancements I'm planning are related to the simulation:

- Expanding the fight simulation to include additional combat mechanics (e.g., ranged combat, forms).
- More customization options for characters (e.g., weapons, combat maneuvers).

## Stack

This project uses the following technologies:

- Electron: Framework for building the desktop application.
- Typescript and React for renderer.
- Pure Typescript for main.
- TypeORM: Object-relational mapping for handling the SQLite database.
- WebDriverIO: End-to-end testing framework for the application.

## Disclaimer

This tool is provided as-is, with no official affiliations. It is not intended for commercial use.
